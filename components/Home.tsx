"use client";
import SelmHome from "@/app/assets/home.jpg";
import mobileHome from "@/app/mobile/mobileHome.jpg";
import Selm from "./Selm";

const Home = () => {
  return (
    <div id="home" className="flex h-screen items-end justify-start w-full">
      <Selm img={SelmHome} pic={mobileHome} title="Home image" />
      <p className="uppercase fs-147 z-10 px-8 lg:px-18 py-8">
        We build <br /> businesses, not <br /> just software
      </p>
    </div>
  );
};

export default Home;
