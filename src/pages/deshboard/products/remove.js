/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { MdDelete } from "react-icons/md";
import DeshboardLayout from "../DeshboardLayout";
import { useRouter } from "next/router";
import { FaPen } from "react-icons/fa";
import Link from "next/link";

const remove = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(`https://csc-server-again.vercel.app/products/${id}`, {
        method: "DELETE",
      })
        .then((deleted) => console.log("deleted successfully"))
        .catch((error) => console.log("error"));
      router.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdate = async (id) => {
    console.log(id);
    try {
      await fetch(`https://csc-server-again.vercel.app/products/${id}`, {
        method: "DELETE",
      })
        .then((deleted) => console.log("deleted successfully"))
        .catch((error) => console.log("error"));
      router.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-3xl my-8 text-center font-bold uppercase text-green-500">
          {" "}
          remove your product
        </h1>
        {data.map((products) => (
          <>
            <div className="flex justify-between bg-indigo-100 mb-5 w-2/4 mx-auto">
              <img
                className="bg-green-500 w-20"
                src={products?.images[0]}
              ></img>
              <p className="my-auto">{products?.name}</p>
              <button
                className="w-10 my-auto"
                onClick={() => handleDelete(products._id)}
              >
                <MdDelete className="text-3xl text-red-500"></MdDelete>
              </button>
              {/* <button className="w-10 my-auto">
                <Link href={`${products._id}`}><FaPen className="text-2xl text-red-500"></FaPen></Link>
              </button> */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default remove;

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

remove.getLayout = function getLayout(page) {
  return <DeshboardLayout>{page}</DeshboardLayout>;
};
