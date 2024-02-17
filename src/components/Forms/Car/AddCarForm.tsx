import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { number, object, string } from 'yup';

type Props = {}

const AddCarForm = (props: Props) => {
  const initialValues = {
    plate: '',
    kilometer: '',
    dailyprice: '',
    minfindeksrate: '',
    modelyear: '',
    model: '',
    brand: '',
    color: ''
  };
  const validationSchema = object({
    plate: string().required('Plate is required'),
    kilometer: string().required('Kilometer is required'),
    dailyprice: string().required('Daily Price is required'),
    minfindeksrate: number().required('Min. Findeks Rate is required'),
    modelyear: number().required('Model Year is required'),
    model: string().required('Model is required'),
    brand: string().required('Brand is required'),
    color: string().required('Color is required')
  });

  const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div className="mb-3">
          <label htmlFor="plate" className="form-label">Plate</label>
          <Field type="text" className="form-control" name="plate" />
          <ErrorMessage name="plate" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="kilometer" className="form-label">Kilometer</label>
          <Field type="text" className="form-control" name="kilometer" />
          <ErrorMessage name="kilometer" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="dailyprice" className="form-label">Daily Price</label>
          <Field type="text" className="form-control" name="dailyprice" />
          <ErrorMessage name="dailyprice" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="minfindeksrate" className="form-label">Min. Findeks Rate</label>
          <Field type="number" className="form-control" name="minfindeksrate" />
          <ErrorMessage name="minfindeksrate" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="modelyear" className="form-label">Model Year</label>
          <Field type="number" className="form-control" name="modelyear" />
          <ErrorMessage name="modelyear" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">Model</label>
          <Field type="text" className="form-control" name="model" />
          <ErrorMessage name="model" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Brand</label>
          <Field type="text" className="form-control" name="brand" />
          <ErrorMessage name="brand" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">Color</label>
          <Field type="text" className="form-control" name="color" />
          <ErrorMessage name="color" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary">Add Car</button>
      </Form>
    </Formik>
  )
}

export default AddCarForm