/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import DeshboardLayout from "../DeshboardLayout";
import { useForm } from "react-hook-form";
import Head from "next/head";

const index = () => {
  const [submited, setSubmited] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    //console.log(data);

    const formData = new FormData();
    const imgBBUploadPromises = [];

    // Handle multiple image uploads with ImgBB
    for (let i = 0; i < data.images.length; i++) {
      const image = data.images[i];
      const imgBBUrl = `https://api.imgbb.com/1/upload?key=10841ba3dc3175d0ce4663176c07cd7b`; // Replace with your actual API key

      formData.append("image", image);

      imgBBUploadPromises.push(
        fetch(imgBBUrl, {
          method: "POST",
          body: formData,
        }).then((res) => res.json())
      );


      formData.delete("image"); // Clear formData for the next image
    }

    // Wait for all images to be uploaded before sending data to MongoDB
    try {
      const imgData = await Promise.all(imgBBUploadPromises);
      const imageUrls = imgData.map((img) => img.data.url);

      const project = {
        name: data.name,
        category : data.category,
        descriptions: data.descriptions,
        price: data.price,
        oldprice: data.oldprice,
        images: imageUrls, // Array of uploaded image URLs
      };

      //console.log(project);

      // Send data to MongoDB (modify endpoint and format if needed)
      const response = await fetch(
        "https://csc-server-again.vercel.app/products",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(project),
        }
      );

      const result = await response.json();
      setSubmited("Product added successfully");
      setLoading(false);
      //console.log(result);
    } catch (error) {
      console.error("Error uploading images or sending data:", error);
      // Handle errors appropriately, e.g., display error messages
    }
  };

  return (
    <div>
    <Head>
      <title>انظمة المدن للضباب والرذاذ</title>
    </Head>
      <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500">
        Add Your Product
      </h1>
      <form className="card-body w-4/5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <select
            className="select w-full input input-bordered"
            {...register("category")}
          >
            <option disabled selected>
              Pick your product category
            </option>
            <option value="filter">Filter</option>
            <option value="connectors">Connectors</option>
            <option value="fogAndMistPumps">Fog and Mist Pumps</option>
            <option value="fogNuzzles">Fog Nuzzles</option>
            <option value="hydraulicValves">Hydraulic Valves</option>
            <option value="mistFan">Mist Fan</option>
          </select>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your product old price"
            className="input input-bordered"
            {...register("oldprice")}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your product price"
            className="input input-bordered"
            {...register("price")}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your product name"
            className="input input-bordered"
            required
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <textarea
            type="text"
            placeholder="write your product description"
            className="input input-bordered"
            required
            {...register("descriptions")}
          />
        </div>
        <div>
          <label>Choose images of your product (multiple allowed)</label>
          <input
            type="file"
            {...register("images", { required: true })}
            multiple
          />
          {errors.images && <span>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <p className="text-xl uppercase font-serif text-green-500">
            {submited}
          </p>
          {loading ? (
            <button
              className="btn btn-primary font-bold text-white"
              type="submit"
            >
              ........
            </button>
          ) : (
            <button
              className="btn btn-primary font-bold text-white"
              type="submit"
            >
              Add Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <DeshboardLayout>{page}</DeshboardLayout>;
};
