"use client";
import SelmServices from "@/app/assets/SelmServices.jpg";
import mobileServices from "@/app/mobile/mobileServices.jpg";
import Selm from "./Selm";
import { categories, SelmCategories } from "@/lib/links";
import { motion } from "motion/react";
import { useState } from "react";

const Services = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  function toggleActive(id: number) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <div
      id="services"
      className="relative min-h-screen w-full flex flex-col items-center justify-around"
    >
      <Selm img={SelmServices} pic={mobileServices} title="Services image" />
      <div className="z-10 flex flex-col w-full min-h-[80vh] gap-10 justify-start px-6 lg:px-16 py-10">
        <h2 className="uppercase z-10 fs-140">services</h2>
        <div className="hidden md:flex flex-row items-center justify-center gap-6 mx-auto">
          {categories.map((category: SelmCategories) => {
            const isActive = category.id === activeId;
            return (
              <motion.section
                key={category.id}
                onClick={() => toggleActive(category.id)}
                className={`bg-[#333] rounded-lg ${
                  isActive ? "bg-purple" : ""
                } ${
                  isActive ? "" : ""
                } flex flex-col items-center justify-start px-6 py-6 cursor-pointer h-30 w-30`}
              >
                <h2
                  className={`${
                    isActive && "hidden"
                  } uppercase z-10 fs-110 font-bold`}
                >
                  {category.title}
                </h2>
                {isActive && (
                  <div>
                    <h2 className="uppercase z-10 fs-110 font-bold">
                      {category.title}
                    </h2>
                  </div>
                )}
              </motion.section>
            );
          })}
        </div>
        <div className="flex flex-col md:hidden items-center justify-center gap-3 mx-auto w-full">
          {categories.map((category: SelmCategories) => {
            const isActive = category.id === activeId;
            return (
              <motion.section
                key={category.id}
                onClick={() => toggleActive(category.id)}
                className={`bg-[#333] rounded-lg ${
                  isActive ? "bg-purple" : ""
                } ${
                  isActive ? "" : ""
                } flex flex-col items-center justify-start py-2 cursor-pointer whitespace-nowrap w-full`}
              >
                <h2
                  className={`${
                    isActive && "hidden"
                  } uppercase z-10 fs-110 font-bold`}
                >
                  {category.title}
                </h2>
                {isActive && (
                  <div>
                    <h2 className="uppercase z-10 fs-110 font-bold">
                      {category.title}
                    </h2>
                  </div>
                )}
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
