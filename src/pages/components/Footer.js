import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      
      <div style={{ backgroundColor: "#044160" }}>
        <div className="flex justify-center py-10">
          <p className="lg:text-2xl md:text-2xl text-lg text-white font-bold font-serif">معلومات عن الشركة</p>
          <p className="lg:text-2xl md:text-2xl text-lg text-white ml-6 font-bold font-serif">المساعدة</p>
          <p className="lg:text-2xl md:text-2xl text-lg text-white ml-6 font-bold font-serif">حمل البروشور</p>
        </div>
        <div className="divider lg:w-4/5 md:w-4/5 w-full mx-auto text-white"></div>
        <div className="lg:w-4/5 md:w-4/5 w-full mx-auto py-8 grid grid-cols-2">
          <div className="flex">
            <FaTwitter className="text-2xl ml-4 text-white"></FaTwitter>
            <FaFacebook className="text-2xl ml-4 text-white"></FaFacebook>
            <FaInstagram className="text-2xl ml-4 text-white"></FaInstagram>
            <FaGithub className="text-2xl ml-4 text-white"></FaGithub>
          </div>
          <div>
            <p className=" font-serif text-right text-gray-400">© شركة أنظمة المدن 2024، جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
