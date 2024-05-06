/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const Products = ({ data }) => {
  //console.log(data);
  return (
    <div>
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
                    {/* <p>{product.descriptions}</p> */}
                    <div className="card-actions">
                      <button className="btn btn-primary text-white">
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
    </div>
  );
};

export default Products;

export const getServerSideProps = async () => {
  // Fetch data from an API
  const res = await fetch("https://csc-server.vercel.app/products");
  const data = await res.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
    },
  };
}
