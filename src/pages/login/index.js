/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../authentication/Authentication";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState("");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const onSubmit = async (data) => {
    setLoading(true);
    const email = data.email;
    const password = data.password;
    login(email, password)
      .then((user) => {
        //console.log("user login successfully");
        setLoading(false);
        setLoginSuccess("Login successfully");
        router.push("/");
      })
      .catch((error) => {
        //console.log(error);
        setError("Somethink wrong please try again");
        setLoginSuccess("");
        setLoading(false);
      });
  };

  return (
    <div>
      <div dir="ltr">
        <div className="hero min-h-screen bg-blue-200 xl:w-3/4 md:w-3/4 w-full mx-auto rounded-xl">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                This login system are created just for Admin, so if you dont
                have any admin password then dont try to login.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    {...register("password")}
                  />
                </div>
                <div className="form-control mt-6">
                  {loginSuccess && (
                    <p className="text-xl uppercase font-serif text-green-500">
                      {loginSuccess}
                    </p>
                  )}
                  {error && (
                    <p className="text-xl uppercase font-serif text-red-500">
                      {error}
                    </p>
                  )}
                  {loading ? (
                    <button className="btn btn-primary font-bold text-white">
                      ...........
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary font-bold text-white"
                      type="submit"
                    >
                      Login
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
