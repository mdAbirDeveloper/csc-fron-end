/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Products from "./Products";

const About = ({ review }) => {
  return (
    <div className="min-h-screen">
      <div
      className="hero"
       style={{
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/06/25/09/82/360_F_625098229_YCpi0WSln9zwNVopFqfEAlCEDrl94PdU.jpg)',

      }}><h1 className="text-center lg:my-40 my-20 text-5xl font-serif font-bold text-white">About Page</h1></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:w-4/5 mg-w-4/5 w-full mx-auto mt-6">
        <div className="mt-10">
          <img src="/top-left.jpg"></img>
        </div>
        <div className="w-28 mx-auto mt-4">
          <button className="lg:mt-20 bg-blue-600 font-bold p-10 rounded-3xl text-white">
            <span className="text-5xl">25</span> years of experience
          </button>
        </div>
        <div className="lg:text-left text-center">
          <div className="mb-4">
            <h1 className="text-2xl font-serif font-bold">
              What Our Client’s Say
            </h1>
            <p className=" font-serif">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl font-serif font-bold">
              Our Mission & Vision
            </h1>
            <p className=" font-serif">
            We are your edge computing experts. We provide cutting-edge fog and mist solutions to unlock real-time data power. Our vision: a fog-free future with seamless integration, boosting security and efficiency for a smarter tomorrow
            </p>
          </div>
          <button className="btn bg-blue-400 hover:bg-red-400 w-3/5 rounded-3xl text-white font-bold">Contact_Us</button>
        </div>
      </div>

      <div className="text-center my-20">
        <div className="stats shadow grid grid-cols-3">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <h1 className="py-5 text-4xl text-center font-bold my-10">
          What Our Clients Say
        </h1>
        <div className="carousel carousel-center xl:w-4/5 md:w-4/5 w-full mx-auto p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <div className="flex">
              {review?.map((reviews) => (
                <>
                  <div className="card xl:w-96 md:w-96 w-72 bg-base-100 shadow-xl mx-auto mb-5 ml-5">
                    <div className="flex justify-around">
                      <div className="avatar">
                        <div className="w-24 rounded-full">
                          <img key={reviews?._id} src={reviews?.image} />
                        </div>
                        <h1 className="my-auto ml-3 font-bold">
                          {reviews?.name}
                        </h1>
                      </div>
                      <span className="my-auto text-yellow-400 text-2xl ">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                    </div>
                    <div className="card-body text-left">
                      <p>{reviews?.review}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const getServerSideProps = async () => {
  const reviewRespons = await fetch("https://csc-server.vercel.app/review");
  const review = await reviewRespons.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      review,
    },
  };
};
