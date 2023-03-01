import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/download-removebg-preview-removebg-preview.png"
export default function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="flex justify-between px-3 py-3 ">
      <div className="">
        <img onClick={() => {
            navigate(`/`);
          }} src = {logo} className="cursor-pointer h-12"/>
      </div>
      <div className="md:hidden">
        <span className="text-[#E50914] text-4xl"><ion-icon name="list-outline"></ion-icon></span>
      </div>
      <div className="hidden md:flex  ">
        <button
          onClick={() => {
            navigate(`/login`);
          }}
          className="text-white text-xl px-8  duration-100 cursor-pointer  mx-2 "
          style={{ backgroundColor: "#E50914" }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate(`/register`);
          }}
          className=" mx-2 duration-100 cursor-pointer px-8   border-[#E50914] text-[#E50914]      border-2      "
        >
          Register
        </button>
      </div>
    </div>
  );
}
