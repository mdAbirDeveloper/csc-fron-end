import DeshboardLayout from "../DeshboardLayout";
import { useRouter } from "next/router";

const removeMessage = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(`https://csc-server.vercel.app/contact/${id}`, {
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
        {data.map((message) => (
          <>
            <div className="grid grid-cols-4 justify-between bg-indigo-100 mb-5  mx-auto">
              <p>Name: {message?.name}</p>
              <p>Email:{message?.email}</p>
              <p>Message: {message?.message}</p>
              <button
                className="btn btn-warning my-auto"
                onClick={() => handleDelete(message._id)}
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

export default removeMessage;

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://csc-server.vercel.app/contact");
  const data = await res.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
    },
  };
}

removeMessage.getLayout = function getLayout(page) {
  return <DeshboardLayout>{page}</DeshboardLayout>;
};
