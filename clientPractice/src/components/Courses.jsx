import React, { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [course, setCourse] = useState([]);

  const getAllCourse = async () => {
    const response = await axios.get("http://localhost:4000/admin/courses/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    });
    setCourse(response.data.course);
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <div>
      {course.map((x) => (
        <h1>{x.title}</h1>
      ))}
    </div>
  );
};

export default Course;
