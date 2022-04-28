import React from "react";
import Header from "../component/MainComponent/Header";
// import Footer from "../component/MainComponent/Footer";

export default function index() {
  return (
    <>
      <div className="w-auto h-auto bg-[#FFFFFF]">
        <Header />
        <div className="flex h-[800px] border-[#9F9F9F] border-t-[0.5px]"> 
            <div className="sidebar w-[30%] border-[#9F9F9F] border-r-[0.5px]">
                <h1 className="font-bold text-primary text-center mt-[29px] text-[25px]">Promo For You</h1>
                <p className="text-[12px] w-[230px] text-center mt-10 ml-auto mr-auto">Coupons will be updated every weeks. Check them out! </p>

                <div className="card mt-12 bg-[#FFCB65] h-[472px] w-[284px] ml-auto mr-auto rounded-[25px]">
                    <span className="img-card mt-10">
                        <img src={require("../assets/img/image-29.png")} className="rounded-full ml-auto mr-auto" alt="spaghetti" />
                    </span>
                    <h2 className="font-bold text-center mt-3">Beef Spaghetti</h2>
                    <h2 className="font-bold text-center mt-1">20% OFF</h2>
                    <p className="text-center text-[12px] w-[80%] ml-auto mr-auto mt-2">
                        Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                    </p>
                </div>
            </div>
            <div className="content w-[70%]">

            </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
