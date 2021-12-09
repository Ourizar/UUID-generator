import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [uuid, setUuid] = useState("");

  const { v4: uuidv4 } = require("uuid");

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // use input to save
    if (inputType === "name") {
      setName(inputValue);
      setUuid(uuidv4());
    }
  };

  return (
    <div className="container">
      <form>
        <div className="row instructions text-left">
          <div className="col-sm-2 d-flex justify-content-between"></div>
          <div className="col-sm-10 d-flex justify-content-between">
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
                type="text"
                onChange={handleFormSubmit}
                className="form-control"
                id="name"
                placeholder="Type your name here (with no spaces)"
              ></input>
            </div>
            <div className="row">
              <button
                name="button"
                type="submit"
                className="btn-success btn-lg"
                onSubmit={handleFormSubmit}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 label-font">
            <label className="label-font">
              Result:
            </label>
          </div>
          <div className="col-sm-10 result-output">
            <label value={name} className="result-output">
              {name}: {uuid}
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
