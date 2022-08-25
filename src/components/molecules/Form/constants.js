import * as yup from 'yup';

export const FORM_INPUT_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
};

export const SINGLE_FORM_INPUT = {
  type: FORM_INPUT_TYPES.TEXT,
  value: "",
  placeholder: "",
  name: "",
  imageSource: null,
  validation: yup.string()
};

export const EXAMPLE_INPUTS = [
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
    placeholder: "Please enter your password",
    name: "password",
    imageSource: 'lock.png',
    validation: yup
      .string()
      .required("Password is required!")
      .min(8,'Your password should be 8 characters long or more!'),
  }
];