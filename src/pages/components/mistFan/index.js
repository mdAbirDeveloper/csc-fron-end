/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React from "react";

const index = ({ data }) => {
  return (
    <div>
      <Head>
        <title>ابقِ هادئًا مع مراوح الرذاذ الخاصة بنا للبيئات الحضرية</title>
      </Head>
      <div
        className=" min-h-screen mt-20 mx-auto"
        style={{ maxWidth: "1200px" }}
      >
        <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-4 mx-auto">
          {data.map((mistFan) => (
            <>
              <div>
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <img src={mistFan?.images[0]} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-center text-xl font-bold font-serif">
                      {mistFan?.name}
                    </h2>
                    <p></p>
                    <div className="card-actions justify-center">
                      <Link href={`/components/mistFan/${mistFan._id}`}>
                        <button className="btn btn-primary">
                          انظر التفاصيل
                        </button>
                      </Link>
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

export default index;

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://csc-server-again.vercel.app/mistFan");
  const data = await res.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
    },
  };
}
