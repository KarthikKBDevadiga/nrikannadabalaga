'use client';

import { Fragment, useState } from 'react';
import { Dialog, Listbox, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  CalendarDaysIcon,
  CheckCircleIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid';
import PageFrame from '@/components/PageFrame';
import { Metadata } from 'next';
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AboutUs() {
  const [selected, setSelected] = useState();

  return (
    <PageFrame meta={{ title: "About Us" }}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:max-w-none mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              NRI Kannada Balaga
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Kannada Balaga UK is turning 40 years old! We are delighted to
              invite you to attend Kannada Balaga’s 40th Anniversary
              celebrations to be held on 30th September and 1st October 2023 at
              Byron Hall, Christchurch Ave, Harrow, London HA3 5BD!
            </p>
            <p className="mt-4 text-lg text-gray-500">
              The program has a Royal presence – His Highness Yaduveer
              Krishnadutta Chamaraja Wadiyar, Maharaja of Mysore, will be the
              Chief Guest for the event! Iconic personalities like Dr Gururaja
              Karajagi, Shri Vishweshwara Bhat, and His Holiness Swamy
              Japanandaji Maharaj are the Guests of Honour. To top it all, we
              have melody king Rajesh Krishnan and team entertaining the crowd
              with their fantastic music!
            </p>
          </div>
          <div className="mt-8 max-w-md mx-auto">
            <div className="group flex border-2 border-gray-400 focus-within:border-[#ff0000] duration-500 max-w-xl mx-auto mt-16 rounded-md">
              <input
                className="flex-1 px-3 py-1.5 outline-none bg-transparent text-sm focus:placeholder-red-300 placeholder-gray-400 duration-500"
                type="email"
                placeholder="ashokkumar@gmail.com"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  className="py-1.5 px-4 bg-gray-400 cursor-pointer duration-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      
                  
                  

     
    </PageFrame>
  );
}