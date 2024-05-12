/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const index = ({ data }) => {
  return (
    <div className=" min-h-screen my-8">
      <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-6 lg:w-11/12 md:w-11/12 w-full mx-auto">
        {data.map((connectors) => (
          <>
            <div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={connectors?.images[0]} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="text-center text-xl font-bold font-serif">{connectors?.name}</h2>
                  <p></p>
                  <div className="card-actions justify-center">
                    <Link href={`/components/products/connectors/${connectors._id}`}>
                      <button className="btn btn-primary text-white">انظر التفاصيل</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://csc-server-again.vercel.app/connectors");
  const data = await res.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
    },
  };
}
