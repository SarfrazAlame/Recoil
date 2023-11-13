import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atom/user";
import { userEmailState } from "../store/selectors/userEmail";
import { isLoadingState } from "../store/selectors/isLoading";

const Landing = () => {
  const userEmail = useRecoilValue(userEmailState);
  const isLoading = useRecoilValue(isLoadingState);
  return (
    <div className="w-full flex  justify-around mt-14">
      <div>
        <div className="mt-12">
          <h1 className="text-5xl">Coursera Admin</h1>
          <p className="text-xl mt-2">A place to learn, earn and grow</p>
        </div>
        {!userEmail ? (
          <>
            <div className="mt-8 flex gap-5">
              <Link
                to={"/signup"}
                className="text-lg  bg-blue-600 text-white px-4 py-2"
              >
                SIGNUP
              </Link>
              <Link
                to={"/signin"}
                className="text-lg mx-4  bg-blue-600 text-white px-4 py-2"
              >
                SIGNIN
              </Link>
            </div>
          </>
        ) : null}
      </div>
      <img src="class.jpeg" alt="" width={"700px"} />
    </div>
  );
};

export default Landing;
