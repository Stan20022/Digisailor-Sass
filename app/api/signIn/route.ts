import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/lib/firebase";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const auth = getAuth(app);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    return new Response(`User ${user.email} signed in successfully`);
  } catch (error) {
    console.log(error);
    return new Response("Error signing in user");
  }
}
