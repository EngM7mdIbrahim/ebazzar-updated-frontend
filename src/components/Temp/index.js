import React from "react";
import './styles.css'

export default function Temp({ style = {}, className = "" }) {
  return <div style={{ ...style }} className={`className ${className}`}>
Temp
  </div>;
}
