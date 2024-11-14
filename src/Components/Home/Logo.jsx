import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ width = "60px", height = "60px" }) => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" style={{ width, height }} />
        <p className="font-[600] text-xl text-[#23C1C1]">
          Zero <span className="text-black font-[500]">Sugar</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
