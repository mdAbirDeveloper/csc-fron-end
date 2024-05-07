/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const Products = ({ data }) => {
  //console.log(data);
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-center my-6 font-bold xl:text-4xl md:text-3xl text-2xl xl:w-3/4 md:w-3/4 w-full mx-auto py-2">
          Step into a world of clarity with our Fog and Mist Services – where
          every droplet brings a touch of enchantment !
        </h1>
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
                        <button className="text-red-500 hover:text-blue-600 font-serif text-xl uppercase my-6 underline">
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
