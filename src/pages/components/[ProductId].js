import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Products from "./Products";

const ProductDetailPage = () => {
  const router = useRouter();
  const { ProductId } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [count, setCount] = useState(1);

  const description = product?.descriptions;
  const truncateLength = 200; // Adjust this value as needed

  const truncatedDescription =
    description?.substring(0, truncateLength) + ".......";

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
        const response = await fetch(
          `https://csc-server-again.vercel.app/products/${ProductId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
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
              {selectedImage && <img src={selectedImage} className="" />}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product?.images.map((img) => (
                <>
                  <div className="grid grid-cols-3 xl:w-80 md:w-80 w-44 my-6">
                    <img
                      className=""
                      onClick={() => handleImageClick(img)}
                      src={img}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="my-auto">
            <h1 className="text-4xl uppercase font-bold font-serif mb-8">
              {product.name}
            </h1>
            <h1 className="text-2xl uppercase font-bold font-serif mb-8">
              <span className="text-gray-300 line-through mr-3">
                ${product.oldprice}{" "}
              </span>
              ${product.price}
            </h1>
            <p>
              {description.length > truncateLength
                ? truncatedDescription
                : description}
            </p>
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
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="xl:w-4/5 md:w-4/5 w-full mx-auto">
          <div>
            <button className="bg-none text-xl font-serif font-semibold hover:text-blue-500 mr-9">
              Descriptions
            </button>
            <button className="bg-none text-xl font-serif font-semibold hover:text-blue-500">
              Review
            </button>
          </div>
          <div className="divider"></div>
          <div className="mb-20">
            <p>{product?.descriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
