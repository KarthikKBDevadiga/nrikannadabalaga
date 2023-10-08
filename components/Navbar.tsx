import { Fragment, useEffect, useState } from "react";
import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import Link from "next/link";

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
              className="md:hidden text-white focus:outline-none absolute right-4 top-4"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M4 6h16M4 12h16m-7 6h7"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-4 text-white">
            <Link href="#">
              <div className="hover:text-gray-300">Home</div>
            </Link>
            <Link href="#">
              <div className="hover:text-gray-300">About Us</div>
            </Link>
            <Link href="#">
              <div className="hover:text-gray-300">Blog</div>
            </Link>
            <Link href="#">
              <div className="hover:text-gray-300">Past Events</div>
            </Link>
            <Link href="#">
              <div className="hover:text-gray-300">Feature Events</div>
            </Link>
            <Link href="/app/contact">
              <div className="hover:text-gray-300">Contact Us</div>
            </Link>
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
        <div className="fixed top-0 right-0 w-1/2 h-screen bg-gray-900/70 backdrop-blur-md md:w-1/2 md:max-w-md md:overflow-y-auto z-10">
          <div className="flex flex-col justify-center items-start h-full p-6 space-y-4">
            <Link href="#">
              <div
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </div>
            </Link>
            <Link href="#">
              <div
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </div>
            </Link>
            <Link href="#">
              <div
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </div>
            </Link>
            <Link href="#">
              <div
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Past Events
              </div>
            </Link>
            <Link href="#">
              <div
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Feature Events
              </div>
            </Link>
            <Link href="/app/contact">
              <div
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </div>
            </Link>
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
          mobileMenuOpen ? "translate-x-full md:translate-x-0" : "translate-x-0"
        }`}
      >
        {/* Your page content goes here */}
      </div>
    </div>
  );
}
