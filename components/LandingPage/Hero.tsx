"use client";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useLayoutEffect, useRef } from "react";

// Icons
import { IoPlayCircle } from "react-icons/io5";
import { BiSolidDollarCircle } from "react-icons/bi";

export default function Hero() {
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !divRefs.current.includes(el)) {
      divRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    divRefs.current.forEach((div, index) => {
      if (div) {
        gsap.to(div, {
          y: index % 2 === 0 ? "+=5" : "-=5",
          x: index % 2 === 0 ? "-=5" : "+=5",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1,
        });
      }
    });
  }, []);

  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-7xl font-bold w-[60vw] py-4">
          Easy way to manage the productivity
        </h1>
        <p className="w-[60vw] text-lg text-gray-500">
          Drive performance and your cross functional collaboration with easy to
          use dashboards, data vizualization and automated insights in one click
        </p>

        <div className="flex gap-8 mt-6">
          <Button
            asChild
            className="rounded-full w-40 bg-main hover:bg-[#2da50d] transition-all ease-linear duration-300"
          >
            <Link href={"/"}>
              Live Demo <IoPlayCircle className="ml-2 text-lg" />
            </Link>
          </Button>

          <Button asChild variant={"outline"} className="rounded-full w-40">
            <Link href={"/"}>
              Buy Now <BiSolidDollarCircle className="ml-2 text-lg" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero showcase images */}
      <div
        ref={addToRefs}
        onContextMenu={(e) => e.preventDefault()}
        className="absolute top-16 left-52 h-16 w-16 pointer-events-none flex flex-col justify-center items-center"
      >
        <div className="h-20 w-56 rounded-lg p-4 shadow-md mb-4 rotate-[8deg]">
          <div className="text-violet-600 text-[10px] uppercase font-bold border rounded-full border-violet-600 bg-violet-100 w-fit p-1">
            Improvement
          </div>
          <p className="text-[12px] mt-2">
            Just helpful for me, and I like it!
          </p>
        </div>
        <Image
          src={
            "https://images.pexels.com/photos/17136147/pexels-photo-17136147/free-photo-of-indian-traditional-beard-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          height={512}
          width={512}
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>

      <div
        ref={addToRefs}
        onContextMenu={(e) => e.preventDefault()}
        className="absolute top-16 right-44 h-16 w-16 pointer-events-none flex flex-col justify-center items-center"
      >
        <div className="h-20 w-80 rounded-lg p-4 shadow-md mb-4 -rotate-[8deg]">
          <div className="text-sky-500 text-[10px] uppercase font-bold border rounded-full border-sky-500 bg-sky-100 w-fit p-1">
            Perfect
          </div>
          <p className="text-[12px] mt-2">
            Very helpful for me to manage my data. Goodjob!
          </p>
        </div>
        <Image
          src={
            "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          height={512}
          width={512}
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>

      <div
        ref={addToRefs}
        onContextMenu={(e) => e.preventDefault()}
        className="absolute bottom-32 left-40 h-16 w-16 pointer-events-none flex flex-col justify-center items-center"
      >
        <div className="h-20 w-80 rounded-lg p-4 shadow-md mb-4 -rotate-[4deg]">
          <div className="text-red-500 text-[10px] uppercase font-bold border rounded-full border-red-500 bg-red-100 w-fit p-1">
            Cool App
          </div>
          <p className="text-[12px] mt-2">
            Its amazing app for my company to managing!
          </p>
        </div>
        <Image
          src={
            "https://images.pexels.com/photos/13326901/pexels-photo-13326901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          height={512}
          width={512}
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>

      <div
        ref={addToRefs}
        onContextMenu={(e) => e.preventDefault()}
        className="absolute bottom-32 right-32 h-16 w-16 pointer-events-none flex flex-col justify-center items-center"
      >
        <div className="h-20 w-56 rounded-lg p-4 shadow-md mb-4 rotate-[3deg]">
          <div className="text-orange-500 text-[10px] uppercase font-bold border rounded-full border-orange-500 bg-orange-100 w-fit p-1">
            Awesome
          </div>
          <p className="text-[12px] mt-2">I think its good app for manage</p>
        </div>
        <Image
          src={
            "https://images.pexels.com/photos/7860674/pexels-photo-7860674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          height={512}
          width={512}
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>
    </section>
  );
}
