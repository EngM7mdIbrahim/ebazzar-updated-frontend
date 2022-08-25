import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import * as yup from "yup";
import IconButton from "../../atoms/IconButton";
import TextInput from "../TextInput";
import { FORM_INPUT_TYPES, ICON_FORM_BUTTON_EXAMPLE, TEXT_FORM_INPUT_EXAMPLE } from "./constants";

//Inputs

export const getInput = (input, desiredTypes=[input.type]) => {
  if(!desiredTypes.includes(input.type)){
    return null;
  }
  let result = {};
  switch (input.type) {
    case FORM_INPUT_TYPES.ICON_BUTON:
      result = getIconButton(input);
      break;  
    default:
      result = getTextInput(input);
      break;
  }
  return result;
};

export const getTextInput = (input) => {
  return (
    <TextInput
      key={input.name}
      value={input.value}
      label={input.label}
      name={input.name}
      errorMessage={input.errorMessage}
      placeholder={input.placeholder || TEXT_FORM_INPUT_EXAMPLE.placeholder}
      imageSource={input.imageSource || TEXT_FORM_INPUT_EXAMPLE.imageSource}
      onChange={input.onChange}
      onBlur={input.onBlur}
      isPassword={input.type === FORM_INPUT_TYPES.PASSWORD}
    />
  );
};

export const getIconButton = (input) => {
  return (
    <IconButton
      key={nanoid()}
      backgroundColor={input.backgroundColor || ICON_FORM_BUTTON_EXAMPLE.backgroundColor}
      iconName={input.iconName || ICON_FORM_BUTTON_EXAMPLE.icon}
      onClick={input.onClick || ICON_FORM_BUTTON_EXAMPLE.onClick}
    />
  );
};

export const constructValidationSchema = (inputs) => {
  let validationSchema = {};
  inputs.forEach((input) => {
    validationSchema[input.name] =
      input.validation || TEXT_FORM_INPUT_EXAMPLE.validation;
  });
  return yup.object(validationSchema);
};

export const getInitialValues = (inputs) => {
  let initialValues = {};
  inputs.forEach((input) => {
    initialValues[input.name] = input.value;
  });
  return initialValues;
};
