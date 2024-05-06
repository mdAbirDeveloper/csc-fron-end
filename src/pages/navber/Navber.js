import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthContext } from "../authentication/Authentication";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown for language
  };

  const handleOptionClick = (option) => {
    setSelectedLanguage(option); // Set the selected language
    setIsOpen(false); // Close the dropdown
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
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/components/Products"}>Products</Link>
              </li>
              <li>
                <Link href={"/components/About"}>About_Us</Link>
              </li>
              <li>
                <Link href={"/"}>Category</Link>
              </li>
              <li>
                <Link href={"/components/ContactUs"}>Contact-us</Link>
              </li>
              <li>{user?.uid && <Link href={"/deshboard"}>DashBoard</Link>}</li>
              <li>
                {user?.uid ? (
                  <>
                    <button onClick={signOutUser}><Link href={'/'}>SignOut</Link></button>
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
              width={200}
              height={80}
              alt=""
              className="bg-green-500 rounded-xl xl:block md:block hidden"
              priority
            ></Image>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/components/Products"}>Products</Link>
            </li>
            <li>
              <Link href={"/components/About"}>About_Us</Link>
            </li>
            <li>
              <Link href={"/"}>Category</Link>
            </li>
            <li>
              <Link href={"/components/ContactUs"}>Contact-us</Link>
            </li>
            <li>{user?.uid && <Link href={"/deshboard"}>DashBoard</Link>}</li>
            <li>
              {user?.uid ? (
                <>
                  <button onClick={signOutUser}><Link href={'/'}>SignOut</Link></button>
                </>
              ) : (
                <Link href={"/login"}>Login</Link>
              )}
            </li>
          </ul>
        </div>

        <div className="navbar-end relative">
          <div className="">
            <button onClick={toggleDropdown} className="flex text-xl ml-2">
              {/* <FaEarthAfrica /> */}
              {selectedLanguage ? selectedLanguage : "English"}
            </button>
            {isOpen && (
              <div className="absolute bg-white dropdown-content w-28 rounded shadow-xl p-8 justify-start">
                <button
                  onClick={() => handleOptionClick("English")}
                  className=""
                >
                  English
                </button>
                <br />
                <br />
                <button onClick={() => handleOptionClick("Arabic")}>
                  Arabic
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
