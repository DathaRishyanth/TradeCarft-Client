/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const Login = (props) => {
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/signin`,
        data
      );

      if (res.data.error) {
        return;
      }

      if (res.data.message === "Login successful") {
        localStorage.setItem("token", res.data.token);
        console.log("sucess");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("hello");
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div>
      login
      <section className="bg-gray-50 dark:bg-gray-900 h-fit pt-3">
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-[90%] lg:py-0 ">
          <a
            href="/#"
            className="flex items-center  text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* {props.mode==="Dark Mode"?<img  name='mode' src='logo_light.jpg' className='w-10' alt=''/>:<img  name='mode' src='logo_dark.jpeg' className='w-10' alt=''/>} */}
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <div className="flex justify-between items-center ">
                <div className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
                </div>
                <button
                  onClick={props.toggleMode}
                  className="border p-2 dark:text-white dark:border-[#555756] rounded-lg"
                >
                  {props.mode}
                </button>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                action="/#"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("email", {
                      pattern: {
                        value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                        message: "Invalid email format",
                      },
                      required: "requires email",
                    })}
                  />
                  <p className="text-red-500">{errors.email?.message}</p>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    PhoneNo.
                  </label>
                  <input
                    type="Text"
                    name="username"
                    id="username"
                    placeholder="XXXXXXXX"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    {...register("PhoneNo", {
                      required: "requires Username",
                      minLength: { value: 10, message: " length 10 only" },
                      maxLength: { value: 10, message: " length 10 only" },
                    })}
                  />
                  <p className="text-red-500">{errors.PhoneNo?.message}</p>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", {
                      required: "requires password",
                      minLength: { value: 8, message: "Min length 8" },
                    })}
                  />
                  {/* <i onClick={togglePasswordVisiblity} className="dark:invert">
                    {eye}
                  </i>{" "} */}
                  <p className="text-red-500">{errors.password?.message}</p>
                </div>

                <button
                  type="submit"
                  className="w-full dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border dark:bg-primary-600 dark:hover:bg-[#111827] dark:focus:ring-primary-800 dark:border dark:border-[#45464b]"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Dont have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
