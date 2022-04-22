import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-full h-[100px]">
        <div className="flex justify-between items-center mx-auto w-10/12 h-full">
          <div className="flex items-center h-full">
            <div className="w-[30px] h-[33px]">
              <img src={require("../../assets/img/logo.png")} alt="logo" />
            </div>
            <p className="text-blacked ml-3 font-bold text-[18px]">
              Coffee Shop
            </p>
          </div>
          <nav className="w-6/12">
            <ul className="flex justify-evenly text-[#4F5665] text-base font-normal">
              <li className="hover:text-primary hover:font-semibold hover:scale-110 cursor-pointer hover:z-10">
                Home
              </li>
              <li className="hover:text-primary hover:font-semibold hover:scale-110 cursor-pointer hover:z-10">
                Product
              </li>
              <li className="hover:text-primary hover:font-semibold hover:scale-110 cursor-pointer hover:z-10">
                Your Cart
              </li>
              <li className="hover:text-primary hover:font-semibold hover:scale-110 cursor-pointer hover:z-10">
                History
              </li>
            </ul>
          </nav>
          <div className="auth">
            <Link to="/auth">
              <button className="bg-[#F8F8F8] h-[45px] w-[100px] rounded-[50px] text-lg font-medium text-[#0B132A;] mr-1 hover:bg-secondary hover:text-primary">
                Login
              </button>
            </Link>
            <Link to="/auth/sign-up">
              <button className="bg-secondary h-[45px] w-[100px] rounded-[50px] text-lg font-medium text-primary hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary">
                Auth
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
