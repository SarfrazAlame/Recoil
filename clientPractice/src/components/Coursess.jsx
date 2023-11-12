import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coursess = () => {
  const [data, setData] = useState([]);
  const courseId = useParams();
  const fetchDataById = async () => {
    const response = await axios.get(
      `http://localhost:4000/admin/course/${courseId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log(response.data.course);
    setData(response.data.course);
  };

  useEffect(() => {
    fetchDataById();
  }, []);
  return (
    <div>
      {data.map((y) => (
        <div>
          <h1>{y.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Coursess;
