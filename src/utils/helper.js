import { useEffect } from "react";
export const formatDate = (date) => {
  return date.toLocaleDateString("en-us");
};

export const formatMessages = (message) => {
  const newMessage = {
    emailError: message.includes("email") ? message : "",
    passwordError: message.includes("password") ? message : "",
    confirmPasswordError: message.includes("Confirm Password") ? message : "",
    usernameError: message.includes("username") ? message : "",
    errorMessage: message,
  };

  return newMessage;
};

