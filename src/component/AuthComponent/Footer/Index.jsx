import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="flex w-50 h-[350px] bg-[#F8F8F8]">
        <div className="w-8/12 pt-[80px] px-[60px]">
          <div className="flex items-center gap-3">
            <div className="w-[25px] h-[28px]">
              <img src={require("../../../assets/img/logo.png")} alt="logo" />
            </div>
            <p className="text-blacked font-bold text-[16px]">Coffee Shop</p>
          </div>
          <p className="leading-6 mt-5 font-bold text-[#4F5665] text-[15px]">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
          <div className="flex link-socmed py-5 gap-2">
            <a href="https://facebook.com/coffeeShop">
              <img src={require("../../../assets/socmed/facebook.png")} className="facebookIcon" />
            </a>
            <a href="https://twitter.com/coffeeShop">
              <img src={require("../../../assets/socmed/twitter.png")} className="twitterIcon" />
            </a>
            <a href="https://instagram.com/coffeeShop">
              <img src={require("../../../assets/socmed/instagram.png")} className="instagramIcon" />
            </a>
          </div>
          <span className="text-[#AFB5C0]">@2020CoffeeStore</span>
        </div>

        <div className="w-6/12">
          <div className="mt-10 w-12/12">
            <span className="font-bold text-[15px]">Product</span>
            <ul>
              <li className="w/6/12">Download</li>
              <li className="w/6/12">Pricing</li>
              <li className="w/6/12">Locations</li>
              <li className="w/6/12">Countries</li>
              <li className="w/6/12">Blog</li>
            </ul>
          </div>

          <div className="mt-10 w-12/12">
            <span className="font-bold text-[15px]">Engage</span>
            <ul>
              <li className="w/6/12">Coffe Shop ? </li>
              <li className="w/6/12">About Us</li>
              <li className="w/6/12">FAQ</li>
              <li className="w/6/12">Privacy Policy</li>
              <li className="w/6/12">Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
