/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react'
import DeshboardLayout from './DeshboardLayout';

const removePumps = ({data}) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    console.log(id)
    try {
      await fetch(`https://csc-server-again.vercel.app/fogAndMistPumps/${id}`, {
        method: "DELETE",
      })
      .then((deleted) => console.log("deleted successfully"))
      .catch((error) => console.log('error'));
      router.reload();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  return (
    <div><div>
    <div className="min-h-screen">
    <h1 className="text-3xl my-8 text-center font-bold uppercase text-green-500"> remove your Pumps</h1>
      {data.map((products) => (
        <>
          <div className="grid grid-cols-3 justify-between bg-indigo-100 mb-5 w-2/4 mx-auto">
            <img className="bg-green-500 w-20" src={products?.images[0]}></img>
            <p>{products?.name}</p>
            <button className="btn btn-info" onClick={()=>handleDelete(products._id)}>Delete</button>
          </div>
        </>
      ))}
    </div>
  </div></div>
  )
}

export default removePumps;

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://csc-server-again.vercel.app/fogAndMistPumps");
  const data = await res.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
    },
  };
}

removePumps.getLayout = function getLayout(page) {
  return (
      <DeshboardLayout>{page}</DeshboardLayout>
  )
}
