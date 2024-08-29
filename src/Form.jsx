import React from "react";
import './Form.css';

function From() {
return (
    <>
    <div className="muskan">
        <h1 className="m"><b> AvionHealth </b></h1>
        <h2>Prescription Refill Form</h2>
        <div>
        <label>Patient Name:</label><input type="text" placeholder="First Name"></input></div>
        
        <div>   
        <label>Last Name:</label><input type="text" placeholder="Last Name"></input>
        <br></br></div>

        <label className="v">Patient Date of Birth</label>
        <input type="date" placeholder="Month"></input><br></br>

        <label>Contact Email Address</label><input type="text" placeholder="enter email"></input>
    </div>
    </>
)
}


export default From;