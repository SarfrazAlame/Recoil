import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";

const Header = () => {
  const userEmail = useRecoilValue(userEmailState)
  return (
    <div className="w-full h-16 flex justify-between items-center">
      <Link to={"/"} className="text-2xl mx-12 ">
        Coursera
      </Link>
      {userEmail ? (
        <>
          <div className="flex gap-5 mx-12">
            <Link to={"/addcourse"} className="text-xl text-blue-500">AddCourse</Link>
            <Link to={"/course"} className="text-xl text-blue-500">Course</Link>
            <button className="text-xl bg-blue-500 text-white px-2 py-1 "
            onClick={()=>{
              localStorage.clear("token")
              window.location("/")
              userAtom({
                isLoading:false,
                userEmail:null
              })
            }}
            >Logout</button>
          </div>
        </>
      ) : (
        <>
          {" "}
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
        </>
      )}
    </div>
  );
};

export default Header;
