/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "./Footer";

const Products = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <h1 className="text-center my-6 font-bold xl:text-4xl md:text-3xl text-2xl xl:w-3/4 md:w-3/4 w-full mx-auto py-2">
          Step into a world of clarity with our Fog and Mist Services – where
          every droplet brings a touch of enchantment !
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {data?.map((product) => (
            <>
              <div>
                <div className="card xl:w-96 bg-base-100 shadow-xl mb-6 mx-auto hover:bg-slate-500 hover:text-white">
                  <figure className="px-10 pt-10">
                    <img
                      src={product?.image}
                      alt="Shoes"
                      className="rounded-xl min-h-80"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{product?.title}</h2>
                    <p>{product.descriptions}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary text-white"><Link href={"/components/ContactUs"}>Contact_Us to Get</Link></button>
                    </div>
                  </div>
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
