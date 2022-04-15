import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Index";
import SignUp from "./Register/Index";
import ForgotPassword from "./ForgotPassword/Index";
import Footer from "../../component/AuthComponent/Footer/Index";

export default function Index() {
  return (
    <>
      <div className="w-100 h-auto flex">
        <div className="image-login w-6/12 h-auto">
          <img
            src={require("../../assets/img/robert-bye.png")}
            draggable="false"
            alt="login"
          />
        </div>
        <div className="flex flex-col w-6/12">
          <div className="w-12/12 h-[1100px] bg-red-600 px-20">
            <Routes>
              <>
                <Route path="/" exact element={<Login />} />
                <Route path="/sign-up" exact element={<SignUp />} />
                <Route path="/forgot-password" exact element={<ForgotPassword />} />
              </>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
