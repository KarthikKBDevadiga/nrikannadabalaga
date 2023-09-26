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

const invoice = {
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  items: [
    {
      id: 1,
      title: 'Logo redesign',
      description: 'New logo and digital asset playbook.',
      hours: '20.0',
      rate: '$100.00',
      price: '$2,000.00',
    },
    {
      id: 2,
      title: 'Website redesign',
      description: 'Design and program new company website.',
      hours: '52.0',
      rate: '$100.00',
      price: '$5,200.00',
    },
    {
      id: 3,
      title: 'Business cards',
      description: 'Design and production of 3.5" x 2.0" business cards.',
      hours: '12.0',
      rate: '$100.00',
      price: '$1,200.00',
    },
    {
      id: 4,
      title: 'T-shirt design',
      description: 'Three t-shirt design concepts.',
      hours: '4.0',
      rate: '$100.00',
      price: '$400.00',
    },
  ],
};
const activity = [
  {
    id: 1,
    type: 'created',
    person: { name: 'Chelsea Hagmn' },
    date: '7d ago',
    dateTime: '2023-01-23T10:32',
  },
  {
    id: 2,
    type: 'edited',
    person: { name: 'Chelsea Hagon' },
    date: '6d ago',
    dateTime: '2023-01-23T11:03',
  },
  {
    id: 3,
    type: 'sent',
    person: { name: 'Chelsea Hagon' },
    date: '6d ago',
    dateTime: '2023-01-23T11:24',
  },
  {
    id: 4,
    type: 'commented',
    person: {
      name: 'Chelsea Hagon',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment:
      'Called client, they reassured me the invoice would be paid by the 25th.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  {
    id: 5,
    type: 'viewed',
    person: { name: 'Alex Curren' },
    date: '2d ago',
    dateTime: '2023-01-24T09:12',
  },
  {
    id: 6,
    type: 'paid',
    person: { name: 'Alex Curren' },
    date: '1d ago',
    dateTime: '2023-01-24T09:20',
  },
];
const moods = [
  {
    name: 'Excited',
    value: 'excited',
    icon: FireIcon,
    iconColor: 'text-white',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Loved',
    value: 'loved',
    icon: HeartIcon,
    iconColor: 'text-white',
    bgColor: 'bg-pink-400',
  },
  {
    name: 'Happy',
    value: 'happy',
    icon: FaceSmileIcon,
    iconColor: 'text-white',
    bgColor: 'bg-green-400',
  },
  {
    name: 'Sad',
    value: 'sad',
    icon: FaceFrownIcon,
    iconColor: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  {
    name: 'Thumbsy',
    value: 'thumbsy',
    icon: HandThumbUpIcon,
    iconColor: 'text-white',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'I feel nothing',
    value: null,
    icon: XMarkIconMini,
    iconColor: 'text-gray-400',
    bgColor: 'bg-transparent',
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AboutUs() {
  const [selected, setSelected] = useState(moods[5]);

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

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Invoice</h2>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Amount</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">
                  {invoice.total}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-lg font-semibold text-green-600">
                  Paid
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Client</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">
                  Alex Curren
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Due date</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">
                  January 31, 2023
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">
                  {invoice.items.map((item) => (
                    <div key={item.id} className="mb-2">
                      <p className="text-gray-700">
                        {item.title} - {item.description}
                      </p>
                      <p className="text-gray-600">
                        {item.hours} hours at {item.rate} per hour
                      </p>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Invoice Activity
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {activity.map((item) => (
                <div
                  key={item.id}
                  className={classNames(
                    "px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                    {
                      "bg-gray-50": item.type === "commented",
                    }
                  )}
                >
                  <dt className="text-sm font-medium text-gray-500">
                    {item.type === "commented" ? (
                      <div className="text-gray-900">
                        <span className="mr-2">{item.person.name}</span>
                        <img
                          className="w-6 h-6 rounded-full"
                          src={item.person.imageUrl}
                          alt=""
                        />
                      </div>
                    ) : (
                      item.person.name
                    )}{" "}
                    <span className="text-gray-400">{item.type}</span>
                  </dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {item.type === "commented" ? (
                      <p className="whitespace-pre-line">{item.comment}</p>
                    ) : (
                      "Added on " + item.date
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            How are you feeling today?
          </h2>
          <div className="mt-6 grid grid-cols-6 gap-0.5">
            {moods.map((mood) => (
              <div
                key={mood.name}
                onClick={() => setSelected(mood)}
                className={classNames(
                  mood.value === selected.value
                    ? "col-span-2 bg-white border-[#040404] rounded-lg border-2 p-4"
                    : "col-span-1 bg-white rounded-lg -space-x-px border-2 border-white",
                  "relative focus:outline-none group"
                )}
              >
                <div>
                  <span
                    className={classNames(
                      mood.iconColor,
                      mood.bgColor,
                      "rounded-lg inline-flex p-3 ring-4 ring-white"
                    )}
                  >
                    <mood.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4 text-center">
                  <h3
                    className={classNames(
                      mood.value === selected.value
                        ? "text-xl leading-6 font-medium text-gray-900"
                        : "text-base leading-6 font-medium text-gray-500",
                      "group-hover:text-gray-700"
                    )}
                  >
                    {mood.name}
                  </h3>
                </div>
                <div className="mt-3">
                  <span
                    className={classNames(
                      mood.value === selected.value
                        ? "bg-[#0d0c0c] ring-[#0a0909] ring-opacity-50 text-white"
                        : "bg-white",
                      "absolute inset-0 rounded-lg border-2 pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageFrame>
  );
}