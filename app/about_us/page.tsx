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

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AboutUs() {
  const [selected, setSelected] = useState(moods[5]);

  return (
    <PageFrame meta={{ title: 'About Us' }}>
      <div className='max-w-2xl md:max-w-none'>
        <div className='p-4 py-24 md:py-36'>
          <h2 className='text-2xl text-center md:text-6xl'>
            NRI Kannada Balaga
          </h2>
          <div className='mt-8 text-sm text-center md:text-lg'>
            Kannada Balaga UK is turning 40 years old! We are delighted to
            invite you to attend Kannada Balaga’s 40th Anniversary celebrations
            to be held on 30th September and 1st October 2023 at Byron Hall,
            Christchurch Ave, Harrow, London HA3 5BD!
          </div>
          <div className='mt-8 text-sm text-center md:text-lg'>
            The program has a Royal presence – His Highness Yaduveer
            Krishnadutta Chamaraja Wadiyar, Maharaja of Mysore, will be the
            Chief Guest for the event! Iconic personalities like Dr Gururaja
            Karajagi, Shri Vishweshwara Bhat and His Holiness Swamy Japanandaji
            Maharaj are the Guests of Honour. To top it all, we have melody king
            Rajesh Krishnan and team entertaining the crowd to their fantastic
            music!
          </div>
          <div className='group flex border-2 border-gray-400 focus-within:border-[#ff0000] duration-500 max-w-xl mx-auto mt-16 rounded-md'>
            <input
              className='flex-1 px-3 py-1.5 outline-none bg-transparent text-sm focus:placeholder-red-300 placeholder-gray-400 duration-500'
              type='email'
              placeholder='ashokkumar@gmail.com'
            />
            <div className='py-1.5 px-4 bg-gray-400  group-focus-within:bg-[#ff0000] group-focus-within:text-[#ffff00] cursor-pointer duration-500'>
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <div className='grid items-start max-w-2xl grid-cols-1 grid-rows-1 mx-auto mt-4 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {/* Invoice summary */}
        <div className='lg:col-start-3 lg:row-end-1'>
          <h2 className='sr-only'>Summary</h2>
          <div className='rounded-lg shadow-sm bg-gray-50 ring-1 ring-gray-900/5'>
            <dl className='flex flex-wrap'>
              <div className='flex-auto pt-6 pl-6'>
                <dt className='text-sm font-semibold leading-6 text-gray-900'>
                  Amount
                </dt>
                <dd className='mt-1 text-base font-semibold leading-6 text-gray-900'>
                  $10,560.00
                </dd>
              </div>
              <div className='self-end flex-none px-6 pt-4'>
                <dt className='sr-only'>Status</dt>
                <dd className='px-2 py-1 text-xs font-medium text-green-600 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20'>
                  Paid
                </dd>
              </div>
              <div className='flex flex-none w-full px-6 pt-6 mt-6 border-t gap-x-4 border-gray-900/5'>
                <dt className='flex-none'>
                  <span className='sr-only'>Client</span>
                  <UserCircleIcon
                    className='w-5 h-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd className='text-sm font-medium leading-6 text-gray-900'>
                  Alex Curren
                </dd>
              </div>
              <div className='flex flex-none w-full px-6 mt-4 gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Due date</span>
                  <CalendarDaysIcon
                    className='w-5 h-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd className='text-sm leading-6 text-gray-500'>
                  <time dateTime='2023-01-31'>January 31, 2023</time>
                </dd>
              </div>
              <div className='flex flex-none w-full px-6 mt-4 gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Status</span>
                  <CreditCardIcon
                    className='w-5 h-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd className='text-sm leading-6 text-gray-500'>
                  Paid with MasterCard
                </dd>
              </div>
            </dl>
            <div className='px-6 py-6 mt-6 border-t border-gray-900/5'>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Download receipt <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Invoice */}
        <div className='px-4 py-8 -mx-4 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16'>
          <h2 className='text-base font-semibold leading-6 text-gray-900'>
            Invoice
          </h2>
          <dl className='grid grid-cols-1 mt-6 text-sm leading-6 sm:grid-cols-2'>
            <div className='sm:pr-4'>
              <dt className='inline text-gray-500'>Issued on</dt>{' '}
              <dd className='inline text-gray-700'>
                <time dateTime='2023-23-01'>January 23, 2023</time>
              </dd>
            </div>
            <div className='mt-2 sm:mt-0 sm:pl-4'>
              <dt className='inline text-gray-500'>Due on</dt>{' '}
              <dd className='inline text-gray-700'>
                <time dateTime='2023-31-01'>January 31, 2023</time>
              </dd>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-900/5 sm:pr-4'>
              <dt className='font-semibold text-gray-900'>From</dt>
              <dd className='mt-2 text-gray-500'>
                <span className='font-medium text-gray-900'>Acme, Inc.</span>
                <br />
                7363 Cynthia Pass
                <br />
                Toronto, ON N3Y 4H8
              </dd>
            </div>
            <div className='mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6'>
              <dt className='font-semibold text-gray-900'>To</dt>
              <dd className='mt-2 text-gray-500'>
                <span className='font-medium text-gray-900'>Tuple, Inc</span>
                <br />
                886 Walter Street
                <br />
                New York, NY 12345
              </dd>
            </div>
          </dl>
          <table className='w-full mt-16 text-sm leading-6 text-left whitespace-nowrap'>
            <colgroup>
              <col className='w-full' />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className='text-gray-900 border-b border-gray-200'>
              <tr>
                <th scope='col' className='px-0 py-3 font-semibold'>
                  Projects
                </th>
                <th
                  scope='col'
                  className='hidden py-3 pl-8 pr-0 font-semibold text-right sm:table-cell'
                >
                  Hours
                </th>
                <th
                  scope='col'
                  className='hidden py-3 pl-8 pr-0 font-semibold text-right sm:table-cell'
                >
                  Rate
                </th>
                <th
                  scope='col'
                  className='py-3 pl-8 pr-0 font-semibold text-right'
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item) => (
                <tr key={item.id} className='border-b border-gray-100'>
                  <td className='px-0 py-5 align-top max-w-0'>
                    <div className='font-medium text-gray-900 truncate'>
                      {item.title}
                    </div>
                    <div className='text-gray-500 truncate'>
                      {item.description}
                    </div>
                  </td>
                  <td className='hidden py-5 pl-8 pr-0 text-right text-gray-700 align-top tabular-nums sm:table-cell'>
                    {item.hours}
                  </td>
                  <td className='hidden py-5 pl-8 pr-0 text-right text-gray-700 align-top tabular-nums sm:table-cell'>
                    {item.rate}
                  </td>
                  <td className='py-5 pl-8 pr-0 text-right text-gray-700 align-top tabular-nums'>
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope='row'
                  className='px-0 pt-6 pb-0 font-normal text-gray-700 sm:hidden'
                >
                  Subtotal
                </th>
                <th
                  scope='row'
                  colSpan={3}
                  className='hidden px-0 pt-6 pb-0 font-normal text-right text-gray-700 sm:table-cell'
                >
                  Subtotal
                </th>
                <td className='pt-6 pb-0 pl-8 pr-0 text-right text-gray-900 tabular-nums'>
                  {invoice.subTotal}
                </td>
              </tr>
              <tr>
                <th
                  scope='row'
                  className='pt-4 font-normal text-gray-700 sm:hidden'
                >
                  Tax
                </th>
                <th
                  scope='row'
                  colSpan={3}
                  className='hidden pt-4 font-normal text-right text-gray-700 sm:table-cell'
                >
                  Tax
                </th>
                <td className='pt-4 pb-0 pl-8 pr-0 text-right text-gray-900 tabular-nums'>
                  {invoice.tax}
                </td>
              </tr>
              <tr>
                <th
                  scope='row'
                  className='pt-4 font-semibold text-gray-900 sm:hidden'
                >
                  Total
                </th>
                <th
                  scope='row'
                  colSpan={3}
                  className='hidden pt-4 font-semibold text-right text-gray-900 sm:table-cell'
                >
                  Total
                </th>
                <td className='pt-4 pb-0 pl-8 pr-0 font-semibold text-right text-gray-900 tabular-nums'>
                  {invoice.total}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className='lg:col-start-3'>
          {/* Activity feed */}
          <h2 className='text-sm font-semibold leading-6 text-gray-900'>
            Activity
          </h2>
          <ul role='list' className='mt-6 space-y-6'>
            {activity.map((activityItem, activityItemIdx) => (
              <li key={activityItem.id} className='relative flex gap-x-4'>
                <div
                  className={classNames(
                    activityItemIdx === activity.length - 1
                      ? 'h-6'
                      : '-bottom-6',
                    'absolute left-0 top-0 flex w-6 justify-center'
                  )}
                >
                  <div className='w-px bg-gray-200' />
                </div>
                {activityItem.type === 'commented' ? (
                  <>
                    <img
                      src={activityItem.person.imageUrl}
                      alt=''
                      className='relative flex-none w-6 h-6 mt-3 rounded-full bg-gray-50'
                    />
                    <div className='flex-auto p-3 rounded-md ring-1 ring-inset ring-gray-200'>
                      <div className='flex justify-between gap-x-4'>
                        <div className='py-0.5 text-xs leading-5 text-gray-500'>
                          <span className='font-medium text-gray-900'>
                            {activityItem.person.name}
                          </span>{' '}
                          commented
                        </div>
                        <time
                          dateTime={activityItem.dateTime}
                          className='flex-none py-0.5 text-xs leading-5 text-gray-500'
                        >
                          {activityItem.date}
                        </time>
                      </div>
                      <p className='text-sm leading-6 text-gray-500'>
                        {activityItem.comment}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='relative flex items-center justify-center flex-none w-6 h-6 bg-white'>
                      {activityItem.type === 'paid' ? (
                        <CheckCircleIcon
                          className='w-6 h-6 text-indigo-600'
                          aria-hidden='true'
                        />
                      ) : (
                        <div className='h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300' />
                      )}
                    </div>
                    <p className='flex-auto py-0.5 text-xs leading-5 text-gray-500'>
                      <span className='font-medium text-gray-900'>
                        {activityItem.person.name}
                      </span>{' '}
                      {activityItem.type} the invoice.
                    </p>
                    <time
                      dateTime={activityItem.dateTime}
                      className='flex-none py-0.5 text-xs leading-5 text-gray-500'
                    >
                      {activityItem.date}
                    </time>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* New comment form */}
          <div className='flex mt-6 gap-x-3'>
            <img
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
              className='flex-none w-6 h-6 rounded-full bg-gray-50'
            />
            <form action='#' className='relative flex-auto'>
              <div className='pb-12 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600'>
                <label htmlFor='comment' className='sr-only'>
                  Add your comment
                </label>
                <textarea
                  rows={2}
                  name='comment'
                  id='comment'
                  className='block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='Add your comment...'
                  defaultValue={''}
                />
              </div>

              <div className='absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2'>
                <div className='flex items-center space-x-5'>
                  <div className='flex items-center'>
                    <button
                      type='button'
                      className='-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500'
                    >
                      <PaperClipIcon className='w-5 h-5' aria-hidden='true' />
                      <span className='sr-only'>Attach a file</span>
                    </button>
                  </div>
                  <div className='flex items-center'>
                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className='sr-only'>
                            Your mood
                          </Listbox.Label>
                          <div className='relative'>
                            <Listbox.Button className='relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500'>
                              <span className='flex items-center justify-center'>
                                {selected.value === null ? (
                                  <span>
                                    <FaceSmileIcon
                                      className='flex-shrink-0 w-5 h-5'
                                      aria-hidden='true'
                                    />
                                    <span className='sr-only'>
                                      Add your mood
                                    </span>
                                  </span>
                                ) : (
                                  <span>
                                    <span
                                      className={classNames(
                                        selected.bgColor,
                                        'flex h-8 w-8 items-center justify-center rounded-full'
                                      )}
                                    >
                                      <selected.icon
                                        className='flex-shrink-0 w-5 h-5 text-white'
                                        aria-hidden='true'
                                      />
                                    </span>
                                    <span className='sr-only'>
                                      {selected.name}
                                    </span>
                                  </span>
                                )}
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave='transition ease-in duration-100'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Listbox.Options className='absolute z-10 py-3 mt-1 -ml-6 text-base bg-white rounded-lg shadow w-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm'>
                                {moods.map((mood) => (
                                  <Listbox.Option
                                    key={mood.value}
                                    className={({ active }) =>
                                      classNames(
                                        active ? 'bg-gray-100' : 'bg-white',
                                        'relative cursor-default select-none px-3 py-2'
                                      )
                                    }
                                    value={mood}
                                  >
                                    <div className='flex items-center'>
                                      <div
                                        className={classNames(
                                          mood.bgColor,
                                          'flex h-8 w-8 items-center justify-center rounded-full'
                                        )}
                                      >
                                        <mood.icon
                                          className={classNames(
                                            mood.iconColor,
                                            'h-5 w-5 flex-shrink-0'
                                          )}
                                          aria-hidden='true'
                                        />
                                      </div>
                                      <span className='block ml-3 font-medium truncate'>
                                        {mood.name}
                                      </span>
                                    </div>
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                </div>
                <button
                  type='submit'
                  className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
