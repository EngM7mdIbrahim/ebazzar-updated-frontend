import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import {
  constructValidationSchema,
  getInitialValues,
  getInput,
} from "./helper";
import "./styles.css";
import Button  from '../../atoms/Button';
import { FORM_INPUT_TYPES } from "./constants";
import { SECONDARY } from "../../../styles/colors";

const EXAMPLE_INPUTS = [
  {
    type: FORM_INPUT_TYPES.TEXT,
    value: "",
    placeholder: "Please enter your email",
    name: "email",
    imageSource: 'email.png',
    validation: yup
      .string()
      .required("Email is required!")
      .email("You should enter a valid email!"),
  },
  {
    type: FORM_INPUT_TYPES.PASSWORD,
    value: "",
    placeholder: "Please enter a valid email",
    name: "password",
    imageSource: 'lock.png',
    validation: yup
      .string()
      .required("Password is required!")
      .min(8,'Your password should be 8 characters long or more!'),
  },
];

export default function LoginForm({
  style = {},
  className = "",
  showLabels = false,
  inputs = EXAMPLE_INPUTS,
  onSubmit = (newData) =>
    console.error("No on submit handler - LoginForm", newData),
}) {
  const formik = useFormik({
    initialValues: getInitialValues(inputs),
    validationSchema: constructValidationSchema(inputs),
    onSubmit,
  });

  return (
    <div style={{ backgroundColor: SECONDARY, ...style }} className={`card login-form-temp ${className}`}>
      {inputs.map((input) => {
        input.value = formik.values[input.name];
        input.errorMessage =
          formik.touched[input.name] && formik.errors[input.name]
            ? formik.errors[input.name]
            : "";
        input.onChange = formik.handleChange;
        input.onBlur = formik.handleBlur;
        input.label = showLabels ? input.name.charAt(0).toUpperCase() + input.name.slice(1):null;
        return getInput(input);
      })}
      <Button onClick={formik.handleSubmit}>Submit!</Button>
    </div>
  );
}
