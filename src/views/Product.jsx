import React from "react";
import Header from "../component/MainComponent/Header";
// import Footer from "../component/MainComponent/Footer";

export default function index() {
    return (
        <>
            <div className="w-auto h-auto bg-[#FFFFFF]">
                <Header />
                <div className="flex h-auto border-[#9F9F9F] border-t-[0.5px]">
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
                            <p className="text-[14px] text-center">COUPON CODE</p>
                            <h1 className="text-[30px] text-center font-bold">FNPR15RG</h1>
                            <p className="text-[12px] text-center">Valid untill October 10th 2020</p>
                        </div>

                        <button className="bg-primary h-12 w-[284px] rounded-xl mt-5 font-bold text-[17px] text-white ml-[60px]">
                            Apply Coupon
                        </button>

                        <div className="notice text-[12px] text-[#4F5665 ml-10 mt-[80px]">
                            Terms and Condition<br></br>
                            1. You can only apply 1 coupon per day<br></br>
                            2. It only for dine in<br></br>
                            3. Buy 1 get 1 only for new user<br></br>
                            4. Should make member card to apply coupon<br></br>
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
