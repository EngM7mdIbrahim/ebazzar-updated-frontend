import React from "react";
import './styles.css'

export default function DashboardTemplate({  style = {}, className = "" }) {
  return <div style={{ ...style }} className={`className ${className}`}>
  
  </div>;
}
