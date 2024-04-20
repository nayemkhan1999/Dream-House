import { useContext, useState } from "react";


import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Login.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";


const Registar = () => {
  const { createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password).then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div className="mx-24 averia-serif ">
        <Helmet>
        <title>Dream House | Registar Page</title>
      </Helmet>
      <div className="hero min-h-screen img">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl mt-4 mb-4  text-white z-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Name */}
            <div className="form-control">
              <div className="mx-auto mb-4">
                <p className="font-bold text-4xl text-gray-400">
                  <span className="text-5xl text-orange-500">R</span>registar{" "}
                </p>
              </div>
              <label className="label">
                <span className="label-text font-bold ">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered font-semibold text-orange-500"
                required
                {...register("name")}
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered font-semibold text-orange-500"
                required
                {...register("email")}
              />
            </div>
            {/* PhotoURL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-white">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photoURL"
                className="input input-bordered font-semibold text-orange-500"
                required
                {...register("photoURL")}
              />
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-white">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered relative font-semibold text-orange-500"
                required
                {...register("password")}
              />
              <span  className="absolute top-[422px] right-[40px] text-black text-lg"
               onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover  font-bold ">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-gost bg-orange-500 text-white font-bold text-lg">
                Sing In
              </button>
            </div>
            <div className="text-center">
              <Link to="/login">
                <span className=" text-black font-bold text-xs">Already a member </span>
                <span className="text-success font-bold underline ">
                  Login now
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registar;
