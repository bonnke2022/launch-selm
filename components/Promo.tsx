"use client";
import blackSelm from "@/app/assets/blackSelm.jpg";
import mobileSelm from "@/app/mobile/mobilePromo.jpg";
import Selm from "./Selm";
import laptop from "@/app/mobile/laptop.png";
import Image from "next/image";
import { ArrowBigDown } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Promo = () => {
  return (
    <div id="promo" className="relative flex min-h-screen overflow-hidden">
      <Selm img={blackSelm} pic={mobileSelm} title="Promo image" />
      <div className="z-10 max-w-6xl overflow-hidden h-screen flex flex-col lg:flex-row  items-start md:items-center lg:items-end justify-around pb-10 lg:pl-20">
        <section className="flex flex-col md:w-1/2 lg:w-full px-4 pt-4">
          <h1 className="text-3xl lg:text-7xl font-extrabold">
            <span className="text-[#56c035]">63%</span> off
          </h1>
          <h2 className="text-2xl lg:text-[40.9px] font-extrabold">
            E-commerce <br /> Stores
          </h2>
          <h4 className="text-sm lg:text-[16.3px] uppercase pb-4 lg:pb-0">
            offer valid for the first{" "}
            <span className="text-[#56c035] text-[28.8px] lg:text-[43.9px] font-extrabold">
              97
            </span>{" "}
            business
          </h4>
          <p className="text-xs pb-4 lg:pb-0">
            That's a full online store, domain, hosting payment integration,
            mobile responsiveness, business email, everything at just 37%
          </p>
          <div className="self-center flex flex-col items-center w-full">
            <h4 className="font-bold text-sm">secure your spot</h4>
            <div className="flex items-center gap-2">
              <ArrowBigDown className="text-white w-6 h-6" />
              <ArrowBigDown className="text-purple w-6 h-6" />
              <ArrowBigDown className="text-white w-6 h-6" />
            </div>
            <Button className="w-full font-bold">
              <Link href="#about">Join Our Email List</Link>
            </Button>
          </div>
        </section>
        <div className=" w-full relative">
          <div className="absolute font-bold top-12 md:top-30 md:left-8  left-6 lg:left-10 rotate-330">
            <p>1,143,000</p>
            <p>423, 000</p>
          </div>
          <Image
            src={laptop}
            alt="laptop"
            width={50}
            height={5}
            className="object-contain w-full"
            loading="lazy"
            priority={false}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
