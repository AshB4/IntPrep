import React from "react";

export default BetterInput = ({ label, value, onChange, type = "text", placeholder = "" }) => {

  return (
    <div className="better-input" aria-label="Input">
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-field"
        />
      </label>
    </div>
  );
}