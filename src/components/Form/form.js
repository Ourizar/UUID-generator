// ************Using function components*************
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [uuid, setUuid] = useState("");

  const handleSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // Getting the value and name of the input which triggered the change
    const inputValue = e.target.name.value;

    // use input to save
    setName(inputValue);
    setUuid(uuidv4());
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row instructions text-left">
          <div className=" col-sm-2 d-flex justify-content-between"></div>
          <div className=" col-sm-10 d-flex justify-content-between">
            <label>Please enter your name below:</label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 label-font">
            <label className="label-font name" value="name">
              Name:
            </label>
          </div>
          <div className="col-sm-5">
            <div className="row">
              <input
                name="name"
                type="name"
                className="form-control"
                placeholder="Type your name here"
              ></input>
            </div>
            <div className="row">
              <button type="submit" className="btn-success btn-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="row">
        <div className=" col-sm-2 label-font">
          <label className="label-font">Result:</label>
        </div>
        <div className=" col-sm-10 result-output">
          <label className="result-output">
            {name}: {uuid}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Form;
