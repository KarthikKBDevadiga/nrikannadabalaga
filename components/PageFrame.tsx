"use client";
import { Fragment, useState } from "react";
import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
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

interface PageFrameProps {
  children?: any;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
    structuredDatas?: any[];
  };
}

export default function PageFrame({ children, meta }: PageFrameProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <div className="flex flex-col overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 overflow-hidden bg-gray-900 shadow">
        <div className="flex items-center justify-between w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-x-4">
            <div className="relative w-9 h-9 md:hidden">
              <button
                type="button"
                className={classNames(
                  "absolute left-0 p-1 top-0 duration-500",
                  mobileMenuOpen
                    ? "-translate-x-7 opacity-0"
                    : "translate-x-0 opacity-100"
                )}
                onClick={() => {
                  setMobileMenuOpen(true);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-gray-900 w-7 h-7"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M640 512h768q13 0 22.5 9.5t9.5 22.5t-9.5 22.5l-384 384q-9.5 9.5-225 9.5t-22.5-9.5l-384-384q-9.5-9.5-9.5-22.5t9.5-22.5t22.5-9.5z" />
                </svg>
              </button>
              <button
                type="button"
                className={classNames(
                  "absolute left-0 top-0 p-1 duration-500",
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-7 opacity-0"
                )}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-gray-900 w-7 h-7"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1408 512H640q-13 0-22.5 9.5T608 544t9.5 22.5T640 576h768q13 0 22.5-9.5T1536 544t-9.5-22.5T1408 512zm128 768q0-13-9.5-22.5T1504 1248H736q-13 0-22.5 9.5T704 1280t9.5 22.5T736 1312h768q13 0 22.5-9.5T1504 1280zm0-256q0-13-9.5-22.5T1504 992H736q-13 0-22.5 9.5T704 1024t9.5 22.5T736 1056h768q13 0 22.5-9.5T1504 1024zm0-256q0-13-9.5-22.5T1504 736H736q-13 0-22.5 9.5T704 768t9.5 22.5T736 800h768q13 0 22.5-9.5T1504 768z" />
                </svg>
              </button>
            </div>

            <img className="w-auto h-8" src="/logo.png" alt="Your Company" />
          </div>
          <nav className="flex-1 hidden ml-8 md:flex md:gap-x-4 md:text-sm md:font-semibold md:leading-2 md:text-white">
            {navigation.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className={classNames(
                  "group relative flex col-span-1 rounded-md overflow-hidden duration-500",
                  "bg-gray-800 cursor-pointer"
                )}
              >
                <div
                  className={classNames(
                    "absolute z-0 w-0 h-full duration-500 bg-blue-1200 group-hover:w-full",
                    "bg-white bg-opacity-50"
                  )}
                />

                <Link href={item.href} passHref={true}>
                  <div className="z-9 flex w-full w-max px-4 py-1.5 cursor-pointer">
                    <div className="text-sm font-medium text-white duration-500 group-hover:text-900">
                      {item.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex items-center justify-end flex-1 gap-x-4">
            <div
              className={classNames(
                "group relative flex col-span-1 rounded-md overflow-hidden duration-500 border-gray-900",
                "bg-gray-800 cursor-pointer"
              )}
            >
              <div
                className={classNames(
                  "absolute z-0 w-0 h-full duration-500 bg-blue-1200 group-hover:w-full",
                  "bg-white bg-opacity-50"
                )}
              />

              <div className="z-9 flex w-full">
                <div className="flex-1 p-1.5">
                  <BellIcon
                    className="w-5 h-5 text-white duration-500 group-hover:text-600"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div
              className={classNames(
                "group relative flex col-span-1 rounded-md overflow-hidden duration-500 border-900",
                "bg-gray-800 cursor-pointer"
              )}
            >
              <div
                className={classNames(
                  "absolute z-0 w-0 h-full duration-500 bg-blue-1200 group-hover:w-full",
                  "bg-white bg-opacity-50"
                )}
              />

              <div className="z-9 flex w-full">
                <div className="flex-1 px-3 py-1.5">
                  <div className="text-sm font-medium text-white duration-500 group-hover:text-900">
                    Login
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 xl:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 top-16 bg-gray-900/80"
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="fixed top-16 inset-y-0 left-0 z-50 w-4/5 px-4 pb-6 overflow-y-auto bg-gray-900 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
                <div className="mt-2 space-y-2">
                  {navigation.map((item) => (
                    <Link href={item.href} passHref={true} key={item.name}>
                      <a className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </header>

      <div className="overflow-scroll">
        <main className="mx-auto overflow-scroll">{children}</main>
      
      </div>
    </div>
  );
}
