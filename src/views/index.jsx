import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <div className="w-96 mx-auto flex justify-between">
        <Link to="/auth">
          <button className="bg-secondary w-auto h-12 px-5 rounded-xl text-blacked">
            Login
          </button>
        </Link>
        <Link to="/auth">
          <button className="bg-secondary w-auto h-12 px-5 rounded-xl text-blacked">
            Sign Up
          </button>
        </Link>
      </div>
    </>
  );
}
