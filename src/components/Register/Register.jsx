import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Shared/Context/Context";
import { updateProfile } from "firebase/auth";

export default function Register() {
  const { emailVerification, register:registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/';

  const onSubmit = (data) => {
    const { name, gender, email, password } = data;
    const userInfo = { name, email, gender,password, role: "user" };

    registerUser(email, password)
  .then((result) => {
    const createdUser = result.user;

    // ✅ Set display name here
    updateProfile(createdUser, {
      displayName: name,
    }).then(() => {
      console.log("Display name updated");
    }).catch((error) => {
      console.error("Error updating profile:", error);
    });

    const userInfo = { name, email, gender, password, role: "user" };

    // Save user to DB
    fetch('https://all-muslim-living-server.onrender.com/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (emailVerification) {
      emailVerification().then(() =>
        Swal.fire("Check your email!", "Verification email sent.", "info")
      );
    }

    Swal.fire("Success!", "Account created successfully", "success");
    reset();
    navigate(from);
  })
  .catch((error) => {
    console.error(error);
    Swal.fire("Error", error.message, "error");
  });

  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow my-[107px]">
      <h2 className="text-xl font-semibold text-center mb-3">Create Account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Name */}
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border px-2 py-1 rounded text-sm"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm mb-1">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full border px-2 py-1 rounded text-sm"
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs">{errors.gender.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full border px-2 py-1 rounded text-sm"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full border px-2 py-1 rounded text-sm"
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm mb-1">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="w-full border px-2 py-1 rounded text-sm"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Show Password */}
        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            id="showPassword"
            onChange={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer"
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-1.5 rounded text-sm hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
