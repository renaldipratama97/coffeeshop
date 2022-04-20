import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="flex w-full h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[33px]">
            <img src={require("../../../assets/img/logo.png")} alt="logo" />
          </div>
          <p className="text-blacked font-bold text-[18px]">Coffee Shop</p>
        </div>
        <div className="font-bold text-primary text-2xl">Sign Up</div>
      </div>
      <div className="form-register w-full h-auto mt-[20px]">
        <div className="form-input flex flex-col gap-2 w-full h-auto">
          <label htmlFor="email" className="text-[15px] font-bold">
            Email Address :
          </label>
          <input
            className="h-12 border rounded-xl indent-6 text-[15px]"
            type="text"
            placeholder="Enter your email adress"
          />
        </div>
        <div className="form-input flex flex-col gap-2 w-100 h-auto mt-3">
          <label htmlFor="password" className="text-[15px] font-bold">
            Password :
          </label>
          <input
            className="h-12 border rounded-xl indent-6 text-[15px]"
            type="password"
            placeholder="Enter your password"
          />
        </div>
				<div className="form-input flex flex-col gap-2 w-100 h-auto mt-3">
          <label htmlFor="email" className="text-[15px] font-bold">
						Phone Number :
          </label>
          <input
            className="h-12 border rounded-xl indent-6 text-[15px]"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>

        <button className="bg-secondary h-12 w-full rounded-xl mt-5 font-bold text-[20px] text-primary">
          Sign Up
        </button>
        {/* <button className="flex justify-center items-center gap-3 bg-white shadow-lg h-12 w-full rounded-xl mt-8 font-bold text-[17px] text-black">
          <img
            src={require("../../../assets/img/google-logo.png")}
            alt="google"
          />
          Login with Google
        </button> */}
				<div className="flex flex-nowrap w-full mt-6">
					<span className="border-solid box-border bg-[#C4C4C4] w-3/12 h-1 m-auto"></span>
					<p className="text-gray text-[16px] font-bold w-8/12 text-center">
						Already have an account?
					</p>
					<span className="border-solid box-border bg-[#C4C4C4] w-3/12 h-1 m-auto"></span>
				</div>
        <Link to="/auth">
          <button className="bg-primary shadow-lg h-12 w-full mt-5 rounded-xl font-bold text-[17px] text-white">
            Login Here
          </button>
        </Link>
      </div>
    </>
  );
}
