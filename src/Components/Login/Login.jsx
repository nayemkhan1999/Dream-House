import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../../Login.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [showpass,setShowPass] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password).then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div className="mx-24 averia-serif ">
      <Helmet>
        <title>Dream House | Login Page</title>
      </Helmet>
      <div className="hero min-h-screen img">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl mt-4 mb-4 text-white z-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <div className="mx-auto mb-4">
                <p className="font-bold text-4xl text-gray-400">
                  <span className="text-5xl text-orange-500">D</span>ream{" "}
                  <span className="text-orange-500">House</span>
                </p>
              </div>
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered font-semibold text-orange-500"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold ">Password</span>
              </label>
              <input
                type={showpass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered relative font-semibold text-orange-500"
                required
                {...register("password")}
              />
              <span className="absolute top-[240px] right-[40px] text-black text-lg"
              onClick={()=>setShowPass(!showpass)}>
                {showpass ? <FaEyeSlash/> : <FaEye/>}
              </span>
              <label className="label font-bold">
                <a href="#" className="label-text-alt link link-hover text-gray-300">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-gost bg-orange-500 text-white font-bold text-lg">
                Sing In
              </button>
            </div>
            <div className="flex flex-col w-full">
              <div className="divider divider-neutral text-gray-700 font-semibold">Or Login With</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              {/* Another LInks */}

              <button className="btn btn-active text-sm opacity-90 text-black font-medium ">
                continue with
                <span className="text-3xl">
                  <FcGoogle />
                </span>
              </button>

              <button className="btn  btn-active text-sm opacity-90 text-black font-medium">
                continue with
                <span className="text-3xl">
                  <FaGithubSquare />
                </span>
              </button>
            </div>

            <div className="text-center mt-2">
              <Link to="/registar">
                <span className=" text-gray-700 font-bold text-xs"> New to Dream House? </span>
                <span className="text-success  font-bold underline ">
                  Sign up now
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
