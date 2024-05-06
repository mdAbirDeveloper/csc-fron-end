/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import DeshboardLayout from "../DeshboardLayout";
import { useRouter } from "next/router";

const remove = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  console.log(data);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(`https://csc-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((deleted) => console.log("deleted successfully"))
        .catch((error) => console.log("error"));
      router.reload();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div>
      <div className="min-h-screen">
      <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500"> remove youre review</h1>
        {data.map((review) => (
          <>
            <div className="grid grid-cols-3 justify-between bg-indigo-100 mb-5 w-2/4 mx-auto">
              <img className="bg-green-500 w-20" src={review?.image}></img>
              <p>{review?.name}</p>
              <button
                className="btn btn-warning my-auto"
                onClick={() => handleDelete(review._id)}
              >
                Delete
              </button>
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
  const res = await fetch("https://csc-server.vercel.app/review");
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
