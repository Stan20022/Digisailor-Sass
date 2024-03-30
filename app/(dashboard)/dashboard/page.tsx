"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, storage } from "@/lib/firebase";
import { signOut, useSession } from "next-auth/react";
import { getDownloadURL, ref } from "firebase/storage";
import { User, onAuthStateChanged } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Icons
import { GoPeople } from "react-icons/go";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface UserProfileData {
  fullName: string;
  email: string;
  uid: string;
  role: string;
  photoURL?: string;
}

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data() as UserProfileData;
          const storageRef = ref(storage, `profile-pictures/${user.uid}`);
          const photoURL = await getDownloadURL(storageRef);
          userData.photoURL = photoURL;
          setUserProfile(userData);
        } else {
          console.log("No such document!");
        }
      } else {
        setUserProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll">
      {userProfile ? (
        <div>
          {userProfile.photoURL && (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage src={userProfile.photoURL} alt="@shadcn" />
                  <AvatarFallback>
                    <GoPeople />
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-fit text-sm">
                <div className="flex justify-start items-center gap-4">
                  Name: {userProfile.fullName}
                </div>
                <div className="flex justify-start items-center gap-4">
                  Role: {userProfile.role}
                </div>
                <div className="flex justify-start items-center gap-4">
                  Email: {session?.data?.user?.email}
                </div>
                <div className="flex justify-start items-center gap-4">
                  User ID: {userProfile.uid}
                </div>

                <div className="flex justify-center items-center">
                  <Button
                    variant="secondary"
                    onClick={() => signOut()}
                    className="mt-4"
                  >
                    Log Out
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      ) : (
        <p>You need to Signin to use this page</p>
      )}
    </div>
  );
}
