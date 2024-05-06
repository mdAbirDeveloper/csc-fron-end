/* eslint-disable react-hooks/rules-of-hooks */

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const projectDetailPage = () => {
  const router = useRouter();
  const { projectsId } = router.query;
  //console.log(router.query)

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

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
        const response = await fetch(`https://csc-server-again.vercel.app/projects/${projectsId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project');
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

  if (loading) {
    return <div className='text-center text-2xl my-6 text-green-400 font-bold min-h-screen'>Loading...</div>;
  }


  return (
    <div>
      <div className='min-h-screen'>
        <div className='grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:w-4/5 md:w-4/5 w-4/5 mx-auto my-6 xl:gap-10 md:gap-10'>
          <div>
              <div className=' border-blue-400'>
                {/* top image */}
                {selectedImage && <img src={selectedImage} className='rounded-xl' />}
              </div>
              <div className='grid grid-cols-4 gap-3'>
                {
                  project?.images.map((img) => <>
                    <div className='grid grid-cols-3 xl:w-56 md:w-56 w-44 my-6'>
                      <img className=' rounded-xl' onClick={()=> handleImageClick(img)} src={img} />
                    </div>
                  </>)
                }
              </div>
          </div>
          <div className='my-auto'>
            <h1 className='text-4xl uppercase font-bold font-serif'>{project.name}</h1>
            <h1>{project.descriptions}</h1>
            <button className='btn btn-success text-white font-bold mt-5'><Link href={'/components/ContactUs'}>Contact_us</Link></button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default projectDetailPage;
