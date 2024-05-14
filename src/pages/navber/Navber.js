import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect,useState } from "react";
import { AuthContext } from "../authentication/Authentication";
import { FaArrowLeft } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import Image from "next/image";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [pathSegments, setPathSegments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Update path segments when the route changes
    setPathSegments(
      router.asPath.split("/").filter((segment) => segment !== "")
    );
  }, [router.asPath]);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+8801832822560";
    let url;

    if (isMobile) {
      url = `https://wa.me/${phoneNumber}`;
    } else {
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }

    router.push(url);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const translateSegment = (segment) => {
    switch (segment) {
      case "products":
        return "المنتجات"; // Translate "products" to Arabic

      case "allProduct":
        return "جميع المنتجات"; // Translate "products" to Arabic

      case "components":
        return "عناصر"; // Translate "products" to Arabic

      case "section":
        return "الاقسام"; // Translate "products" to Arabic

      case "mistFan":
        return "مراوح ضباب "; // Translate "products" to Arabic

      case "filter":
        return "فلاتر"; // Translate "products" to Arabic

      case "hydraulicValves":
        return "ليات هيدروليك"; // Translate "products" to Arabic

      case "fogNuzzles":
        return "فوهات الضباب"; // Translate "products" to Arabic

      case "fogAndMistPumps":
        return "مضخات الضباب والرذاذ"; // Translate "products" to Arabic

      case "connectors":
        return "الوصلات وملحقاتها"; // Translate "products" to Arabic

      case "question":
        return "سؤال"; // Translate "products" to Arabic

      case "login":
        return "تسجيل الدخول"; // Translate "products" to Arabic

      case "deshboard":
        return "لوحة القيادة"; // Translate "products" to Arabic

      case "contact":
        return "اتصل بنا"; // Translate "contact" to Arabic
      default:
        return segment; // Return segment as is if no translation is provided
    }
  };

  return (
    <div className=" mx-auto z-50 w-full h-16 bg-white/80 backdrop-blur-xl dark:bg-black/80 md:px-8 sticky top-0">
      <div style={{ maxWidth: "1300px" }} className="mx-auto">
        <div className="navbar font-bold">
          <div className="navbar-start">
            <div className="dropdown w-full">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  // Close icon
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Menu icon
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-full ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link href={"/"}>الرئيسيه</Link>
                </li>
                <li>
                  <Link href={"/components"}>الاقسام</Link>
                </li>
                <li>
                  <Link href={"/products"}>المنتجات</Link>
                </li>
                <li>
                  <Link href={"/question"}>الاسئلة</Link>
                </li>
                <li>
                  {user?.uid && <Link href={"/deshboard"}>DashBoard</Link>}
                </li>
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
                <Link href={"/components"}>الاقسام</Link>
              </li>
              <li>
                <Link href={"/products"}>المنتجات</Link>
              </li>
              <li>
                <Link href={"/question"}>الاسئلة</Link>
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

          <div className="navbar-end">
            <div className="flex justify-end">
              <button
                onClick={handleWhatsAppRedirect}
                className="flex btn text-white rounded-3xl"
                style={{ backgroundColor: "#2594AF" }}
              >
                اتصل بنا <FaArrowLeft className="mt-1 ml-1"></FaArrowLeft>
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* Breadcrumb navigation */}

        <nav className="breadcrumb text-sm p-2 lg:mr-4 md:mr-4 mr-0">
          {pathSegments?.length > 1 && (
            <ul className="flex justify-start">
              {[...pathSegments]
                .slice(0, 2)
                .reverse()
                .map((segment, index) => (
                  <li key={index}>
                    {index !== 0 && (
                      <span className="lg:mx-2 md:mx-2 mx-0">{"<"} </span>
                    )}{" "}
                    {/* Conditionally render "<" */}
                    <Link
                      href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                      className={
                        router.pathname ===
                        `/${pathSegments.slice(0, index + 1).join("/")}`
                      }
                    >
                      {translateSegment(segment)}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/">
                  <span className="lg:mx-2 md:mx-2 mx-0">{"<"}</span> الصفحة
                  الرئيسية {/* Translate "Home" to Arabic */}
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navber;
