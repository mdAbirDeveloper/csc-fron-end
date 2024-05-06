/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Products from "./Products";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 w-4/5 mx-auto rounded-2xl shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-center">
            <h1 className="xl:text-5xl md:text-5xl text-2xl font-bold">Welcome to our About Us page</h1>
            <p className="py-6">
              where we illuminate the essence of
              our premier fog and mist services in Saudi Arabia. At CSC (cities systems comporation), we pride ourselves on delivering unparalleled
              expertise and innovation in transforming ordinary spaces into
              captivating environments. With a dedicated focus on fog and mist
              technologies, we offer cutting-edge solutions tailored to enhance
              ambiance, cool outdoor areas, and create immersive experiences.
              Our team of experts combines technical mastery with creative
              vision to craft bespoke solutions that elevate any setting,
              whether its a luxury resort, outdoor event, or urban landscape.
              Discover the transformative power of fog and mist with [Your
              Company Name] and let us turn your vision into a breathtaking
              reality
            </p>
            <button className="btn btn-primary text-white"><Link href={'/components/ContactUs'}>Contact_Us</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
