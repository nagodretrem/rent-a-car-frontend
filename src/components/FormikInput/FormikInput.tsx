import { ErrorMessage, Field } from "formik";
import React from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

const FormikInput = (props: Props) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <Field
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        className="form-control"
      />
      <ErrorMessage name="title">
        {(message) => <span className="text-danger">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormikInput;
