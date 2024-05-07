/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import DeshboardLayout from "../DeshboardLayout";
import { useForm } from "react-hook-form";

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submited, setSubmited] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    //console.log(data);
    setLoading(true);
    const formData = new FormData();
    const imgBBUploadPromises = [];

    // Handle multiple image uploads with ImgBB
    for (let i = 0; i < data.images.length; i++) {
      const image = data.images[i];
      const imgBBUrl = `https://api.imgbb.com/1/upload?key=d1fbaa0b9f043f285b08e6d997b387ef`; // Replace with your actual API key

      formData.append("image", image);

      imgBBUploadPromises.push(
        fetch(imgBBUrl, {
          method: "POST",
          body: formData,
        }).then((res) => res.json())
      );
      setSubmited("Project added successfully");
      setLoading(false);
      formData.delete("image"); // Clear formData for the next image
    }

    // Wait for all images to be uploaded before sending data to MongoDB
    try {
      const imgData = await Promise.all(imgBBUploadPromises);
      const imageUrls = imgData.map((img) => img.data.url);

      const project = {
        name: data.name,
        descriptions: data.description,
        price: data.price,
        oldprice: data.oldprice,
        images: imageUrls, // Array of uploaded image URLs
      };

      //console.log(project);

      // Send data to MongoDB (modify endpoint and format if needed)
      const response = await fetch(
        "https://csc-server-again.vercel.app/projects",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(project),
        }
      );

      const result = await response.json();
      //console.log(result);
    } catch (error) {
      console.error("Error uploading images or sending data:", error);
      // Handle errors appropriately, e.g., display error messages
    }
  };

  return (
    <div>
      <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500">
        Add Your project
      </h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your project old price"
            className="input input-bordered"
            {...register("oldprice")}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your project price"
            className="input input-bordered"
            required
            {...register("price")}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your project name"
            className="input input-bordered"
            required
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your project description"
            className="input input-bordered"
            required
            {...register("description")}
          />
        </div>
        <div>
          <label>Choose images of your project (multiple allowed)</label>
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
              Add project
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
