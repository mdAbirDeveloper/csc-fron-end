import React from "react";
import DeshboardLayout from "../DeshboardLayout";
import { useForm } from "react-hook-form";

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const onSubmit = async (data) => {
    const image1 = data.firstImage[0];
    console.log(image1,);
    const formData = new FormData();
    formData.append("image", image1,);
    const url = `https://api.imgbb.com/1/upload?key=d1fbaa0b9f043f285b08e6d997b387ef`;

    //send image on imgbb
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        const project = {
          title: data.title,
          descriptions: data.description,
          image: imgdata.data.url,
        };
        console.log(imgdata);

        //send data on mongodb
        fetch("https://csc-server.vercel.app/projects", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(project),
        })
          .then((res) => res.json())
          .then((reuslt) => {
            console.log(reuslt);
          });
      });
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
            placeholder="write your product title"
            className="input input-bordered"
            required
            {...register("title")}
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
          <label>chose a image of your project</label>
          <input type="file" {...register("firstImage")} required />
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary font-bold text-white"
            type="submit"
          >
            Add project
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
