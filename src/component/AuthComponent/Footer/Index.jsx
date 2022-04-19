import React from "react";

export default function Index() {
  return (
    <>
      <div className="flex w-50 h-[350px] bg-[#F8F8F8]">
        <div className="w-8/12 pt-[80px] px-[70px]">
          <div className="flex items-center gap-3">
            <div className="w-[25px] h-[28px]">
              <img src={require("../../../assets/img/logo.png")} alt="logo" />
            </div>
            <p className="text-blacked font-bold text-[16px]">Coffee Shop</p>
          </div>
          <p className="leading-6 mt-5 font-bold text-[#4F5665] text-[15px]">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
        </div>
        <div className="border w-6/12"> test2 </div>
      </div>
    </>
  );
}
