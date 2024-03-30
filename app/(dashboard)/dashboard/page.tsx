"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

interface UserProfileData {
  fullName: string;
  email: string;
  uid: string;
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
          setUserProfile(docSnap.data() as UserProfileData);
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
    <div>
      {userProfile ? (
        <div>
          <h2>{userProfile.fullName}</h2>
          <p>{session?.data?.user?.email}</p>
          <p>{userProfile.uid}</p>

          <button className="text-black" onClick={() => signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <p>No user is signed in</p>
      )}
    </div>
  );
}
