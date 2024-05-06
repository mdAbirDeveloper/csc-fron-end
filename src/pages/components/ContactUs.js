import { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

const ContactUs = () => {
  const [loading, isLoading] = useState(false);
  const [done, isDone] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const onSubmit = async (data) => {
    //send data on mongodb
    isLoading(true);
    const message = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    fetch("https://csc-server.vercel.app/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((result) => {
        isLoading(false);
        isDone("message submited successfully")
      });
  };

  return (
    <div>
      <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500">
        Contact_Us
      </h1>
      <form
        className="card-body xl:w-3/5 md:w-3/5 w-full mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control">
          <input
            type="text"
            placeholder="write your full Name"
            className="input input-bordered"
            required
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="write your email"
            className="input input-bordered"
            required
            {...register("email")}
          />
        </div>
        <div className="form-control">
          <textarea
            rows={10}
            cols={10}
            type="text"
            placeholder="write your message"
            className="input input-bordered"
            required
            {...register("message")}
          />
        </div>
        <div className="form-control mt-6">
            <p className="text-green-500">{done}</p>
          {loading ? (
            <button
            className="btn btn-primary font-bold text-white"
            type="submit"
          >
            submiting....
          </button>
          ) : (
            <button
              className="btn btn-primary font-bold text-white"
              type="submit"
            >
              submit Your valuable message
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
