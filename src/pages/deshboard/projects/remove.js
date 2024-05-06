import React from 'react'
import DeshboardLayout from '../DeshboardLayout';
import { useRouter } from 'next/router';

const remove = ({data}) => {
  console.log(data)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    console.log(data)
     const handleDelete = async (id) => {
       console.log(id)
       try {
         await fetch(`https://csc-server.vercel.app/projects/${id}`, {
           method: "DELETE",
         })
         .then((deleted) => {
          router.reload();
         })
         .catch((error) => console.log('error'));
       } catch (error) {
         console.error('Error deleting product:', error);
       }
     };
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500"> remove youre projects</h1>
        {data.map((projects) => (
          <>
            <div className="grid grid-cols-3 justify-between bg-indigo-100 mb-5 w-2/4 mx-auto">
              <img className="bg-green-500 w-20" src={projects?.images[0]}></img>
              <p>{projects?.name}</p>
              <button className="btn btn-info" onClick={()=>handleDelete(projects._id)}>Delete</button>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default remove;


remove.getLayout = function getLayout(page) {
  return (
      <DeshboardLayout>{page}</DeshboardLayout>
  )
}

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://csc-server.vercel.app/projects");
  const data = await res.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
    },
  };
}
