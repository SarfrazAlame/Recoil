import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseState } from "../store/atom/course";
import {
  courseDescription,
  courseStateLoading,
  courseTitle,
} from "../store/selectors/course";

const Coursess = () => {
  const courseId = useParams();
  const setCourse = useSetRecoilState(courseState);
  const isCourseLoading = useRecoilValue(courseStateLoading);
  const title = useRecoilValue(courseTitle);
  const description = useRecoilValue(courseDescription);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/admin/course/${courseId}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.course);
        setCourse({ isLoading: false, course: res.data.course });
      })
      .catch((e) => {
        setCourse({ isLoading: false, course: null });
      });
  }, []);
  if (isCourseLoading) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <div>
          <h1>{description}</h1>
        </div>
      </>
    );
  }
};

export default Coursess;
