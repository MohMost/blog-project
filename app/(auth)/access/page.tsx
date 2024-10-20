"use client";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GoogleLoginButton } from "react-social-login-buttons";
import { CgGoogle } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa6";
const page = () => {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("Authenticated");
      router.push("/");
    }
  }, [session?.status, router]);

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          return;
        }

        if (callback?.ok) {
          router.push("/");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex justify-center items-center h-full w-full bg-primary h-[90dvh]">
      <div className="bg-white shadow rounded-lg flex gap-5 justify-between  overflow-hidden my-10 sm:mx-auto sm:max-w-4xl  ">
        <div className="m-6 md:my-6 flex gap-2 flex-col justify-center items-center mx-auto ">
          <h2 className="text-2xl md:text-3xl m-2  font-extrabold text-[#42240C]">
            Login or signe up
          </h2>

          <span className="text-sm mx-6">
            Log in or Sign up with the links below
          </span>

          <button
            onClick={() => socialAction("google")}
            className="flex items-center gap-2 text-xl bg-primary py-1 px-4 rounded-full hover:bg-primary/80 duration-500 text-white"
          >
            <FaGoogle size={20} />
            Login with google
          </button>
        </div>
        <div className="w-1/3 md:flex justify-center items-center sm:rounded-lg hidden">
          <Image
            src="/assets/access.jpg"
            height={500}
            width={500}
            alt="Sign up form image"
            className="object-cover   lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
