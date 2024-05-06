/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import DeshboardLayout from "../DeshboardLayout";
import { useForm } from "react-hook-form";

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      
      // Append each image to formData
      for (const image of data.images) {
        formData.append("images", image);
      }

      await fetch("https://csc-server.vercel.app/products", {
        method: "POST",
        body: formData,
      });
      
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500">
        Add Your Product
      </h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your product title"
            className="input input-bordered"
            required
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your product description"
            className="input input-bordered"
            required
            {...register("description")}
          />
        </div>
        <div>
          <label>chose a image of your product</label>
          <input type="file" {...register("images", { required: true })} multiple />
          {errors.images && <span>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary font-bold text-white"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <DeshboardLayout>{page}</DeshboardLayout>;
};
