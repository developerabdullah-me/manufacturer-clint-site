import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
const SignUp = () => {

    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updatError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
    const navigate=useNavigate()
  if (error || updatError) {
    return (
      <div>
        <p>Error: {error?.message || updatError?.message}</p>
      </div>
    );
  }
  if (loading || updating) {
    return <p className="text-center mt-36 text-primary">Loading...</p>;
  }
  if (user) {
    
    navigate('/')
  }
  const onSubmit = async(data) => {
    await  createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName:data.name});
   
  };



    return (
        <div>
        <div class="card w-96 bg-base-100 shadow-xl mx-auto items-center h-max mt-28 mb-20">
          <div class="card-body">
            <h2 class="text-center">Please Register</h2>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    name="name"
                    class="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name is required",
                      },
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: "your name is not required",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
  
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    class="input input-bordered w-full max-w-xs"
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
                  <label class="label">
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
  
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    class="input input-bordered w-full max-w-xs"
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
                  <label class="label">
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
                  value="Register"
                />
              </form>
            </div>
            <p>
              New to Doctors Portal? <Link to="">Create new account</Link>
            </p>
            <div class="divider">OR</div>
            <div className="mx-auto">
            <button onClick={() => signInWithGoogle()} class="btn btn-outline ">CONTINUE WITH GOOGLE</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;


