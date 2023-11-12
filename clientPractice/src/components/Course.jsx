import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  const [course, setCourse] = useState([]);

  const getAllCourse = async () => {
    const response = await axios.get("http://localhost:4000/admin/course/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }); 
    setCourse(response.data.course);
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <div className="flex gap-5">
      {course.map((x) => (
        <div key={x._id} className="border h-44">
          <h1 className="text-2xl mt-4">{x.title}</h1>
          <p className="mt-3">{x.description}</p>
          <img className="mt-3" src={x.imageLink} alt="" />
          <Link to={`/course/${x._id}`} className="text-2xl mx-12 bg-blue-600 px-7 mt-4 rounded text-white">Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default Course;
