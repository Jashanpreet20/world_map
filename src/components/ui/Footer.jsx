import React from "react";

import { FaGlobe, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const footerData = {
  footer: {
    description: "Explore the world with us",
    links: [
      { name: "Contact Us", url: "/contact" },
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms of Service", url: "/terms" },
    ],
  },
};


export default function Footer() {
 

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center space-y-6">
        <p className="text-lg">{footerData.footer.description}</p>

        <div className="flex justify-center space-x-4">
          {footerData.footer.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex justify-center space-x-6 pt-4">
          <FaFacebook className="text-2xl hover:text-yellow-500 transition-colors" />
          <FaTwitter className="text-2xl hover:text-yellow-500 transition-colors" />
          <FaInstagram className="text-2xl hover:text-yellow-500 transition-colors" />
          <FaGlobe className="text-2xl hover:text-yellow-500 transition-colors" />
        </div>

        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
