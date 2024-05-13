/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";

const Connectors = () => {
  const router = useRouter();
  const { connectorsId } = router.query;
  // console.log(connectorsId)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);

  const [rating, setRating] = useState(0); // Current user rating
  const [hoverRating, setHoverRating] = useState(0); // Hovered rating

  const [averageRating, setAverageRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+8801832822560";
    let url;

    // Check if the user is on a mobile device
    if (isMobile) {
      url = `https://wa.me/${phoneNumber}`;
    } else {
      // If on desktop, redirect to WhatsApp Web
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }

    router.push(url);
  };

  useEffect(() => {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous error

    console.log(connectorsId, "this is connectors id"); // Log the product ID

    fetch(`https://csc-server-again.vercel.app/ratings/${connectorsId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.success) {
          setAverageRating(data.averageRating);
          setTotalRating(data.totalRatings);
        } else {
          setError("Product ID not found or error fetching average rating"); // Set user-friendly error message
        }
      })
      .catch((error) => {
        setError("Error fetching average rating"); // Set user-friendly error message
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false regardless of success or error
      });
  }, [connectorsId]);

  const handleRatingClick = (value) => {
    setRating(value);
    // Make API call to submit rating
    fetch("https://csc-server-again.vercel.app/ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ connectorsId, rating: value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Rating submitted:", data);
        // Handle response if needed
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
      });
  };

  const handleMouseOver = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://csc-server-again.vercel.app/showDetail/${connectorsId}`
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

    if (connectorsId) {
      fetchProduct();
    }
  }, [connectorsId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-5 lg:w-4/5 md:w-4/5 w-full mx-auto">
        <div className="lg:order-1 md:order-1 order-2">
          <div className="text-right">
            <h1 className="text-4xl font-serif font-bold">{product.name}</h1>
            <div className="flex justify-end text-2xl font-bold text-red-600">
              <p className="line-through opacity-55">${product.oldprice}</p>
              <p className="ml-3 text-green-600">${product.price}</p>
            </div>
            <p className="mx-5 my-5">
              {product.descriptions.split(",").map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className=" border ">
              <div className="grid grid-cols-2 justify-between">
                <div className="grid grid-cols-3 ml-3 justify-center items-center mr-3 mt-3 lg:w-36 md:w-36 w-full border">
                  <button
                    className="font-bold py-2 px-4 border-r-2 w-10"
                    onClick={decrement}
                  >
                    <FaMinus />
                  </button>
                  <span className="mx-4 text-xl font-bold text-center">
                    {count}
                  </span>
                  <button
                    className="font-bold py-2 px-4 border-l-2 w-10"
                    onClick={increment}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="ml-36">
                  <p className="mt-4">الكمية</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="text-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="btn w-full mb-5 text-white"
                  style={{ backgroundColor: "#410000" }}
                >
                  إضافة للسلة
                </button>
              </div>

              {/* reatin sections */}
              <div className="mr-3">
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <input
                      key={value}
                      type="radio"
                      name={`rating-${product?._id}`}
                      value={value}
                      className={`rating mask mask-star-2 bg-orange-400 ${
                        value <= (hoverRating || rating) ? "checked" : ""
                      }`}
                      onClick={() => handleRatingClick(value)}
                      onMouseOver={() => handleMouseOver(value)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>

                <p>Average Rating: {averageRating?.toFixed(2)}</p>
                <p>Total Rating: {totalRating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:order-2 md:order-2 order-1">
          <img src={product?.images[0]} className="rounded-xl"></img>
        </div>
      </div>
    </div>
  );
};

export default Connectors;
