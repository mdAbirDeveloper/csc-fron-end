import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Category = ({ data }) => {
  const [truncatedDescriptions, setTruncatedDescriptions] = useState([]);

  useEffect(() => {
    if (data) {
      const updatedDescriptions = data.map((category) => {
        const description = category.descriptions;
        const truncateLength = 15; // Adjust this value as needed

        // Truncate description with word boundaries
        const words = description.split(' ');
        let truncatedWords = words.slice(0, truncateLength);

        // Check if truncation occurred
        if (truncatedWords.length < words.length) {
          truncatedWords.push('...'); // Add ellipsis if truncation happened
        }

        const truncatedDescription = truncatedWords.join(' ');
        return { ...category, descriptions: truncatedDescription }; // Update category object
      });
      setTruncatedDescriptions(updatedDescriptions);
      console.log('truncatedDescriptions:', truncatedDescriptions); // Added for debugging
    }
  }, [data, truncatedDescriptions]);

  return (
    <div className=" min-h-screen">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:w-4/5 md:w-4/5 w-full mx-auto gap-4 mt-4 min-h-52">
        {truncatedDescriptions?.map((category) => (
          <>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={category?.images[0]} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.name}</h2>
                <p>{category.descriptions}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;

export const getServerSideProps = async () => {
  // Fetch data from an API
  const res = await fetch("https://csc-server-again.vercel.app/category");
  const data = await res.json();

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
    },
  };
};
