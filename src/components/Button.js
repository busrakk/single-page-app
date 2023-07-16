import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <button
      target="_blank"
      rel="noreferrer"
      className="inline-block text-[#fff] outline-none border-none bg-[#202020] text-fontsm py-3.5 px-10 rounded-full cursor-pointer transition-all duration-200 ease-linear hover:scale-90 relative"
    >
      <Link
        to={link}
        className="after:content-none after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:w-full after:h-full after:rounded-lg after:transition-all after:duration-200 after:ease-in-out after:border-2 after:border-solid after:bg-red-500 hover:after:transform hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:scale-100 hover:after:p-1"
      >
        {text}
      </Link>
    </button>
  );
};

export default Button;
