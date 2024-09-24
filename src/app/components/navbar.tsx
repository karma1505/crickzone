import React, { useEffect, useState } from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconInfoCircle,
  IconBrandX,
  IconPencil,
  IconHome,
  IconCamera,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-6 w-6 sm:h-8 sm:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Gallery",
      icon: (
        <IconCamera className="h-6 w-6 sm:h-8 sm:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Register",
      icon: (
        <IconPencil className="h-6 w-6 sm:h-8 sm:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-6 w-6 sm:h-8 sm:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About Us",
      icon: (
        <IconInfoCircle className="h-6 w-6 sm:h-8 sm:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full h-[8rem] sm:h-[10rem] flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FloatingDock
        mobileClassName="translate-y-16 sm:translate-y-20"
        items={links}
      />
    </div>
  );
}
