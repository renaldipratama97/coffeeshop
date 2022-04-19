import React from "react";

export default function Index() {
  
  const linkSocmed = (param) =>{
    window.location.href = param;
  }

  return (
    <>
      <div className="flex flex-col w-100 py-10 h-auto md:h-[350px] md:flex-row bg-[#F8F8F8]">
        <div className="md:w-7/12 w-12/12 pt-[80px] ml-[60px]">
          <div className="flex items-center gap-3">
            <div className="w-[25px] h-[28px]">
              <img src={require("../../../assets/img/logo.png")} alt="logo" />
            </div>
            <p className="text-blacked font-bold text-[16px]">Coffee Shop</p>
          </div>
          <p className="leading-6 mt-5 font-bold text-[#4F5665] text-[15px]">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
          <div className="flex link-socmed py-5 gap-2">
            <span onClick={() => linkSocmed("https://facebook.com")}>
              <img src={require("../../../assets/socmed/facebook.png")} alt="facebookIcon" />
            </span>
            <span onClick={() => linkSocmed("https://twitter.com")}>
              <img src={require("../../../assets/socmed/twitter.png")} alt="twitterIcon" />
            </span>
            <span onClick={() => linkSocmed("https://instagram.com")}>
              <img src={require("../../../assets/socmed/instagram.png")} alt="instagramIcon" />
            </span>
          </div>
          <span className="text-[#AFB5C0]">@2020CoffeeStore</span>
        </div>

        <div className="md:w-5/12 w-12/12 ml-[60px]">
          <div className="mt-10 w-12/12">
            <span className="font-bold text-[15px]">Product</span>
            <ul className="flex flex-wrap text-[#4F5665]">
              <li className="w-6/12">Download</li>
              <li className="w-6/12">Pricing</li>
              <li className="w-6/12">Locations</li>
              <li className="w-6/12">Countries</li>
              <li className="w-6/12">Blog</li>
            </ul>
          </div>

          <div className="mt-10 w-12/12">
            <span className="font-bold text-[15px]">Engage</span>
            <ul className="flex flex-wrap text-[#4F5665]">
              <li className="w-6/12">Coffe Shop ? </li>
              <li className="w-6/12">About Us</li>
              <li className="w-6/12">FAQ</li>
              <li className="w-6/12">Privacy Policy</li>
              <li className="w-6/12">Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
