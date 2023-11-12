import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center">
      <Link to={"/"} className="text-2xl mx-12 ">
        Coursera
      </Link>
      <div>
        <Link
          to={"/signup"}
          className="text-lg mx-4 bg-blue-600 text-white px-4 py-2"
        >
          SIGNUP
        </Link>
        <Link
          to={"/signin"}
          className="text-lg mx-4 bg-blue-600 text-white px-4 py-2"
        >
          SIGNIN
        </Link>
      </div>
    </div>
  );
};

export default Header;
