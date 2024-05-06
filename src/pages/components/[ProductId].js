
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductDetailPage = () => {
  const router = useRouter();
  const { ProductId } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  //console.log
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://csc-server-again.vercel.app/products/${ProductId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // Handle error, show error message, etc.
      }
    };

    if (ProductId) {
      fetchProduct();
    }
  }, [ProductId]);

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
                  product?.images.map((img) => <>
                    <div className='grid grid-cols-3 xl:w-56 md:w-56 w-44 my-6'>
                      <img className=' rounded-xl' onClick={()=> handleImageClick(img)} src={img} />
                    </div>
                  </>)
                }
              </div>
          </div>
          <div className='my-auto'>
            <h1 className='text-4xl uppercase font-bold font-serif'>{product.name}</h1>
            <h1>{product.descriptions}</h1>
            <button className='btn btn-success text-white font-bold mt-5'>Order Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetailPage;
