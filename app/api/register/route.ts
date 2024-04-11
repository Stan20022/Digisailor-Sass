import { NextResponse } from "next/server";
import { setDoc, doc } from "firebase/firestore";
import { auth, db, storage } from "@/lib/firebase";
import { ref, uploadBytes, StorageReference } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(request: Request) {
  const { email, password, fullName, selectedFile } = await request.json();

  try {
    const signUpUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (signUpUser.user && selectedFile) {
      const storageRef: StorageReference = ref(
        storage,
        `profile-pictures/${signUpUser.user.uid}`
      );
      await uploadBytes(storageRef, selectedFile);
    }

    if (signUpUser.user) {
      await setDoc(doc(db, "users", signUpUser.user.uid), {
        email: signUpUser.user.email,
        uid: signUpUser.user.uid,
        fullName,
        role: "Admin",
      });
    }

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    const errorCode = (error as any).code;
    if (errorCode === "auth/email-already-in-use") {
      return NextResponse.json(
        { message: "The email address is already in use" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export const config = {
  runtime: "edge",
};
