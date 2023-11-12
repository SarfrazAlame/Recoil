import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Courses from "../../admin-client/src/components/Courses";
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
