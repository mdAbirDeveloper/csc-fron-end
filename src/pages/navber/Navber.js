import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthContext } from "../authentication/Authentication";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { isMobile } from 'react-device-detect';

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const router = useRouter();

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+8801832822560';
    let url;

    // Check if the user is on a mobile device
    if (isMobile) {
      url = `https://wa.me/${phoneNumber}`;
    } else {
      // If on desktop, redirect to WhatsApp Web
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }
    
    router.push(url);
  };

  return (
    <div>
      <div className="navbar bg-base-100 font-bold shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link href={"/"}>الرئيسيه</Link>
            </li>
            <li>
              <Link href={"/components/section"}>الاقسام</Link>
            </li>
            <li>
              <Link href={"/components/products"}>المنتجات</Link>
            </li>
            <li>
              <Link href={"/components/question"}>الاسئلة</Link>
            </li>
            <li>{user?.uid && <Link href={"/deshboard"}>DashBoard</Link>}</li>
            <li>
              {user?.uid ? (
                <>
                  <button onClick={signOutUser}>
                    <Link href={"/"}>SignOut</Link>
                  </button>
                </>
              ) : (
                <Link href={"/login"}>Login</Link>
              )}
            </li>
            </ul>
          </div>
          <div>
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt=""
              className="rounded-xl xl:block md:block hidden"
              priority
            ></Image>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>الرئيسيه</Link>
            </li>
            <li>
              <Link href={"/components/section"}>الاقسام</Link>
            </li>
            <li>
              <Link href={"/components/products"}>المنتجات</Link>
            </li>
            <li>
              <Link href={"/components/question"}>الاسئلة</Link>
            </li>
            <li>{user?.uid && <Link href={"/deshboard"}>DashBoard</Link>}</li>
            <li>
              {user?.uid ? (
                <>
                  <button onClick={signOutUser}>
                    <Link href={"/"}>SignOut</Link>
                  </button>
                </>
              ) : (
                <Link href={"/login"}>Login</Link>
              )}
            </li>
          </ul>
        </div>

        <div className="navbar-end relative">
          <div className="">
            <button
             onClick={handleWhatsAppRedirect}
              className="flex btn text-white rounded-3xl"
              style={{ backgroundColor: "#2594AF" }}
            >
              Contact Us <FaArrowRight className="mt-1 ml-1"></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
