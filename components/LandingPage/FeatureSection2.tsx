"use client";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

// Icon
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useLayoutEffect, useRef } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function FeatureSection2() {
  const featureImageAnimRef2 = useRef<any>(null);

  useLayoutEffect(() => {
    gsap.to(featureImageAnimRef2.current, {
      rotation: -360,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 3,
    });
  }, []);

  return (
    <section
      className={`${poppins.className} flex justify-between p-16 relative`}
    >
      <div className="w-1/2 p-8">
        <Image src={"/assets/features2.png"} alt="" height={512} width={512} />
      </div>

      <div className="w-1/2">
        <div className="mt-4 text-5xl font-bold tracking-wide">
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
            className="text-main"
          >
            Mitigate risks
          </motion.h1>
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            className="mt-2"
          >
            by managing your data
          </motion.h1>
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            className="mt-2"
          >
            10x faster than before
          </motion.h1>
        </div>

        <div className="mt-4 text-justify">
          <p>
            Reduce the following risks by using our CRM: data inconsistency,
            lost leads, time-consuming tasks, knowledge loss, inadequate
            forecasting, and lack of customer understanding.
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
            Start demo
            <MdOutlineArrowRightAlt className="text-3xl" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-0 right-5 pointer-events-none">
        <Image
          ref={featureImageAnimRef2}
          src={"/assets/round-asterisk.png"}
          alt=""
          height={300}
          width={300}
          className="w-32"
        />
      </div>
    </section>
  );
}
