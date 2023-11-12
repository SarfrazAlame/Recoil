import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Signin = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin =  async() =>{
        const response = await axios.post("http://localhost:4000/admin/login",{
            username,
            password
        })
        const data = response.data
        localStorage.setItem("token", data.token)
        navigate("/")
    }

  return (
    <div className="mx-96">
      <h2 className="text-xl">Welcome to Coursera. Login below</h2>
      <div className="my-3">
        <input
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded"
          type="email"
          placeholder="email"
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />
        <br />
        <input
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded"
          type="password"
          placeholder="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin} className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded bg-blue-600 text-white">
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Signin;
