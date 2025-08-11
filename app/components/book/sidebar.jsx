"use client";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarLinks = [
    "الكتب المقررة",
    "دليل المعلم",
    "ملخصات",
    "اختبارات محوسبة",
    "اختبارات",
    "أوراق عمل",
    "المشروع",
  ];
  return (
    <nav className="h-fit sm:w-[250px] sm:h-full bg-primary-500 bg-white py-4 pb-2 px-6 sm:py-4 sm:px-4 flex sm:flex-col items-center relative">
      <div>
        <button
          className="relative sm:hidden"
          onClick={() => setIsOpen((x) => !x)}
        >
          <div className="relative flex overflow-hidden items-center justify-center transform transition-all duration-200">
            <div
              className={twMerge(
                "flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-200 origin-center overflow-hidden",
                isOpen && "rotate-90"
              )}
            >
              <div
                className={twMerge(
                  "bg-primary h-[2px] w-7 transform transition-all duration-200 origin-left rotate-0",
                  isOpen && "rotate-[42deg] w-2/3"
                )}
              ></div>
              <div
                className={twMerge(
                  "bg-primary h-[2px] w-7 rounded transform transition-all duration-200",
                  isOpen && "translate-x-10"
                )}
              ></div>
              <div
                className={twMerge(
                  "bg-primary h-[2px] w-7 transform transition-all duration-200 origin-left",
                  isOpen && "-rotate-[42deg] w-2/3"
                )}
              ></div>
            </div>
          </div>
        </button>
      </div>
      <Link
        className="block font-heading-5 text-primary-200 text-center mr-auto mt-4 sm:my-12 sm:mx-0"
        href="/"
      >
        STEAM
      </Link>
      <ul
        className={twMerge(
          "hidden sm:flex flex-col gap-y-4 items-center absolute z-30 bg-neutral-200 shadow-md rounded-m top-[130%] right-1.5 duration-100 opacity-0 sm:opacity-100 sm:bg-transparent sm:shadow-none sm:rounded-none sm:top-auto sm:relative",
          isOpen && "opacity-100 block"
        )}
      >
        {sidebarLinks.map((link, index) => (
          <li className="w-full p-2 sm:p-0" key={index}>
            <a
              href="#"
              className={twMerge(
                "w-full block font-content-bold p-2 px-5 rounded-md text-primary-400 sm:text-neutral-800",
                index === 0 && "bg-primary-200/10 text-primary sm:text-primary"
              )}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={twMerge(
          "overlay fixed inset-0 bg-black z-20 opacity-0 duration-100 pointer-events-none",
          isOpen && "opacity-10 pointer-events-auto"
        )}
        onClick={() => setIsOpen(false)}
      />
    </nav>
  );
}
