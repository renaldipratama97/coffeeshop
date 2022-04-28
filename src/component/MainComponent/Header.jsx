import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-full h-[100px]">
        <div className="flex justify-between items-center mx-auto w-10/12 h-full">
          <div className="flex items-center h-full">
            <div className="h-max-[30px]">
              <img src={require("../../assets/img/logo.png")} alt="logo" />
            </div>
            <p className="text-blacked ml-3 font-bold text-[18px]">
              Coffee Shop
            </p>
          </div>
          <nav className="w-6/12">
            <ul className="flex justify-evenly text-[#4F5665] text-base font-normal">
              <Link to="/" className="hover:text-primary hover:font-semibold hover:scale-110 cursor-pointer hover:z-10">
                Home
              </Link>
              <Link to="/product" className="hover:text-primary hover:font-semibold hover:scale-110 cursor-pointer hover:z-10">
                Product
              </Link>
              <Link to="/cart" className="hover:text-primary hover:font-semibold hover:scale-110 cursor-pointer hover:z-10">
                Your Cart
              </Link>
              <Link to="/history" className="hover:text-primary hover:font-semibold hover:scale-110 cursor-pointer hover:z-10">
                History
              </Link>
            </ul>
          </nav>
          <div className="flex tools gap-5">
            <Link to="/search" className="hover:scale-110">
              <img src={require("../../assets/img/search.png")} className="max-h-[30px]" alt="search" />
            </Link>
            <Link to="/chat" className="hover:scale-110">
              <div className="w-[20px] h-[20px] bg-primary text-white absolute mt-[-10px] ml-[-10px] text-[10px] p-2 rounded-full leading-[4px]">
                <span>1</span>
              </div>
              <img src={require("../../assets/img/chat.png")} className="max-h-[30px]" alt="chat" />
            </Link>
            <Link to="/profile" className="hover:scale-110">
              <img src={require("../../assets/img/avatar.png")} className="max-h-[30px] rounded-full" alt="avatar" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
