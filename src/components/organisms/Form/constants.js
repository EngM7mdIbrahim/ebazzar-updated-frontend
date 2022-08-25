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
