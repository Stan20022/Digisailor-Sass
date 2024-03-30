"use client";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { BiSolidDollarCircle } from "react-icons/bi";
import { Roboto, Poppins, Montserrat } from "next/font/google";

// Icon
import { IoPlayCircle } from "react-icons/io5";
import { useLayoutEffect, useRef } from "react";
import { featuresName, socialIcons } from "@/lib/constants";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  const year = new Date().getFullYear();
  const imageAnimRef1 = useRef<any>(null);
  const imageAnimRef2 = useRef<any>(null);
  const imageAnimRef3 = useRef<any>(null);

  useLayoutEffect(() => {
    gsap.to(imageAnimRef1.current, {
      rotation: 360,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 6,
    });
  }, []);

  useLayoutEffect(() => {
    gsap.to(imageAnimRef2.current, {
      rotation: 50,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 4,
    });
  }, []);

  useLayoutEffect(() => {
    gsap.to(imageAnimRef3.current, {
      rotation: -360,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 3,
    });
  }, []);

  return (
    <motion.footer
      initial={{ background: "#FFF" }}
      whileInView={{ background: "#0C0C0C" }}
      transition={{ ease: "linear", duration: 1, delay: 0.5 }}
      className="text-white relative"
    >
      <div className="p-16">
        <div
          className={`${roboto.className} py-8 w-[68rem] text-6xl font-bold tracking-wide`}
        >
          <motion.h1
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
          >
            Are you ready to manage your data
          </motion.h1>

          <motion.div
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
            className="mt-4"
          >
            <span className="text-main">10x faster</span> than before ?
          </motion.div>
        </div>

        <div className={`{${poppins.className} w-[30rem]`}>
          <motion.p
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            className="text-justify text-base"
          >
            Manage your business with our CRM SaaS application. It&apos;s like a one
            stop shop for all your company&apos;s needs. From managing data to
            keeping track of your team, our app makes everything easier. It&apos;s
            user-friendly, so you don&apos;t need to be a tech wizard to use it. Get
            ready to work smarter, not harder!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 1, delay: 2.5 }}
            className="flex justify-between mt-10"
          >
            <Button
              asChild
              variant={"outline"}
              className="rounded-full h-14 w-44 text-black"
            >
              <Link href={"/"}>
                Buy Now <BiSolidDollarCircle className="ml-2 text-2xl" />
              </Link>
            </Button>

            <Button
              asChild
              className="rounded-full h-14 w-44 bg-main hover:bg-[#2da50d] transition-all ease-linear duration-300"
            >
              <Link href={"/"}>
                Live Demo <IoPlayCircle className="ml-2 text-2xl" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Shapes */}
      <div className="absolute top-80 right-[35rem] pointer-events-none">
        <Image
          ref={imageAnimRef1}
          src={"/assets/asterisk.png"}
          alt=""
          height={300}
          width={300}
          className="w-32"
        />
      </div>

      <div className="absolute top-80 right-[25rem] pointer-events-none">
        <Image
          ref={imageAnimRef2}
          src={"/assets/star.png"}
          alt=""
          height={300}
          width={300}
          className="w-32"
        />
      </div>

      <div className="absolute top-80 right-[15rem] pointer-events-none">
        <Image
          ref={imageAnimRef3}
          src={"/assets/round-asterisk.png"}
          alt=""
          height={300}
          width={300}
          className="w-32"
        />
      </div>

      <div className="bg-white opacity-5 w-full h-[2px]"></div>

      <div
        className={`${poppins.className} mt-6 p-16 flex justify-between w-full`}
      >
        <div
          onContextMenu={(e) => e.preventDefault()}
          className="flex flex-col items-start"
        >
          {/* Logo */}
          <div className="flex justify-center gap-2 pointer-events-none">
            <Image
              src={"https://www.digisailor.com/images/favicon.ico"}
              alt="logo"
              height={500}
              width={500}
              className="w-8"
            />
            <Image
              src={"https://www.digisailor.com/images/white-logo.png"}
              alt="logo"
              height={500}
              width={500}
              className="w-28"
            />
          </div>

          {/* Address */}
          <div className="text-sm mt-6 text-white text-opacity-[0.5]">
            <p>97G/4C/1, 1st Floor, PSS Jayam Towers,</p>
            <p>Teachers Colony,</p>
            <p>Tuticorin-628008,</p>
            <p>Tamilnadu, IN.</p>
          </div>

          {/* Link */}
          <div className="text-base underline tracking-wide mt-6 text-white text-opacity-[0.5] hover:text-main transition-all ease-linear duration-200">
            <Link href={"https://www.digisailor.com"} target="_blank">
              www.digisailor.com
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            {socialIcons.map((social, socialKey) => (
              <Link
                key={socialKey}
                href={social.href}
                title={social.title}
                target="_blank"
                className=" text-white text-opacity-[0.5] hover:text-main transition-all ease-linear duration-200 text-lg"
              >
                <social.name />
              </Link>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div>
          <h1 className="font-bold">Platform</h1>
          <div className="mt-6 text-white text-opacity-[0.5]">
            <p>Planning</p>
            <p>Security</p>
            <p>Integrity</p>
            <p>Analytics</p>
            <p>Collaboration</p>
            <p>Data Management</p>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h1 className="font-bold">Resources</h1>
          <div className="mt-6 text-white text-opacity-[0.5]">
            <p>Scalability</p>
            <p>Message API</p>
            <p>Accessbility</p>
            <p>Collaboration</p>
            <p>Support Tools</p>
            <p>Integration Capabilities</p>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h1 className="font-bold">Solutions</h1>
          <div className="mt-6 text-white text-opacity-[0.5]">
            <p>Landing Page</p>
            <p>Web Templates</p>
            <p>Manage Calendar</p>
            <p>Manage Contacts</p>
            <p>Manage Appointments</p>
            <p>Employee management</p>
          </div>
        </div>

        {/* Features */}
        <div>
          <h1 className="font-bold">Features</h1>
          <div className="mt-6 text-white text-opacity-[0.5]">
            {featuresName.map((feature, featureKey) => (
              <div key={featureKey} className="flex items-center gap-2">
                <div className="bg-main h-2 w-2 rounded-full"></div>
                <p key={featureKey}>{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`{${montserrat.className} bg-white bg-opacity-5 px-16 py-4 w-full flex justify-between items-center text-[12px]`}
      >
        <div>SINCE 2024</div>
        <div>&copy; {year} All rights reserved - DIGISAILOR</div>
        <div>TERMS, PRIVACY POLICY</div>
      </div>
    </motion.footer>
  );
}
