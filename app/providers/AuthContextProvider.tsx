"use client";
import { auth, db, storage } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { createContext, useState, useEffect, useContext } from "react";

interface AuthState {
  userDetails: UserDetails | null;
  profilePicUrl: string | null;
  signOut: () => Promise<void>;
}

interface UserDetails {
  email: string;
  fullName: string;
  role: string;
}

// Create a context
const AuthContext = createContext<AuthState | undefined>(undefined);

// Create a provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);

  const signOut = async () => {
    await auth.signOut();
    setUserDetails(null);
    setProfilePicUrl(null);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const docRef = doc(db, "Admins", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as UserDetails;
          setUserDetails(data);
        } else {
          console.log("No such document!");
        }

        // Get profile picture URL
        const storageRef = ref(storage, `profile-pictures/${userId}`);
        const url = await getDownloadURL(storageRef);
        setProfilePicUrl(url);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider value={{ userDetails, profilePicUrl, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
