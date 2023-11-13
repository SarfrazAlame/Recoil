import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Course from "./components/Course";
import Coursess from "./components/Coursess";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userAtom } from "./store/atom/atom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:courseId" element={<Coursess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

async function getAdmin() {
  const setuser = useSetRecoilState(userAtom);
  const response = await axios.get("http://localhost:4000/admin/me", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  if (response.data.username) {
    setuser({ isLoading: false, userEmail: response.data.username });
  } else {
    setuser({ isLoading: true, userEmail: null });
  }

  useEffect(() => {
    getAdmin();
  }, []);
  return <></>;
}

export default App;
