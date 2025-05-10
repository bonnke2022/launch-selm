"use client";
import { links, LinksProp } from "@/lib/links";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useActiveSection } from "@/lib/activeState";
import { useEffect, useState } from "react";

const Navbar = () => {
  const sectionIds = links.map((link: LinksProp) => link.title.toLowerCase());
  const activeId = useActiveSection(sectionIds);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-10 fixed w-full md:border-b-1 py-6 px-6 md:px-10 ${
        isScrolled ? "bg-[#0a0a0a]" : "bg-transparent"
      } flex items-center justify-between py-4 px-6  lg:px-30 z-30`}
    >
      <h1 className="text-xl font-bold">SELMCORP</h1>
      <ul className="hidden md:flex items-center gap-10 fs-120">
        {links.map((link: LinksProp) => {
          const isActive = activeId === link.title.toLowerCase();
          return (
            <li key={link.id} className="">
              <Link
                href={`#${link.title}`}
                className={
                  isActive ? "uppercase bg-purple py-5 px-6" : "uppercase"
                }
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Sheet>
        <SheetTrigger className="block md:hidden cursor-pointer">
          <Menu className="text-[#333] bg-[#fff] rounded-sm" />
        </SheetTrigger>

        <SheetContent className="flex lg:hidden flex-col items-start w-screen h-fit bg-[#181a1d] opacity-[0.9] gap-10">
          <SheetHeader>
            <SheetTitle>
              <span className="text-2xl font-bold text-white">SELMCORP</span>
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-8 w-full">
            {links.map((link: LinksProp) => {
              const isActive = activeId === link.title.toLowerCase();
              return (
                <li
                  key={link.id}
                  className={`border-b last:border-b-0 py-3 ${
                    isActive ? "bg-purple" : ""
                  }`}
                >
                  <SheetClose asChild className="">
                    <Link
                      href={`#${link.title}`}
                      className={`uppercase fs-150 font-semibold transition pl-4`}
                    >
                      {link.title}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
