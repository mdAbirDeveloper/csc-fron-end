/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ProductsComponent from "./components/FilterdProject";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";


const Home = ({ data, projects, review }) => {
  const [selectedType, setSelectedType] = useState(""); // State to store the selected product type

  const handleButtonClick = (type) => {
    setSelectedType(type); // Set the selected product type when a button is clicked
  };

  return (
    <div >
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://t4.ftcdn.net/jpg/07/42/20/79/360_F_742207929_7Jd7UxcLijq5PnjQkMvdSi6VU7WSzMVM.jpg)",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse bg-opacity-60">
          <img
            src="/top-left.jpg"
            className="xl:max-w-lg md:max-w-lg rounded-lg shadow-2xl xl:block md:block hidden"
          />
          <div className="xl:text-left md:text-left text-center">
            <h1 className="mb-5 lg:text-5xl text-2xl font-bold text-white w-full">
              Embrace the Mystique <br></br> Discover Our Fog & Mist Services
              Today!
            </h1>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>

      {/* start product section  */}

      <div>
        <div className="grid xl:grid-cols-3 mt-10 md:grid-cols-2 grid-cols-1 gap-8 justify-around">
          {data?.map((product) => (
            <>
              <div className="">
                <div
                  style={{
                    backgroundImage: `url(${product?.images[0]})`,
                  }}
                  className="card min-h-64 rounded-none bg-base-100 shadow-xl mb-6 mx-auto hover:scale-105 transition-transform bg-cover bg-center"
                >
                  <Link href={`/components/${product._id}`}>
                    <div className="card-body my-auto">
                      <h2 className="card-title text-3xl font-serif uppercase mt-10">
                        {product?.name}
                      </h2>
                      <div className="card-actions mt-10">
                        <button className="text-red-500 hover:text-blue-500 font-serif text-xl uppercase my-6 underline">
                          Shop Now +
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* end product section */}

      {/* start feature section */}

      <div>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around xl:-w-4/5 md:w-4/5 w-full mx-auto my-16">
          <div className="mb-5">
            <h1 className="text-4xl font-serif xl:text-left md:text-left text-center">
              Featured Projects
            </h1>
            <p className="text-xl font-serif text-gray-600 xl:text-left md:text-left text-center">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
          </div>
          <div className="grid grid-cols-3">
            <button
              onClick={() => handleButtonClick("bestSeller")}
              className={` ${
                selectedType === "bestSeller" ? "text-blue-500" : ""
              } text-xl font-serif`}
            >
              Best Seller
            </button>
            <button
              onClick={() => handleButtonClick("popular")}
              className={` ${
                selectedType === "popular" ? "text-blue-500" : ""
              } text-xl font-serif`}
            >
              Popular
            </button>
            <button
              onClick={() => handleButtonClick("topRated")}
              className={` ${
                selectedType === "topRated" ? "text-blue-500" : ""
              } text-xl font-serif`}
            >
              Top Rated
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          {/* Show selected products based on the selectedType */}
          {selectedType && (
            <ProductsComponent type={selectedType}></ProductsComponent>
          )}
        </div>
      </div>

      {/* end feature section */}

      {/* start projects section  */}

      <div>
        <h1 className="py-5 text-4xl text-center font-bold my-10">
          Here are our previous projects
        </h1>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-full mx-auto">
          {projects.map((project) => (
            <div key={project?._id} className="bg-blue-100 control-size">
              <Link href={`/deshboard/projects/${project?._id}`}>
                <div
                  className="bg-cover bg-center flex flex-col justify-between rounded-full"
                  style={{
                    height: "650px",
                  }}
                >
                  <div className="text-center relative ">
                    <h2 className="text-2xl mt-6">Amazing One</h2>
                    <h1 className="text-3xl font-serif font-bold my-8">
                      {project?.name}
                    </h1>
                    <img
                      src="/hot.png"
                      className="rounded-full w-1/4 absolute top-44 left-28 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ zIndex: 1 }}
                    ></img>
                    <img
                      src={project?.images[0]}
                      className="rounded-full w-3/4 relative z-0 mx-auto"
                    ></img>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-2xl font-serif mb-1">
                      <span className="text-gray-300 line-through">
                        ${project.oldprice}{" "}
                      </span>
                      ${project?.price}
                    </p>
                    <button className="btn bg-blue-400 text-white hover:bg-red-400 rounded-3xl px-8 uppercase font-bold my-3">
                      Buy now +
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* end project section  */}

      {/* start feature section again  */}

      <div>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:-w-4/5 md:w-4/5 w-full mx-auto my-16">
          <div className="mb-5">
            <h1 className="text-4xl font-serif xl:text-left md:text-left text-center">
              Featured Products
            </h1>
            <p className="text-xl font-serif text-gray-600 xl:text-left md:text-left text-center">
              Sed ut perspiciatis unde omnis iste natus errori
            </p>
          </div>
          <div className=" flex justify-end mt-4">
            <Link href={`/components/Products`}>
              <button className="flex underline text-xl hover:text-blue-500 font-bold">
                VIEW ALL PRODUCTS{" "}
                <FaArrowRight className="mt-1 ml-3"></FaArrowRight>
              </button>
            </Link>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 xl:w-4/5 md:w-4/5 w-full mx-auto gap-6">
          {data?.map((project) => (
            <>
              <Link href={`/components/${project?._id}`}>
                <div className="mb-7 bg-base-200">
                  <div className="py-9">
                    <img className="" src={project?.images[0]}></img>
                    {/* <div className=" opacity-0 hover:opacity-100">
                      hello mojo
                    </div> */}
                  </div>
                  <div className="text-center">
                    <h1 className="text-xl font-semibold my-5">
                      {project?.name}
                    </h1>
                    <p className=" text-red-700 font-bold pb-5">
                      <span className="line-through mr-3">£{project.oldprice} </span>{" "}
                      £{project?.price}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>

      {/* end feature section again  */}

      {/* start review section  */}
      <div className="text-center">
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
      {/* end review section  */}

      <br></br>
      <About></About>
      <br></br>
      <br></br>
      <ContactUs></ContactUs>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  // Fetch data from an API
  const res = await fetch("https://csc-server.vercel.app/products");
  const data = await res.json();

  const respons = await fetch("https://csc-server.vercel.app/projects");
  const projects = await respons.json();

  const reviewRespons = await fetch("https://csc-server.vercel.app/review");
  const review = await reviewRespons.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
      projects,
      review,
    },
  };
};
