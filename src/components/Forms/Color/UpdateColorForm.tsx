import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { number, object, string } from 'yup';
import { AppDispatch } from '../../../store/configureStore';
import { UpdateColorRequest } from '../../../models/color/requests/updateColorRequest';
import { updateColor } from '../../../store/slices/colorSlice';

type Props = {}

const UpdateColorForm = (props: Props) => {
    const colorsState = useSelector((state:any)=> state.color);
    const dispatch = useDispatch<AppDispatch>();
    const [selectedBrand, setSelectedBrand] = useState<number | null>(null);

    const initialValues = {
        id: 0,
        name: "",
        code: "",
    };
   const validationSchema = object({
        id: number().required("Id zorunludur"),
        name: string().min(2,"Renk adı 2 karakterden küçük olamaz.").max(25,"Renk adı 25 karakterden büyük olamaz").required("Renk adı girmek zorunludur."),
        code: string().required("Renk kodu girmek zorunludur"),
    });
    const handleColorBrand = async (updateColorRequest: UpdateColorRequest, { resetForm }: FormikHelpers<UpdateColorRequest>) => {
        await dispatch(updateColor(updateColorRequest));
        resetForm();
    };
    
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleColorBrand}
  >
    {({ errors, touched }) => (
      <Form>
        <div className="mb-3">
          <label className="form-label">
            ID
          </label>
          <Field type="text" className={`form-control ${
                errors.id && touched.id ? "is-invalid" : ""
              }`} id="id" name="id" />
          <ErrorMessage name="id" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <Field
            type="text"
            name="name"
            className={`form-control ${
              errors.name && touched.name ? "is-invalid" : ""
            }`}
          />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Code
          </label> 
          <Field
            type="text"
            className={`form-control ${
              errors.code && touched.code ? "is-invalid" : ""
            }`}
            name="code"
          />
          <ErrorMessage
            name="code"
            component="div"
            className="text-danger"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => console.log("Button clicked")}
        >
            Update
        </button>
        
      </Form>
    )}
  </Formik>
  )
}

export default UpdateColorForm