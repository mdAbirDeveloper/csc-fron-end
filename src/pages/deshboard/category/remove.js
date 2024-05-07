import { reload } from "firebase/auth";
import DeshboardLayout from "../DeshboardLayout";
import { useRouter } from "next/router";

const remove = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
 console.log(data)
  const handleDelete = async (id) => {
    console.log(id)
    try {
      await fetch(`https://csc-server-again.vercel.app/category/${id}`, {
        method: "DELETE",
      })
      .then((deleted) => console.log("deleted successfully"))
      .catch((error) => console.log('error'));
      router.reload();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <div className="min-h-screen">
      <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500"> remove youre product</h1>
        {data.map((category) => (
          <>
            <div className="grid grid-cols-3 justify-between bg-indigo-100 mb-5 w-2/4 mx-auto">
              <img className="bg-green-500 w-20" src={category?.images[0]}></img>
              <p>{category?.name}</p>
              <button className="btn btn-info" onClick={()=>handleDelete(category._id)}>Delete</button>
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
  const res = await fetch("https://csc-server-again.vercel.app/category");
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
