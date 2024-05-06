/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import DeshboardLayout from "../DeshboardLayout";
import { useForm } from "react-hook-form";

const index = () => {
  const [submited, setSubmited] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true)
    const image1 = data.firstImage[0];
    const formData = new FormData();
    formData.append("image", image1);
    const url = `https://api.imgbb.com/1/upload?key=d1fbaa0b9f043f285b08e6d997b387ef`;

    //send image on imgbb
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        const review = {
          name: data.name,
          review: data.review,
          image: imgdata.data.url,
        };
        //console.log(imgdata);

        setSubmited("Data submited successfully");
        setLoading(false)

        //send data on mongodb
        fetch("https://csc-server.vercel.app/review", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((result) => {
            //console.log(result);

          });
      });
  };

  return (
    <div>
      <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500">
        Add Your Review
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
            placeholder="write your review"
            className="input input-bordered"
            required
            {...register("review")}
          />
        </div>
        <div>
          <label>chose your image </label>
          <input type="file" {...register("firstImage")} required />
        </div>
        <div className="form-control mt-6">
          <p className="text-xl uppercase font-serif text-green-500">
            {submited}
          </p>
          {
            loading ? <button
            className="btn btn-primary font-bold text-white"
            type="submit"
          >
            ........
          </button> : <button
            className="btn btn-primary font-bold text-white"
            type="submit"
          >
            Add messages
          </button>
          }
        </div>
      </form>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <DeshboardLayout>{page}</DeshboardLayout>;
};
