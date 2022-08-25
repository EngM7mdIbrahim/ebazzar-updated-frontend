import * as yup from "yup";

export const FORM_INPUT_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
  ICON_BUTON: "iconButton",
};

export const TEXT_FORM_INPUT_EXAMPLE = {
  type: FORM_INPUT_TYPES.TEXT,
  value: "",
  placeholder: "",
  name: "",
  imageSource: undefined,
  validation: yup.string(),
};

export const ICON_FORM_BUTTON_EXAMPLE = {
  type: FORM_INPUT_TYPES.ICON_BUTON,
  iconName: "info.png",
  onClick: () =>
    console.error("No on click hanler passed for this Icon Button - Form"),
  backgroundColor: undefined,
};

export const EXAMPLE_INPUTS = [
  {
    type: FORM_INPUT_TYPES.TEXT,
    value: "",
    placeholder: "Please enter your email",
    name: "email",
    imageSource: "email.png",
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
    imageSource: "lock.png",
    validation: yup
      .string()
      .required("Password is required!")
      .min(8, "Your password should be 8 characters long or more!"),
  },
  {
    type: FORM_INPUT_TYPES.ICON_BUTON,
    iconName: "google.png",
    onClick: () => {
      console.log("Google is clicked!");
    },
  },
  {
    type: FORM_INPUT_TYPES.ICON_BUTON,
    backgroundColor: '#4267B2',
    iconName: "facebook.png",
    onClick: () => {
      console.log("Info is clicked!");
    },
  },
  {
    type: FORM_INPUT_TYPES.ICON_BUTON,
    backgroundColor: '#444444',
    iconName: "apple.png",
    onClick: () => {
      console.log("Apple is clicked!");
    },
  }

];
