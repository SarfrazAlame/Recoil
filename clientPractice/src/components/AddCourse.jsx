import React, { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [imageLink, setImageLink] = useState("");

  const addCourseHandle = async () => {
    const response = await axios.post(
      "http://localhost:4000/admin/courses",
      {
        title,
        description,
        price,
        imageLink,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    alert("course added");
  };

  return (
    <div className="mx-56">
      <div className="my-3">
        <input
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded"
          type="text"
          placeholder="descrption"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded"
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded"
          type="text"
          placeholder="image"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        />
        <br />
        <button
          className="mt-2 border w-80 py-2 border-gray-600 my-4 rounded bg-blue-600 text-white"
          onClick={addCourseHandle}
        >
          Add Course
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
