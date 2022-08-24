import React from "react";
import "./styles.css";

export default function TextBox({
  value = "",
  placeholder = "No paceholder here - TBA",
  onChange = (newValue) => {
    console.error("No on change handler - TBA", newValue);
  },
  style={},
  className = "",
  isPassword = false
}) {
  return (
    <input
      className={`${className}`}
      style={{...style}}
      type={isPassword ? 'password' : 'text'}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
}
