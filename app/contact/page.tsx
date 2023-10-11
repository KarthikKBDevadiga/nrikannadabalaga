'use client' ;
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MailIcon from '@/icons/MailIcon';
import HomeIcon from '@/icons/HomeIcon';
import WebIcon from '@/icons/WebIcon';

function ContactUs() {
  const shareUrl = 'https://your-website-url.com'; // Replace with your website URL
  const title = 'Check out this website';

  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 mb-8">
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Get In Touch</h2>
          <p className="text-gray-700 text-center">We would love to hear from you!</p>

          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:ring focus:ring-gray-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:ring focus:ring-gray-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-800">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:ring focus:ring-gray-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                defaultValue=""
                className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md shadow-md focus:ring focus:ring-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-900 focus:ring focus:ring-gray-400"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>

        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="text-center mb-4 md:mb-0">
              <MailIcon className="h-8 w-8 mx-auto text-gray-800" />
              <p className="text-center">
                <a href="mailto:admin@kannadabalaga.org.uk" className="text-gray-800 hover:underline">
                  admin@kannadabalaga.org.uk
                </a>
              </p>
            </div>

            <div className="text-center">
              <HomeIcon className="h-8 w-8 mx-auto text-gray-800" />
              <p className="text-center text-gray-800">
                <a
                  href="https://kannadabalaga.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  kannadabalaga.org.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
