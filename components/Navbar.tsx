"use client";
import { Fragment,useEffect, useState } from "react";
import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import classNames from "@/helpers/classNames";
import { Metadata } from "next";
import CloseIcon from "@/icons/CloseIcon";
import MenuIcon from "@/icons/MenuIcon";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Past Events", href: "#" },
  { name: "Feature Events", href: "#" },
  { name: "Contact Us", href: "/app/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="relative">
      <nav className="bg-gray-800 shadow">
        <div className="mx-auto max-w-7xl px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div>
                <img
                  src="/logo.png"
                  alt="Your Company"
                  className="w-8 h-8 mr-2"
                />
              </div>
            </Link>
            <button
              type="button"
              className="md:hidden text-white focus:outline-none"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-4 text-white">
            {navigation.map((item, itemIdx) => (
              <Link href={item.href} key={itemIdx}>
                <div className="hover:text-gray-300">{item.name}</div>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <BellIcon className="w-6 h-6" />
            </button>
            <Link href="/login">
              <div className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Login
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 w-1/2 md:hidden bg-gray-900/70 backdrop-blur-md z-10">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navigation.map((item, itemIdx) => (
              <div key={itemIdx}>
                <a
                  href={item.href}
                  className="text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <div>
              <button
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div
        className={`transition-all duration-300 ${
          mobileMenuOpen ? "translate-x-1/2" : "translate-x-0"
        }`}
      >
        {/* Your page content goes here */}
      </div>
    </div>
  );
}