"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, storage } from "@/lib/firebase";
import { signOut, useSession } from "next-auth/react";
import { getDownloadURL, ref } from "firebase/storage";
import { User, onAuthStateChanged } from "firebase/auth";

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
          <p>User ID: {userProfile.uid}</p>
          <p>User Role: {userProfile.role}</p>
          <h2>Name: {userProfile.fullName}</h2>
          <p>Email: {session?.data?.user?.email}</p>

          {userProfile.photoURL && (
            <Image
              src={userProfile.photoURL}
              alt="Profile"
              height={512}
              width={512}
              className="w-12 rounded-full"
            />
          )}

          <button className="text-black" onClick={() => signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <p>You need to Signin to use this page</p>
      )}
    </div>
  );
}
