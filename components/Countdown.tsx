"use client";
import SelmCountdown from "@/app/assets/SelmCountdown.jpg";
import mobileCountdown from "@/app/mobile/mobileCountdown.jpg";
import Selm from "./Selm";
import { useEffect, useState } from "react";
import LoadingCircleSpinner from "./Loading";

const launch_date = new Date(Date.UTC(2025, 5, 30, 0, 0, 0)).getTime();

export const getTimeLeft = () => {
  const now = new Date().getTime();
  const difference = launch_date - now;

  if (difference <= 0) {
    return { days: 0, hrs: 0, mins: 0, secs: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
    mins: Math.floor((difference / (1000 * 60)) % 60),
    secs: Math.floor((difference / 1000) % 60),
  };
};
console.log(new Date().toISOString());

const Countdown = () => {
  const [timerLeft, setTimerLeft] = useState<{
    days: number;
    hrs: number;
    mins: number;
    secs: number;
  } | null>(null);

  useEffect(() => {
    setTimerLeft(getTimeLeft()); // ✅ Set initial state on the client
    const interval = setInterval(() => {
      setTimerLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timerLeft)
    return (
      <div className="relative h-screen flex items-start md:items-center lg:items-start justify-center">
        <LoadingCircleSpinner />
      </div>
    );
  return (
    <div
      id="countdown"
      className="relative h-screen flex items-start md:items-center lg:items-start justify-center"
    >
      <Selm img={SelmCountdown} pic={mobileCountdown} title="Countdown image" />
      <div className="flex flex-col items-center justify-center z-10 mt-30 gap-10">
        <h2 className="uppercase flex flex-col items-center justify-center text-[25px] lg:text-[33.7px]">
          <span>countdown</span>
          <div className="flex flex-col items-center md:flex-row md:gap-2">
            <span>to official</span>
            <span>launch</span>
          </div>
        </h2>
        <div className="hidden md:flex gap-6">
          {Object.entries(timerLeft).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-center items-center border-r-10 border-white last:border-none"
            >
              <h1 className="pr-6 text-[76px] font-extrabold">
                {String(value).padStart(2, "0")}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:hidden">
          {Object.entries(timerLeft).map(([key, value]) => (
            <div key={key} className="flex justify-start">
              <h1 className="w-25 text-[40.2px] font-extrabold border-r-8">
                {String(value).padStart(2, "0")}
              </h1>
              <h1 className="pl-6 text-[40.2px] font-extrabold">{key}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
