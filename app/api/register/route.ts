import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/lib/firebase";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const auth = getAuth(app);
  const db = getFirestore(app);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
    });

    return new Response("User created and email stored in Firestore");
  } catch (error) {
    console.log(error);
    return new Response("Error creating user and storing email in Firestore");
  }
}
