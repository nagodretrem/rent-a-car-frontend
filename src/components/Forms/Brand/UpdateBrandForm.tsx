import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";

type Props = {};

const UpdateBrandForm = (props: Props) => {
  const initialValues = {
    id: "",
    name: "",
    logoPath: "",
  };
  const validationSchema = object({
    name: string().required("Name is required"),
    logoPath: string().required("Kilometer is required"),
  });
  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="mb-3">
          <label className="form-label">
            ID
          </label>
          <Field type="text" className="form-control" id="id" name="id" />
          <ErrorMessage name="id" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <Field type="text" className="form-control" name="name" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="logopath" className="form-label">LogoPath</label>
          <Field type="text" className="form-control" name="logopath" />
          <ErrorMessage name="logopath" component="div" className="text-danger" />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Car
        </button>
      </Form>
    </Formik>
  );
};

export default UpdateBrandForm;
