import { Fragment, useEffect, useState } from "react";
import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import { BellIcon, XMarkIcon as XMarkIconOutline } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import classNames from "@/helpers/classNames";
import CloseIcon from "@/icons/CloseIcon";
import MenuIcon from "@/icons/MenuIcon";

const navigation = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Blog", id: "blog" },
  { name: "Past Events", id: "past-events" },
  { name: "Feature Events", id: "feature-events" },
  { name: "Contact Us", id: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navigateToAboutUs = () => {
    // Programmatically navigate to the About Us page using next/router
    router.push("/about-us");
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
            <div>
              <img
                src="/logo.png"
                alt="Your Company"
                className="w-8 h-8 mr-2"
              />
            </div>
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
              <div
                key={itemIdx}
                className="hover:text-gray-300 cursor-pointer"
                onClick={() => {
                  if (item.id === "about") {
                    navigateToAboutUs();
                  }
                }}
              >
                {item.name}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <BellIcon className="w-6 h-6" />
            </button>
            <div
              className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Login
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 w-1/2 md:hidden bg-gray-900/70 backdrop-blur-md z-10">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navigation.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="text-white hover:text-gray-300 cursor-pointer"
                onClick={() => {
                  if (item.id === "about") {
                    navigateToAboutUs();
                  }
                  setMobileMenuOpen(false);
                }}
              >
                {item.name}
              </div>
            ))}
            <div
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={() => {
                window.location.href = "/login";
                setMobileMenuOpen(false);
              }}
            >
              Login
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
