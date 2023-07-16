import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="font-logo text-[64px] transition-all duration-200 ease-linear hover:scale-110">
      <Link to="/">B.</Link>
    </div>
  );
};

export default Logo;
