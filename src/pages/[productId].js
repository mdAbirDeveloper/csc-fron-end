
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductDetailPage = () => {
  const router = useRouter();
  const { ProductId } = router.query;
  console.log(router, 'this is product is')

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return <div>Loading...</div>;
  }

  // Fetch product details based on productId and display them

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {ProductId}</p>
      {/* Display product details here */}
    </div>
  );
};

export default ProductDetailPage;
