import React from "react";
import Header from "../component/LandingPage/Header";
import ImageSection from "../component/LandingPage/ImageSection";

export default function index() {
  return (
    <>
      <div className="w-auto h-auto bg-[#F8F8F8]">
        <Header />
        <ImageSection />
      </div>
    </>
  );
}
