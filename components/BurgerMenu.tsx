"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from 'next/link'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  // Close menu if a click happens outside of the menu
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {/* Burger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-black focus:outline-none"
      >
         <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menu Content */}
      <div
  className={cn(
    "absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md shadow-lg",
    "z-50 transform origin-top-right transition-all duration-400 ease-out",
    isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
  )}
>
           <ul className="py-2 font-inter">
           <li>
              <Link
              href="/"
                className="block px-4 py-2 text-sm text-black text-center hover:bg-[#999999] transition-colors duration-300 ease-in-out"
                onClick={closeMenu}
              >
                Home 
              </Link>
            </li>
            <li>
              <Link 
              href="https://dhg-freiburg.de/"
                className="block px-4 py-2 text-sm text-black text-center hover:bg-[#999999] transition-colors duration-300 ease-in-out"
                onClick={closeMenu}
              >
                DHG 
              </Link>
            </li>
            <li>
              <Link
                href="https://dhg-freiburg.de/schulleben/schule-als-staat/"
                className="block px-4 py-2 text-sm text-black text-center hover:bg-[#999999] transition-colors duration-300 ease-in-out"
                onClick={closeMenu}
              >
                Schule als Staat 
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default BurgerMenu;

