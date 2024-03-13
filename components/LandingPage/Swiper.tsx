"use client";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useLayoutEffect, useRef } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Swiper() {
  const featureImageAnimRef3 = useRef<any>(null);

  useLayoutEffect(() => {
    gsap.to(featureImageAnimRef3.current, {
      rotation: -360,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 3,
    });
  }, []);

  return (
    <section
      className={`${poppins.className} flex justify-between p-16 bg-[#63EC33] relative`}
    >
      <div className="w-3/4">
        <div className="mt-4 text-5xl font-bold tracking-wide">
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
          >
            Join the teams making decisions
          </motion.h1>
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            className="mt-2"
          >
            based on data, not whim
          </motion.h1>
        </div>

        {/* Why Our Saas */}
        <div className="mt-6">
          <h1 className="font-bold text-2xl text-white uppercase">
            Why Our Saas ?
          </h1>

          <div className="pl-4">
            <ul className="list-disc">
              <li>Customizable Workflows</li>
              <li>Customizable Workflows</li>
              <li>Customizable Workflows</li>
              <li>Customizable Workflows</li>
              <li>Customizable Workflows</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-1/4"></div>

      <div className="absolute top-20 right-5 pointer-events-none">
        <Image
          ref={featureImageAnimRef3}
          src={"/assets/star.png"}
          alt=""
          height={300}
          width={300}
          className="w-32"
        />
      </div>
    </section>
  );
}
