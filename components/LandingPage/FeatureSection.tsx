"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

// Icon
import { MdOutlineArrowRightAlt } from "react-icons/md";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function FeatureSection() {
  return (
    <section className={`${poppins.className} flex justify-between p-16`}>
      <div className="w-1/2">
        <div className="mt-4 text-5xl font-bold tracking-wide">
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
            className="text-[#63EC33]"
          >
            Save time
          </motion.h1>
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            className="mt-2"
          >
            by having everything
          </motion.h1>
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            className="mt-2"
          >
            in one platform
          </motion.h1>
        </div>

        <div className="mt-4 text-justify">
          <p>
            Manage your company and business more efficiently and reliably with
            our cloud-based SaaS web app, which provides CRM. Easily handle employee management and other
            operations, including appointments and calendars.
          </p>
        </div>

        <motion.div
          initial={{
            scale: 1,
            borderColor: "#63EC33",
            color: "#63EC33",
            background: "#FFF",
          }}
          whileHover={{
            borderColor: "#000",
            color: "#FFF",
            background: "#63EC33",
          }}
          whileTap={{ scale: 1.1 }}
          transition={{ ease: "easeInOut" }}
          className="flex justify-center items-center w-52 mt-6 py-2 border rounded-full"
        >
          <Link
            href={"/dashboard"}
            className="flex justify-between items-center whitespace-nowrap"
          >
            Go to dashboard
            <MdOutlineArrowRightAlt className="text-3xl" />
          </Link>
        </motion.div>
      </div>

      <div className="w-1/2 p-8">
        <Image src={"/assets/features.png"} alt="" height={512} width={512} />
      </div>
    </section>
  );
}
