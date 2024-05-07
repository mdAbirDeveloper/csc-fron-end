/* eslint-disable react-hooks/rules-of-hooks */

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const projectDetailPage = () => {
  const router = useRouter();
  const { projectsId } = router.query;

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (project && project.images && project.images.length > 0) {
      setSelectedImage(project.images[0]);
    }
  }, [project]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  //console.log(project)
  useEffect(() => {
    const project = async () => {
      try {
        const response = await fetch(
          `https://csc-server-again.vercel.app/projects/${projectsId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch project");
        }
        const data = await response.json();
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // Handle error, show error message, etc.
      }
    };

    if (projectsId) {
      project();
    }
  }, [projectsId]);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  if (loading) {
    return (
      <div className="text-center text-2xl my-6 text-green-400 font-bold min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen">
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:w-4/5 md:w-4/5 w-4/5 mx-auto my-6 xl:gap-10 md:gap-10">
          <div>
            <div className=" border-blue-400">
              {/* top image */}
              {selectedImage && (
                <img src={selectedImage} className="rounded-xl" />
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {project?.images.map((img) => (
                <>
                  <div className="grid grid-cols-3 xl:w-56 md:w-56 w-44 my-6">
                    <img
                      className=" rounded-xl"
                      onClick={() => handleImageClick(img)}
                      src={img}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="my-auto">
            <h1 className="text-4xl uppercase font-bold font-serif">
              {project.name}
            </h1>
            <p className="text-2xl font-serif my-2">
              <span className="text-gray-300 line-through mr-3">
                ${project.oldprice}{" "}
              </span>
              ${project?.price}
            </p>
            <h1>{project.descriptions}</h1>
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center mr-3 mt-3 bg-red-200 rounded-xl w-36">
                <button
                  className="bg-white rounded-full font-bold py-2 px-4"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="mx-4 text-xl font-bold">{count}</span>
                <button
                  className="bg-white font-bold py-2 px-4 rounded-full"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <button className="btn btn-success text-white font-bold mt-5">
                <Link href={"/components/ContactUs"}>Contact_us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectDetailPage;
