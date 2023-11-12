import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coursess = () => {
  const [data, setData] = useState([]);
  const courseId = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/admin/course/${courseId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.course)
        setData(res.data.course);
      })
      .catch((e) => {
        setData(null)
      });
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
