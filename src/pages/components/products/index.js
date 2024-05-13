/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'

const index = ({data}) => {
  return (
    <div style={{ maxWidth: "1300px" }} className=" min-h-screen my-8 mt-20 mx-auto">
    <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-4">
      {data?.map((products) => (
        <>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={products?.images[0]} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="text-center text-xl font-bold font-serif">{products?.name}</h2>
                <div className="card-actions justify-center">
                  <Link href={`/components/products/${products._id}`}>
                    <button className="btn btn-primary">انظر التفاصيل</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  </div>
  )
}

export default index;



export async function getServerSideProps() {
    // Fetch data from an API
    const res = await fetch("https://csc-server-again.vercel.app/products");
    const data = await res.json();
  
    // Pass the fetched data as props to the component
    return {
      props: {
        data,
      },
    };
  }

