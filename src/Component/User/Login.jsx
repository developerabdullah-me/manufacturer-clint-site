import React from 'react';

import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from '../Sheare/Footer/Footer';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (error) {
    return (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl mx-auto items-center h-max mt-28 mb-20">
        <div className="card-body">
          <h2 className="text-center">Please Login</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "your email is not required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "your password  must be 6 character",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="w-full max-w-xs btn"
                type="submit"
                value="Login"
              />
            </form>
          </div>
          <p>
            New to Doctors Portal? <Link className="text-red-500"  to="/singUp">Create new account</Link>
          </p>
          <div className="divider">OR</div>
         
          <div className="mx-auto">
            <button onClick={() => signInWithGoogle()} className="btn btn-outline ">CONTINUE WITH GOOGLE</button>
           
          </div>
        </div>
      </div>
      <Footer/>
        </div>
    );
};

export default Login;