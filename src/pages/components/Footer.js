import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer p-10 bg-neutral text-neutral-content"
        style={{
          background: "linear-gradient(to top, #197B99, #074A69)",
          // Adjust the color stops and direction as needed
        }}
      >
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:w-4/5 md:w-4/5 w-full mx-auto">
          <div>
            <p className="text-gray-400 text-lg font-bold font-serif mb-8">
              جو داخلي مريح وصحي
            </p>
            <h1 className="text-5xl text-white font-serif font-bold mb-28">
              شركة انظمة المدن
            </h1>
            <p className="text-xl font-serif font-bold mb-5">
              الاثنين إلى الجمعة، من الساعة 9:00 صباحًا حتى 6:00 مساءً
            </p>
            <p className="text-gray-400 font-bold">فريقنا متاح لاستفساراتك.</p>
          </div>
          <div>
            <p className="text-gray-400 font-bold mb-5 font-serif">
              أرسل لنا رسالة
            </p>
            <p className="text-xl mb-16">connect@designstudio.com</p>
            <p className="text-gray-400 font-serif font-bold mb-6">Follow US</p>
            <div className="grid grid-cols-2 justify-between gap-8">
              <p className="font-bold">إنستجرام</p>
              <p className="font-bold ">ميديوم</p>
              <p className="font-bold">فيسبوك</p>
              <p className="font-bold ">بيهانس</p>
              <p className="font-bold ">لينكد إن</p>
              <p className="font-bold ">دريبل</p>
            </div>
          </div>
        </div>
      </footer>
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
