import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white">
      <div className="w-10/12 mx-auto space-y-5 py-10">
        <div>
          <h1 className="text-5xl font-bold  text-center items-center justify-center mb-3">
            KeenKeeper
          </h1>
          <p className="text-gray-400 text-center items-center justify-center">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        {/* social container */}
        <div className="text-center items-center justify-center space-y-3">
          <h5 className="text-2xl font-bold">Social Links</h5>
          <div className="flex  text-center items-center justify-center gap-3">
            <FaInstagramSquare />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </div>
        {/* footer bottom */}
        <div className="flex justify-between items-center text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex justify-between items-center gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
