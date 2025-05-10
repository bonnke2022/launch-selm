"use client";
import SelmAbout from "@/app/assets/SelmAbout.jpg";
import mobileAbout from "@/app/mobile/mobileAbout.jpg";
import Selm from "./Selm";
import FormComponent from "./FormComponent";

const About = () => {
  return (
    <div
      className="relative h-screen flex w-full items-center justify-center px-4 md:px-8 py-2 md:py-6"
      id="about"
    >
      <Selm img={SelmAbout} pic={mobileAbout} title="about image" />
      <div className="z-10 w-full max-w-7xl h-screen flex flex-col lg:flex-row items-start md:items-center justify-around gap-10 md:gap-2 py-10 lg:py-20">
        <div className="flex flex-col self-start text-start md:py-10">
          <h2 className="uppercase z-10 text-[11px] md:text-[14px]">About</h2>
          <h1 className="capitalize font-bold text-[18px] md:whitespace-nowrap">
            Technology for
            <br /> Businesses
          </h1>
        </div>

        <section className="self-end md:py-14 text-end flex flex-col items-end lg:self-start gap-6 lg:gap-10 lg:order-3 max-w-xl">
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-[16.2px] md:text-[37.7px] lg:text-5xl">
              SELMCORP is more than a tech agency
            </h1>
            <h3 className="text-primary font-bold text-[10.7px] md:text-2xl">
              we're a business-building powerhouse.
            </h3>
          </div>
          <p className="text-[10.1px] md:text-[14.1px]">
            We don't just write code, we create scalable solutions that help
            African entrepreneurs thrive. From e-commerce websites to mobile
            apps and digital mentorship, we exist to empower growth, ignite
            innovation and drive the future of business through tech.
          </p>
        </section>
        <div className="flex flex-col items-center md:self-end">
          <h2 className="text-[16.2px] md:text-[20px]">
            Our mission is simple;
            <br /> Leverage us, so you <br />
            can be leveraged
          </h2>
          <div className="">
            <FormComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
