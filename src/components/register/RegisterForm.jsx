import React from 'react';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import TogglePwButton from './TogglePwButton';
const Yup = require("yup");


const registerFormValidationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(4, "Username is too short")
    .required("This field is required"),
  mail: Yup
    .string()
    .email()
    .required("This field is required"),
  password: Yup
    .string()
    .min(6, "Password is too short")
    .required("This field is required"),
  passwordConfirmation: Yup
    .string()
    .oneOf( [Yup.ref("password"), null], "Passwords don't match" )
    .required("This field is required")
});


const formInitialValues = {
  mail: "",
  username: "",
  password: "",
  passwordConfirmation: ""
};


const RegisterForm = (props) => {
  const [viewPassword, setViewPassword] = useState(false);

  const toggleViewPassword = () => {
    setViewPassword(!viewPassword)
  };

  const registerUser = async (values, actions) => {
    console.log("Form data", values)

    // post request to server - code here

    actions.resetForm(formInitialValues)
  }

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={registerUser}
      validationSchema={registerFormValidationSchema}
    >
      <Form>
        <FormInput label="Enter your email:" name="mail" type="text" />
        <FormInput label="Enter a new username:" name="username" type="text" />
        <FormInput label="Enter a new password:" name="password" type={ viewPassword ? "text" : "password" } />
        <FormInput label="Confirm your password:" name="passwordConfirmation" type={ viewPassword ? "text" : "password" } />
        <TogglePwButton viewPassword={ viewPassword } onClick={ toggleViewPassword } type="button" />
        <SubmitButton type="submit" />
      </Form>
    </Formik>
  );
}

export default RegisterForm;
