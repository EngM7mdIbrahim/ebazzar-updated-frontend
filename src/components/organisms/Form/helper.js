import React from "react";
import * as yup from "yup";
import TextInput from "../../molecules/TextInput";
import { FORM_INPUT_TYPES, SINGLE_FORM_INPUT } from "./constants";

//Inputs
export const getInput = (input) => {
  let result = {};
  switch (input.type) {
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
      placeholder={input.placeholder || SINGLE_FORM_INPUT.placeholder}
      imageSource={input.imageSource || SINGLE_FORM_INPUT.imageSource}
      onChange={input.onChange}
      onBlur={input.onBlur}
      isPassword={input.type === FORM_INPUT_TYPES.PASSWORD}
    />
  );
};

export const constructValidationSchema = (inputs) => {
  let validationSchema = {};
  inputs.forEach((input) => {
    validationSchema[input.name] =
      input.validation || SINGLE_FORM_INPUT.validation;
  });
  console.log(validationSchema);
  return yup.object(validationSchema);
};

export const getInitialValues = (inputs) => {
  let initialValues = {};
  inputs.forEach((input) => {
    initialValues[input.name] = input.value;
  });
  return initialValues;
};
