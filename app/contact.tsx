"use clinent";

import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, EmailIcon } from "react-share";

const contact = () => {
  const shareUrl = "https://your-website-url.com"; // Replace with your website URL
  const title = "Check out this website";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>Kannada Balaga UK</p>

      <h2 className="text-1xl font-semibold mt-8 mb-4">Get In Touch</h2>
      <p>We would love to hear from you!</p>

      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Rest of the form fields... */}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200"
        >
          SEND A MESSAGE
        </button>
      </form>

      <h2 className="text-1xl font-semibold mt-8 mb-4">Visit Us</h2>
      <p>
        <a
          href="https://kannadabalaga.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          kannadabalaga.org.uk
        </a>
      </p>

      <h2 className="text-1xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="text-blue-500">07726567270</p>
      <p>
        <a
          href="mailto:admin@kannadabalaga.org.uk"
          className="text-blue-500 hover:underline"
        >
          admin@kannadabalaga.org.uk
        </a>
      </p>

      <h2 className="text-1xl font-semibold mt-8 mb-4">Find Us Online</h2>
      <p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Facebook
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-2"
        >
          Twitter
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-2"
        >
          Instagram
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-2"
        >
          Youtube
        </a>
      </p>

      <h2 className="text-1xl font-semibold mt-8 mb-4">Follow Us</h2>
      <div className="flex mt-1">
        {/* Social Media Sharing Buttons */}
        <FacebookShareButton url={shareUrl} quote={title} className="mr-1">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title} className="mr-1">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <EmailShareButton url={shareUrl} subject={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default contact;
