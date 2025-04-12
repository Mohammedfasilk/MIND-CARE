import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function LoginForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data Submitted: ", data);
      };
  return (
    <section className="border shadow-xl rounded-2xl p-10">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="flex flex-col space-y-5 w-[300px]">
            <div className="text-center text-2xl font-bold">
                <h1>Login</h1>
            </div>
            <div>
              <label>Email</label>
              <input
                className="border w-full border-gray-400 rounded-md p-2"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                name="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="border border-gray-400 rounded-md p-2"
                name="password"
                type="password"
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                  })}
                placeholder="Username"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-center pt-5">
              <button
                type="submit"
                className="px-10 py-2 w-full rounded bg-cyan-500 text-white font-bold"
              >
                Login
              </button>
            </div>
            <div className="text-center text-sm">
                <p>Don't have an account? <Link className="underline text-blue-700" to={'/signup'}>signup</Link></p>
            </div>
          </div>
        </form>
      </section>
  )
}

export default LoginForm