import React from "react";

export default function ImageSection() {
  return (
    <>
      <div className="image-section flex justify-center items-center w-full h-[645px] bg-no-repeat bg-cover">
        <div className="w-[95%] md:w-11/12 h-4/5 md:h-3/5">
          <div className="w-12/12 lg:w-6/12 h-full flex flex-col">
            <h3 className="text-white font-bold text-[50px]">
              Start Your Day with Coffee and Good Meals
            </h3>
            <p className="text-white font-bold text-[20px] mt-4">
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>
            <button className="bg-secondary h-[60px] w-[250px] mt-[30px] rounded-[10px] text-primary font-bold text-base hover:bg-white hover:text-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
