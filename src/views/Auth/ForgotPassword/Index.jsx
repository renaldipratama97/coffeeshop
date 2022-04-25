import React from "react";

export default function Index() {
  return (
    <>
      <>
        <div className="flex w-100 h-28 items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-[30px] h-[33px]">
              <img src={require("../../../assets/img/logo.png")} alt="logo" />
            </div>
            <p className="text-blacked font-bold text-[20px]">Coffee Shop</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-auto mt-20 text-secondary text-[20px]">
          <h1 className="text-black font-bold text-[45px]">
            Forgot Your Password ?
          </h1>
        </div>
      </>
    </>
  );
}
