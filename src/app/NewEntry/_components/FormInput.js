// FormInput.js
import React from "react";

export default function FormInput({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
