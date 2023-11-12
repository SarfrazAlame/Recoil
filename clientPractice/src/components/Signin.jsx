import React from "react";

const Signin = () => {
  return (
    <div className="mx-96">
      <h2 className="text-xl">Welcome to Coursera. Login below</h2>
      <div className="my-3">
        <input
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded"
          type="email"
          placeholder="email"
        />
        <br />
        <input
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded"
          type="password"
          placeholder="password"
        />
        <br />
        <button className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded bg-blue-600 text-white">
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Signin;
