import React from "react";
import Header from "../component/MainComponent/Header";
import Footer from "../component/MainComponent/Footer";

export default function index() {
  return (
    <>
      <div className="w-auto h-auto bg-[#FFFFFF]">
        <Header />
        {/* <div className="h-[300px] border"> 
            <p className="text-center mt-[130px]">component</p>
        </div> */}
        <Footer />
      </div>
    </>
  );
}
