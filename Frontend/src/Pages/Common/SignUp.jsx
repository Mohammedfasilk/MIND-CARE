import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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
    <main className='pt-20'>
        <div className='text-center'>
            <h1 className='text-4xl'>
                Sign Up
            </h1>
            <p className='mt-5'>
                Already have an account? <Link className='text-blue-600 underline' to=''>Log In</Link>
            </p>
        </div>
        <section className=' lg:flex justify-center w-full'>
            <div className='p-8'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full py-10 sm:p-5 lg:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
        

        <div className="grid sm:grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              className="p-2 border rounded w-full"
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              className="p-2 border rounded w-full"
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              className="p-2 border rounded w-full"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-gray-700">Mobile No</label>
            <input
              className="p-2 border rounded w-full"
              type="tel"
              {...register("phone", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              maxLength="10"
              placeholder="Mobile No"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Place */}
          <div>
            <label className="block text-gray-700">Place</label>
            <input className="p-2 border rounded w-full" type="text" {...register("place")} placeholder="Place" />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700">City</label>
            <input className="p-2 border rounded w-full" type="text" {...register("city")} placeholder="City" />
          </div>

          {/* District */}
          <div>
            <label className="block text-gray-700">District</label>
            <input 
            className="p-2 border rounded w-full" 
            {...register("district", {
              required: "District is required",
            })}
            type="text"
            placeholder="District" />
            {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700">State</label>
            <input 
            className="p-2 border rounded w-full" 
            {...register("state", {
              required: "State is required",
            })}
            type="text"
            placeholder="state" />
            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-gray-700">Nationality</label>
            <input className="p-2 border rounded w-full" type="text" {...register("nationality")} placeholder="Nationality" />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-gray-700">Pincode</label>
            <input
              className="p-2 border rounded w-full"
              type="text"
              {...register("pincode", {
                required: "Pincode is required",
                minLength: { value: 6, message: "Pincode must be 6 digits" },
                maxLength: { value: 6, message: "Pincode must be 6 digits" },
              })}
              placeholder="Pincode"
            />
            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              className="p-2 border rounded w-full"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              placeholder="New Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              className="p-2 border rounded w-full"
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-5">
          <button onClick={()=>navigate('/user/Dashboard')} type="submit" className="bg-[#17A39C] text-white px-5 py-2 rounded-md hover:bg-[#17B89D]">
            Sign Up
          </button>
        </div>
      </form>
            </div>

            <div className='flex items-center justify-center'>
                <h1 className=' text-base sm:text-xl lg:text-2xl pb-10'>
                    Are you a Therapist Signup here
                </h1>
            </div>
        </section>
    </main>
  )
}

export default SignUp