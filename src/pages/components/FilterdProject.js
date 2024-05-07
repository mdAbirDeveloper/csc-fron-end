import Link from "next/link";
import { useEffect, useState } from "react";

function ProductsComponent({ type }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch products based on the selected type
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://csc-server.vercel.app/projects`); // Replace 'API_ENDPOINT' with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetchProjects");
        }
        const data = await response.json();
        setProjects(data); // Update the products state with the fetched data
      } catch (error) {
        console.error("Error  fetchProjects:", error);
      }
    };

    fetchProjects();
  }, [type]);

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 xl:w-3/4 md:w-3/4 w-full mx-auto">
      {projects.map((project) => (
        <div key={project?._id} className="relative">
          <Link href={`/deshboard/projects/${project?._id}`}>
            <div>
              <img src={project?.images[0]} alt={project?.name} className="mx-auto"></img>
              <h1 className="text-center font-serif font-bold text-xl my-6">
                {project?.name}
              </h1>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-1000">
              <img src={project?.images[1]} alt={project?.name}  className="mx-auto"></img>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsComponent;
