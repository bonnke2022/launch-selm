import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Countdown from "@/components/Countdown";
import Services from "@/components/Services";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col gap-50">
        <Navbar />
        <Home />
        <Countdown />
        <About />
        <Services />
        <Promo />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
