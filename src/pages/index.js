/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
const Home = ({ data, projects, review }) => {
  return (
    <div>
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
        <h1 className="text-center my-6 font-bold xl:text-4xl md:text-3xl text-2xl xl:w-3/4 md:w-3/4 w-full mx-auto py-2">
          Step into a world of clarity with our Fog and Mist Services – where
          every droplet brings a touch of enchantment !
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-around">
          {data?.map((product) => (
            <>
              <div>
                <div className="card grid grid-cols-2 h-80 bg-base-100 shadow-xl mb-6 mx-auto">
                  <div className="card-body relative items-center text-center my-auto">
                    <h2 className="card-title text-2xl">{product?.name}</h2>
                    <div className="card-actions">
                      <button className="btn btn-primary text-white my-6">
                        <Link href={`/components/${product._id}`}>Buy_Now</Link>
                      </button>
                    </div>
                  </div>
                  <figure className="">
                    <img
                      key={product?._id}
                      src={product?.images[0]}
                      alt="Shoes"
                      className=" absolute card-image xl:w-52 md:w-52 w-44 object-cover hover:scale-110 transition duration-1000 cursor-pointer"
                    />
                  </figure>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      
      {/* end product section */}

      {/* start projects section  */}

      <div>
        <h1 className="py-5 text-4xl text-center font-bold my-10">
          Here are our previous projects
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between">
          {projects?.map((project) => (
            <>
              <div className="card xl:w-96 md:w-96 w-80-base-100 shadow-xl mx-auto mb-5 hover:bg-yellow-500 hover:text-white">
                <figure>
                  <img key={project?._id} src={project.images[0]} alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                  <h2 className="card-title mx-auto">{project.name}</h2>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">
                      <Link href={`/deshboard/projects/${project?._id}`}>
                        About this 
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* end project section  */}

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
