import React,  { useState } from 'react';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';

function Form() {

    const [name, setName] = useState('');
    const [uuid, setUuid] = useState('');
  
const { v4: uuidv4 } = require('uuid');

const handleFormSubmit = (e) => {
// Preventing the default behavior of the form submit 
e.preventDefault();  
// Getting the value and name of the input which triggered the change
const { target } = e;
const inputType = target.name;
const inputValue = target.value;

// use input to save
if (inputType === 'name') {
    setName(inputValue);
    setUuid(uuidv4());
}  
}

return(
    <div class="container">
    <form> 
        <div class="row instructions text-left">
            <div class='col-sm-2 d-flex justify-content-between'>
            
            </div>
            <div class='col-sm-10 d-flex justify-content-between'>
            <label>Please enter your name below:</label>
            </div>
        </div>     
        <div class="row">
            <div class="col-sm-2 label-font">
                <label for="name" class="label-font name" value="name" >Name:</label>
            </div>
            <div class="col-sm-5">
                <div class="row">
                   <input
                    // value={name}
                    name="name"
                    type="text"
                    onChange={handleFormSubmit} 
                    class="form-control" 
                    id="name" 
                    placeholder="Type your name here (with no spaces)">
                   </input>
                </div>
                <div class="row">
                        <button name ="button" type="submit" class="btn-success btn-lg"  onSubmit={handleFormSubmit}>Submit</button>
                </div>
            </div>
        </div>
        <div class="row">
             <div class="col-sm-2 label-font">
                <label for="result" class="label-font" >Result:</label>
            </div>
            <div class="col-sm-10 result-output">
                <label value={name} for="name-uuid" class="result-output">{name}: {uuid}</label>
            </div>
        </div>
    </form>
</div>
)
}

export default Form;