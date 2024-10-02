import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4" style={{marginLeft:'18px'}}>
      <nav className="flex justify-center">
        <a
          href="#"
          className="text-white mx-4 hover:underline"
        >
          Terms of Services
        </a>
        <a
          href="#"
          className="text-white mx-4 hover:underline"
        >
          Report Abuse
        </a>
        <a
          href="#"
          className="text-white mx-4 hover:underline"
        >
          Privacy and Data Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
