import React from "react";

function ContactUs() {
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

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            defaultValue=""
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

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
    </div>
  );
}

export default ContactUs;
