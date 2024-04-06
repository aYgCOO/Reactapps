/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container py-5 px-5 rounded border">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1">Enter Unique Id...</label>
          <input
            type="text"
            className="form-control"
            style={{ borderRadius: "100px" }}
            id="exampleFormControlInput1"
            placeholder="Enter Unique Id..."
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: "100px" }}>
          Submit
        </button>
      </div>
      <Link to="/Welcome">Next page..</Link>
    </form>
  );
};

export default Form;
