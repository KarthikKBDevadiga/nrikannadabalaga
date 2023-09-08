import React from "react";
import FacebookIcon from "@/icons/social/FacebookIcon";
import TwitterIcon from "@/icons/social/TwitterIcon";
import YoutubeIcon from "@/icons/social/YoutubeIcon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold">Menu</h3>
            <ul className="mt-2">
              <li>Home</li>
              <li>About</li>
              <li>Archives</li>
              <li>Membership</li>
              <li>Donate</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2">
              <li>07726567270</li>
              <li>Email us</li>
              <li>Charity Commission</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold">Events</h3>
            <ul className="mt-2">
              <li>Event Registration</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2">
              <li>DISCLAIMER</li>
              <li>Privacy</li>
              <li>Accessibility</li>
              <li>Terms and Conditions</li>
              <li>Constitution</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="mr-2">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="mr-2">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <YoutubeIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
          <p className="mt-2">Subscribe to our newsletter to keep informed about upcoming events, anivaasi, and latest news.</p>
          <form className="mt-4">
            <input type="email" placeholder="Email" required className="px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="bg-gray-900 py-4">
        <div className="container mx-auto">
          <p className="text-center text-sm text-gray-400">Copyright  © 2023 NRI Kannada Balaga. All rights reserved. </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;













  