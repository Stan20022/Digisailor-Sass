"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LoginSwiper from "@/components/LandingPage/MiniComponent/LoginSwiper";

// Icons
import { TiTick } from "react-icons/ti";
import { TfiReload } from "react-icons/tfi";
import { PiPasswordThin } from "react-icons/pi";
import { CiWarning, CiMail } from "react-icons/ci";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAlertFields, setIsAlertFields] = useState<boolean>(false);
  const [isAlertPasswords, setIsAlertPasswords] = useState<boolean>(false);
  const [isShowSuccess, setIsShowSuccess] = useState<boolean>(false);

  const handleSubmit = async (signIn: FormEvent) => {
    signIn.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      setIsAlertFields(true);
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setIsAlertPasswords(true);
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        localStorage.setItem("userId", user.uid);
        setIsShowSuccess(true);
        router.push("/dashboard");
      } else {
        setError("error");
      }
    } catch (error) {
      console.log("Error:", error);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className={`${poppins.className}relative bg-white flex justify-center items-center h-screen`}
    >
      <div className="flex justify-between items-center h-[85vh] w-[80vw] shadow-lg rounded-lg">
        <div className="w-1/2 h-full p-16">
          <div>
            <Image
              src={"https://www.digisailor.com/images/logo.png"}
              alt="logo"
              height={500}
              width={500}
              className="w-24"
            />
          </div>

          <div className="mt-4">
            <h1 className="text-3xl font-bold">
              Sign in and experience the app
            </h1>
            <p className="text-sm font-light">
              Welcome! Provide your credentials to begin logging in.
            </p>
          </div>

          {/* Register Form */}
          <div className="mt-8">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <CiMail className="absolute top-2 left-2 text-2xl text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="px-10 w-96"
                />
              </div>

              <div className="relative mt-4">
                <PiPasswordThin className="absolute top-2 left-2 text-2xl text-gray-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="px-10 w-96"
                />
              </div>

              <div className="mt-4 w-96 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    className="bg-main"
                    defaultChecked
                    disabled
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    remember me
                  </label>
                </div>

                <div className="text-[12px]">
                  <Link
                    href={"/register"}
                    className="underline text-main font-bold"
                  >
                    Forget password ?
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                {!isLoading ? (
                  <Button className="bg-main hover:bg-[#2da50d] w-96">
                    Login
                  </Button>
                ) : (
                  <Button disabled className="bg-[#2da50d] w-96">
                    <TfiReload className="mr-2 h-4 w-4 animate-spin" />
                    Please wait...
                  </Button>
                )}
              </div>
            </form>

            <div className="text-[12px] flex justify-center items-center mt-6">
              New user ?{" "}
              <Link href={"/register"} className="font-bold text-main ml-4">
                Create an account
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full">
          <LoginSwiper />
        </div>
      </div>

      {/* Alert Messages */}
      <AnimatePresence>
        {isAlertFields && (
          <motion.div
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="fixed bottom-10 left-0"
          >
            <Alert
              variant="destructive"
              className="bg-white bg-opacity-5 backdrop-blur-sm"
            >
              <CiWarning className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Ensure all fields are filled before proceeding.
                <div
                  onClick={() => setIsAlertFields(false)}
                  className="text-red-500 underline font-bold"
                >
                  click to close.
                </div>
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        {isAlertPasswords && (
          <motion.div
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="fixed bottom-10 left-0"
          >
            <Alert
              variant="destructive"
              className="bg-white bg-opacity-5 backdrop-blur-sm"
            >
              <CiWarning className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Passwords must be a minimum of 8 characters.
                <div
                  onClick={() => setIsAlertPasswords(false)}
                  className="text-red-500 underline font-bold"
                >
                  click to close.
                </div>
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        {isShowSuccess && (
          <motion.div
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="fixed bottom-10 left-0"
          >
            <Alert className="bg-white bg-opacity-5 backdrop-blur-sm text-main border-main">
              <TiTick className="h-4 w-4 text-main" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                SignIn Successful
                <div
                  onClick={() => setIsShowSuccess(false)}
                  className="text-main underline font-bold"
                >
                  click to close.
                </div>
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="fixed bottom-10 left-0"
          >
            <Alert
              variant="destructive"
              className="bg-white bg-opacity-5 backdrop-blur-sm"
            >
              <CiWarning className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error}
                <div
                  onClick={() => setError("")}
                  className="text-red-500 underline font-bold"
                >
                  click to close.
                </div>
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default SignIn;
