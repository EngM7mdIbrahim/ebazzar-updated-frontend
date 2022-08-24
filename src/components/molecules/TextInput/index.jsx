import React from "react";
import "./styles.css";
import { ALERT, GRAY_LIGHT, SECONDARY } from "../../../styles/colors";

import TextBox from "../../atoms/TextBox/";
import AppLabel, { TYPES as LABEL_TYPES } from "../../atoms/AppLabel";
import Image, { TYPES } from "../../atoms/Image/";

export default function TextInput({
  value = "",
  onChange = (newValue) => {
    console.error("No onChange handler! - TIM", newValue);
  },
  placeholder = "No paceholder here! - TIM",
  label = "No label here! - TIM",
  imageSource = "",
  errorMessage = "No error message here! - TIM",
  isPassword = false,
  style = {},
  className = "",
}) {
  return (
    <div className={`text-input-cont ${className}`} style={{ ...style }}>
      {label !== "" && (
        <AppLabel isBold type={LABEL_TYPES.PAR}>
          {label}
        </AppLabel>
      )}
      <div style={{backgroundColor: SECONDARY}} className="text-input-box-cont">
        <Image
          imageName={imageSource === "" ? undefined : imageSource}
          type={TYPES.ALMOSTTINY}
        />
        <TextBox
          isPassword={isPassword}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      <AppLabel  style={{ color: ALERT }} type={LABEL_TYPES.TINY}>
        {errorMessage}
      </AppLabel>
    </div>
  );
}
