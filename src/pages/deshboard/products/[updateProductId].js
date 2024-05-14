// /* eslint-disable react-hooks/rules-of-hooks */
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const updateProduct = () => {
//   const router = useRouter();
//   const { updateProductId } = router.query;
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [products, setProducts] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `https://csc-server-again.vercel.app/showProduct/${updateProductId}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const data = await response.json();
//         setProducts(data);
//         setLoading(false);
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//         // Handle error, show error message, etc.
//       }
//     };

//     if (updateProductId) {
//       fetchProduct();
//     }
//   }, [updateProductId]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     //console.log(data);

//     // Wait for all images to be uploaded before sending data to MongoDB
//     try {
//       const updatedData = {
//         name: data.name,
//         descriptions: data.descriptions,
//         price: data.price,
//         oldprice: data.oldprice,
//       };

//       //console.log(updatedData);

//       // Send data to MongoDB (modify endpoint and format if needed)
//       const response = await fetch(
//         `https://csc-server-again.vercel.app/updateProduct/${updateProductId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(updatedData),
//         }
//       );

//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error( error);
//       // Handle errors appropriately, e.g., display error messages
//     }
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500">
//             Add Your Product
//           </h1>
//           <form className="card-body" onClick={handleSubmit(onSubmit)}>
//             <div className="form-control">
//               <label>oldprice</label>
//               <input
//                 type="text"
//                 placeholder="write your product old price"
//                 className="input input-bordered"
//                 {...register("oldprice")}
//                 defaultValue={products?.oldprice}
//               />
//             </div>
//             <div className="form-control">
//               <label>price</label>
//               <input
//                 type="text"
//                 placeholder="write your product price"
//                 className="input input-bordered"
//                 {...register("price")}
//                 defaultValue={products?.price}
//               />
//             </div>
//             <div className="form-control">
//               <label>name</label>
//               <input
//                 type="text"
//                 placeholder="write your product name"
//                 className="input input-bordered"
//                 required
//                 {...register("name")}
//                 defaultValue={products?.name}
//               />
//             </div>
//             <div className="form-control">
//               <label>description</label>
//               <textarea
//                 type="text"
//                 placeholder="write your product description"
//                 className="input input-bordered"
//                 required
//                 {...register("descriptions")}
//                 defaultValue={products?.descriptions}
//               />
//             </div>
//             <div className="form-control mt-6">

              
//                 <button
//                   className="btn btn-primary font-bold text-white"
//                   type="submit"
//                 >
//                   Update Product
//                 </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default updateProduct;
