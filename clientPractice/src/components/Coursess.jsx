import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseState } from "../store/atom/course";
import { courseStateLoading, courseTitle } from "../store/selectors/course";

const Coursess = () => {
  const courseId = useParams();
  const setCourse = useSetRecoilState(courseState);
  const isCourseLoading = useRecoilValue(courseStateLoading);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/admin/course/${courseId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.course) {
          setCourse({ isLoading: false, course: res.data.course });
        } else {
          setCourse({ isLoading: false, course: res.data.course });
        }
      })
      .catch((e) => {
        setCourse({ isLoading: false, course: res.data.course });
      });
  }, []);
  if (isCourseLoading) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <div>
          {/* <h1>{courseTitle}</h1> */}
        </div>
      </>
    );
  }
};

export default Coursess;
