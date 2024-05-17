"use client"
import React, { useState } from "react";
import FormInput from "./_components/FormInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    std: null,
    sec: "",
    gender: "",
    dob: "",
    roll: "",
    admno: "",
    totAmt: null,
    pendingAmt:null
  });

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if form data is valid
   r
  
    console.log("Form Data: ", formData);
  
    const res = await fetch("api/newEntry", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
  
    if (success) {
      setFormData({
        fullname: "",
        std: null,
        sec: "",
        gender: "",
        dob: "",
        roll: "",
        admno: "",
        totAmt: null,
      });
    }
  };  

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <FormInput
          label="Full Name"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          placeholder="John Doe"
        />

        <FormInput
          label="Std"
          name="std"
          value={formData.std}
          onChange={handleInputChange}
          placeholder="Standard"
        />

        <FormInput
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          placeholder="Gender"
        />

        <FormInput
          label="Section"
          name="sec"
          value={formData.sec}
          onChange={handleInputChange}
          placeholder="Section"
        />

        <FormInput
          label="DOB"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          placeholder="Date of Birth"
        />

        <FormInput
          label="Roll No"
          name="roll"
          value={formData.roll}
          onChange={handleInputChange}
          placeholder="Roll Number"
        />

        <FormInput
          label="Admission No"
          name="admno"
          value={formData.admno}
          onChange={handleInputChange}
          placeholder="Admission Number"
        />
        <FormInput
          label="Total Fees"
          name="totAmt"
          value={formData.totAmt}
          onChange={handleInputChange}
          placeholder="Total Fees"
        />
         <FormInput
          label="Pending Amount"
          name="pendingAmt"
          value={formData.pendingAmt}
          onChange={handleInputChange}
          placeholder="Pending Amount"
        />

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((msg, index) => (
            <div
              key={index}
              className={`${success ? "text-green-800" : "text-red-600"
                } px-5 py-2`}
            >
              {msg}
            </div>
          ))}
      </div>
    </>
  );
}
