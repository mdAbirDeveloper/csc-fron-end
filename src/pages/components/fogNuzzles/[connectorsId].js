/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { FaMinus, FaPlus } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const Connectors = () => {
  const router = useRouter();
  const { connectorsId } = router.query;
  // console.log(connectorsId)
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);

  const [rating, setRating] = useState(0); // Current user rating
  const [hoverRating, setHoverRating] = useState(0); // Hovered rating

  const [averageRating, setAverageRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+8801111111111";
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
        setProducts(data);
        setLoading(false);
        console.log(data);
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
    return (
      <div className="text-center text-2xl font-serif font-bold my-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-auto mt-20" style={{ maxWidth: "1200px" }}>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-5 mx-auto">
        {products.map((product) => (
          <>
            <div className="lg:order-1 md:order-1 order-2">
              <div className="text-right">
                <h1 className="text-4xl font-serif font-bold">
                  {product.name}
                </h1>
                <div className="flex justify-start text-2xl font-bold text-red-600">
                  <p className="line-through opacity-55">${product.oldprice}</p>
                  <p className="ml-3 text-green-600">${product.price}</p>
                </div>
                <p className="mx-5 my-5">
                  {product?.descriptions.split(",").map((part, index) => (
                    <React.Fragment key={index}>
                      {part}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <div className=" border ">
                  <div className="grid grid-cols-2 justify-between">
                    <div className="grid grid-cols-3 ml-3 justify-center items-center mr-3 mt-3 w-36 border">
                      <button
                        className="font-bold py-2 px-4  w-10"
                        onClick={decrement}
                      >
                        <FaMinus />
                      </button>
                      <span className="mx-4 text-xl font-bold text-center">
                        {count}
                      </span>
                      <button
                        className="font-bold py-2 px-4  w-10"
                        onClick={increment}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <div className="mr-36">
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
                  <div dir="ltr" className="mr-3">
                    <div className="rating">
                      {[1].map((value) => (
                        <StarRatings
                          key={value}
                          rating={rating} // Set the current rating value
                          changeRating={handleRatingClick} // Function to handle rating change
                          starRatedColor="orange" // Color of the filled stars
                          starHoverColor="orange" // Color of the stars when hovered
                          starDimension="25px" // Size of the stars
                          starSpacing="2px" // Spacing between stars
                          onHover={handleMouseOver} // Function to handle mouseover event
                          onHoverOut={handleMouseLeave} // Function to handle mouseleave event
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
              <img src={product?.images} className="rounded-xl"></img>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Connectors;
