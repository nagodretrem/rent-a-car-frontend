import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { number, object, string } from 'yup';
import { AppDispatch } from '../../../store/configureStore';
import { fetchModels } from '../../../store/slices/modelSlice';
import { fetchColors } from '../../../store/slices/colorSlice';

type Props = {}

const UpdateCarForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const modelsState= useSelector((state:any)=>state.model);
  const colorsState=useSelector((state:any)=>state.color);

  

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);
  const initialValues = {
    id:0,
    plate: '',
    kilometer: 0,
    dailyPrice: 0,
    modelYear: 0,
    minFindeksRate: 0,
    imagePath: '',
    modelId: 0,
    colorId: 0,
  };
  const validationSchema = object({
    id:number().required("Id is required"),
    plate: string().matches(
      /^(0[1-9]|[1-7][0-9]|8[01])((\s?[a-zA-Z]\s?)(\d{4,5})|(\s?[a-zA-Z]{2}\s?)(\d{3,4})|(\s?[a-zA-Z]{3}\s?)(\d{2,3}))/,
      'Invalid plate number'
    ).required('Plate is required'),
    kilometer: number().min(0,"Car kilometer can not be less than 0").required('Kilometer is required'),
    dailyPrice: number().min(0,"Daily price can not be less than 0").required('Daily Price is required'),
    minFindeksRate: number().required('Min. Findeks Rate is required'),
    imagePath:string().required("Imagepath is required"),
    modelYear: number().min(2005,"Model year can not be less than 2005!").max(2024,"Model year can not be greater than 2024!").required('Model Year is required'),
    modelId: number().required("Model is required"),
    colorId: number().required("Color is required"),


  });

  const handleUpdateCar = ()=>{};
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleUpdateCar}>
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
            <label htmlFor="plate" className="form-label">
              Plate
            </label>
            <Field
              type="text"
              name="plate"
              className={`form-control ${
                errors.plate && touched.plate ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage name="plate" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="kilometer" className="form-label">
            Kilometer
            </label>
            <Field
              type="number"
              name="kilometer"
              className={`form-control ${
                errors.kilometer && touched.kilometer ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage name="kilometer" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="dailyPrice" className="form-label">
            dailyPrice
            </label>
            <Field
              type="number"
              name="dailyPrice"
              className={`form-control ${
                errors.dailyPrice && touched.dailyPrice ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage name="dailyPrice" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="minFindeksRate" className="form-label">
            minFindeksRate
            </label>
            <Field
              type="number"
              name="minFindeksRate"
              className={`form-control ${
                errors.minFindeksRate && touched.minFindeksRate ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage name="minFindeksRate" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="modelYear" className="form-label">
            modelYear
            </label>
            <Field
              type="number"
              name="modelYear"
              className={`form-control ${
                errors.modelYear && touched.modelYear ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage name="modelYear" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="imagePath" className="form-label">
            imagePath
            </label>
            <Field
              type="text"
              name="imagePath"
              className={`form-control ${
                errors.imagePath && touched.imagePath ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage name="imagePath" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="colorId" className="form-label">
              Color
            </label>{""}
            <Field as="select" name="colorId">
              <option value="">Renk seçin</option>
              {colorsState.colors.map((color: any) => (
              <option key={color.id} value={color.id}>
                {color.name}
              </option>
            ))}
            </Field>
            <ErrorMessage
              name="colorId"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="modelId" className="form-label">
              Model
            </label>{""}
            <Field as="select" name="modelId">
              <option value="">Model seçin</option>
              {modelsState.models.map((model: any) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
            </Field>
            <ErrorMessage
              name="modelId"
              component="div"
              className="text-danger"
            />
          </div>
       
       
       
       
        <button type="submit" className="btn btn-primary">Update Car</button>
      </Form>
        )}
    </Formik>
  )
}

export default UpdateCarForm