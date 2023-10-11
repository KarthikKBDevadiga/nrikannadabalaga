import React from "react";
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, EmailIcon } from "react-share";

const Footer = () => {
  const shareUrl = "https://your-website-url.com"; // Replace with your website URL
  const title = "Check out this website";
  return (
    <footer className="bg-gray-800 text-white px-4 py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
            <h2 className="text-lg font-semibold">Menu</h2>
            <ul className="mt-2">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Membership</li>
              <li>Donate</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-2">
              <li>07726567270</li>
              <li>Email us</li>
              <li>Charity Commission</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
            <h2 className="text-lg font-semibold">Events</h2>
            <ul className="mt-2">
              <li>Event Registration</li>
              <li>Past Events</li>
              <li>Feature Events</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-lg font-semibold">Legal</h2>
            <ul className="mt-2">
              <li>DISCLAIMER</li>
              <li>Privacy</li>
              <li>Accessibility</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-600 mt-5 mb-5" />
        <div className="flex flex-col md:flex-row md:justify-between mt-6">
          <div className="text-center md:text-left mb-3 md:mb-0">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-2">
              <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="mr-2"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title} className="mr-2">
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <EmailShareButton url={shareUrl} subject={title}>
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Join Our Newsletter</h2>
            <p className="mt-2">
              Subscribe to our newsletter to keep informed about upcoming
              events, anivaasi, and latest news.
            </p>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Email"
                required
                className="px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="mt-2 ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray py-1 my-1">
        <div className="container mx-auto">
          <p className="text-center text-sm text-gray-400">
            Copyright © 2023 NRI Kannada Balaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
