// 'use client';
import { Fragment, useState } from 'react';
import { Dialog, Listbox, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  CalendarDaysIcon,
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
import {
  BellIcon,
  XMarkIcon as XMarkIconOutline,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Footer from '@/components/Footer';
import classNames from '@/helpers/classNames';
import { Metadata } from 'next';
import CloseIcon from '@/icons/CloseIcon';
import MenuIcon from '@/icons/MenuIcon';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Past Events', href: '#' },
  { name: 'Feature Events', href: '#' },
];
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
    person: { name: 'Chelsea Hagon' },
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
  const [selected, setSelected] = useState(moods[5]);

  return (
    <div className='flex flex-col overflow-hidden'>
      <header className='fixed inset-x-0 top-0 z-50 flex h-16 overflow-hidden bg-[#ffff00] shadow '>
        <div className='flex items-center justify-between w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='flex items-center gap-x-4'>
            <div className='relative w-9 h-9 md:hidden'>
              <button
                type='button'
                className={classNames(
                  'absolute left-0 p-1 top-0 duration-500',
                  mobileMenuOpen
                    ? '-translate-x-7 opacity-0'
                    : 'translate-x-0 opacity-100'
                )}
                onClick={() => {
                  setMobileMenuOpen(true);
                }}
              >
                <span className='sr-only'>Open main menu</span>
                <MenuIcon
                  className='text-gray-900 w-7 h-7'
                  aria-hidden='true'
                />
              </button>
              <button
                type='button'
                className={classNames(
                  'absolute left-0 top-0 p-1 duration-500',
                  mobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-7 opacity-0'
                )}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                <span className='sr-only'>Close main menu</span>
                <CloseIcon
                  className='text-gray-900 w-7 h-7'
                  aria-hidden='true'
                />
              </button>
            </div>

            <img className='w-auto h-8' src='/logo.png' alt='Your Company' />
          </div>
          <nav className='flex-1 hidden ml-8 md:flex md:gap-x-4 md:text-sm md:font-semibold md:leading-2 md:text-gray-700'>
            {navigation.map((item, itemIdx) => {
              return (
                <div
                  key={itemIdx}
                  className={classNames(
                    'group relative flex col-span-1 rounded-md overflow-hidden duration-500  ',
                    'bg-[#ff0000] cursor-pointer'
                  )}
                >
                  <div
                    className={classNames(
                      'absolute z-0 w-0 h-full duration-500 bg-blue-1200 group-hover:w-full',
                      'bg-white bg-opacity-50'
                    )}
                  />

                  <div className='z-[9] flex w-full w-max '>
                    <div className='flex-1 px-4 py-1.5'>
                      <div className='text-sm font-medium text-white duration-500 group-hover:text-white'>
                        {item.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
          <div className='flex items-center justify-end flex-1 gap-x-4'>
            <div
              className={classNames(
                'group relative flex col-span-1 rounded-md overflow-hidden duration-500  border-gray-900 ',
                'bg-[#ff0000] cursor-pointer'
              )}
            >
              <div
                className={classNames(
                  'absolute z-0 w-0 h-full duration-500 bg-blue-1200 group-hover:w-full',
                  'bg-white bg-opacity-50'
                )}
              />

              <div className='z-[9] flex w-full '>
                <div className='flex-1 p-1.5'>
                  <BellIcon
                    className='w-5 h-5 text-white duration-500 group-hover:text-white'
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
            <div
              className={classNames(
                'group relative flex col-span-1 rounded-md overflow-hidden duration-500  border-gray-900 ',
                'bg-[#ff0000] cursor-pointer'
              )}
            >
              <div
                className={classNames(
                  'absolute z-0 w-0 h-full duration-500 bg-blue-1200 group-hover:w-full',
                  'bg-white bg-opacity-50'
                )}
              />

              <div className='z-[9] flex w-full '>
                <div className='flex-1 px-3 py-1.5'>
                  <div className='text-sm font-medium text-white duration-500 group-hover:text-white'>
                    Login
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-50 xl:hidden'
            onClose={setMobileMenuOpen}
          >
            {/* <div className='fixed inset-0 z-50' /> */}
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div
                className='fixed inset-0 top-16 bg-gray-900/80'
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='fixed top-16 inset-y-0 left-0 z-50 w-4/5 px-4 pb-6 overflow-y-auto bg-[#ffff00] sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10'>
                {/* <div className='-ml-0.5 flex h-16 items-center gap-x-6'>
                  <button
                    type='button'
                    className='-m-2.5 p-1 text-red-500  rounded-md'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <CloseIcon className='w-8 h-8 ' aria-hidden='true' />
                  </button>
                  <div className='-ml-0.5'>
                    <a href='#' className='-m-1.5 block p-1.5'>
                      <span className='sr-only'>Your Company</span>
                      <img className='w-auto h-8' src='/logo.png' alt='' />
                    </a>
                  </div>
                </div> */}
                <div className='mt-2 space-y-2'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </header>

      <div className='overflow-scroll '>
        <main className='mx-auto overflow-scroll'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
