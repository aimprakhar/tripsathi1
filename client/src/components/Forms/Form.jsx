import React, { useState } from 'react'
//  import { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import "./forms.css"
import axios from 'axios';

const Form =() => {
  
 


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const call = async(event) => {
    event.preventDefault();
   console.log(inputs);
   try{const res=await axios.post("http://localhost:8700/api/hotels",inputs);}
   catch(err){
        console.log("error found" );
        console.log(err );
   }
   
  }




  return (
    


    <>
    <form>
    <div className="form-control">
        <label htmlFor="name">Full Name</label>
        <input onChange={handleChange} id="name" name="name" type="text" />
    </div>
    <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input onChange={handleChange} id="email" name="email" type="text" />
    </div>
    <div className="form-control">
        <label htmlFor="message">Enter a Message</label>
        <input type="text" onChange={handleChange} id="message" name="message" rows="6" cols="65"></input>
    </div>
    <button onClick={call} className="btn" type="submit">Send</button>
</form>
</>
  )
}

export default Form