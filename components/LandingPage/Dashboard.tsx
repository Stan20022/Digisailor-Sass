"use client";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

export default function Dashboard() {
  const cursorImageRef = useRef<any>(null);

  useLayoutEffect(() => {
    gsap.to(cursorImageRef.current, {
      x: "+=20",
      y: "+=20",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <motion.section
      initial={{ background: "#EEE", opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "linear", delay: 0.5, duration: 1 }}
      className="h-screen py-16 flex justify-center items-center relative rounded-t-[30px]"
    >
      <motion.div>
        <Image
          src={"/assets/dashboard.png"}
          alt=""
          height={1000}
          width={1000}
          className="w-[60rem] rounded-lg shadow-md pointer-events-none"
        />
      </motion.div>

      <div className="absolute bottom-1/2 right-32">
        <Image
          src={"/assets/arrow-left.png"}
          alt=""
          height={300}
          width={300}
          className="w-20 pointer-events-none"
        />
      </div>

      <div ref={cursorImageRef} className="absolute bottom-20 right-1/2">
        <Image
          src={"/assets/cursor.png"}
          alt=""
          height={300}
          width={300}
          className="w-20 pointer-events-none"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "linear", delay: 0.5, duration: 1 }}
        className="absolute top-20 left-32"
      >
        <Image
          src={"/assets/curved-arrow.png"}
          alt=""
          height={300}
          width={300}
          className="w-20 pointer-events-none"
        />
      </motion.div>
    </motion.section>
  );
}
