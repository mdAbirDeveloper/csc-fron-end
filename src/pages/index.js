import Link from "next/link";
// import About from "../components/About";
// import ContactUs from "../components/ContactUs";

/* eslint-disable @next/next/no-img-element */
const Home = ({ data, projects, review }) => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/background/20230425/original/pngtree-lake-with-mist-in-it-sits-in-the-mountains-picture-image_2479566.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 lg:text-5xl text-2xl font-bold text-white w-full">
              Embrace the Mystique <br></br> Discover Our Fog & Mist Services
              Today!
            </h1>
            <p className="mb-5 text-white">
              Experience the enchantment of fog and mist like never before with
              our specialized services. Whether you are seeking to enhance the
              ambiance of your landscape, create stunning visual effects, or add
              a touch of magic to your event, our dedicated team is here to
              bring your vision to life. With a focus on quality, innovation,
              and customer satisfaction, we pride ourselves on delivering
              exceptional results that exceed expectations. Join us on a journey
              into the ethereal world of fog and mist, where every moment is an
              opportunity to create unforgettable memories. Explore our services
              today and let us turn your dreams into reality.
            </p>
            <button className="btn btn-primary text-white hover:bg-green-600">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* start product section  */}

      <div>
        <h1 className="text-center my-6 font-bold text-4xl  w-3/4 mx-auto py-2">
          Step into a world of clarity with our Fog and Mist Services – where
          every droplet brings a touch of enchantment !
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {data?.map((product) => (
            <>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl mb-6 mx-auto hover:bg-slate-500 hover:text-white">
                  <figure className="px-10 pt-10">
                    <img
                      key={product?._id}
                      src={product?.image}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{product?.title}</h2>
                    <p>{product.descriptions}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary text-white">
                        <Link href={"/components/ContactUs"}>Contact_Us</Link>
                      </button>
                    </div>
                  </div>
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
              <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-5 hover:bg-yellow-500 hover:text-white">
                <figure>
                  <img key={project?._id} src={project.image} alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                  <h2 className="card-title mx-auto">{project.title}</h2>
                  <p>{project.descriptions}</p>
                  <div className="card-actions justify-center">
                  <button className="btn btn-primary text-white"><Link href={"/components/ContactUs"}>Contact_Us to Get</Link></button>
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
        <div className="carousel carousel-center w-4/5 mx-auto p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <div className="flex">
              {review?.map((reviews) => (
                <>
                  <div className="card xl:w-96 md:w-96 w-80 bg-base-100 shadow-xl mx-auto mb-5 ml-5">
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
      {/* <About></About>
      <br></br>
      <br></br>
      <ContactUs></ContactUs>
      <br></br>
      <br></br> */}
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
