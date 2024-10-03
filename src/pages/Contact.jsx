import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black  p-6">
      <div
        className="text-white bg-gradient-to-tr to-slate-950 
               from-lightblack rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border bg-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="message"
              rows="4"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-950 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
