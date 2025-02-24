import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { number, object, string } from "yup";
import { AppDispatch } from "../../../store/configureStore";
import { fetchModels } from "../../../store/slices/modelSlice";
import { fetchColors } from "../../../store/slices/colorSlice";
import { UpdateCarRequest } from "../../../models/cars/requests/updateCarRequest";
import { fetchCars, updateCar } from "../../../store/slices/carSlice";
import {
  Available,
  CarType,
  FuelType,
  TransmissionType,
} from "../../../models/cars/requests/addCarRequest";
import { GetAllCarResponse } from "../../../models/cars/response/getAllCarResponse";

type Props = {
  selectedCarId: number | null;
};

const UpdateCarForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const modelsState = useSelector((state: any) => state.model);
  const colorsState = useSelector((state: any) => state.color);
  const carsState = useSelector((state: any) => state.car);

  const selectedCar = props.selectedCarId
    ? carsState.cars.find(
        (car: GetAllCarResponse) => car.id === props.selectedCarId
      )
    : null;

  const enumValues = <T extends Record<keyof T, string | number>>(e: T) =>
    Object.keys(e)
      .filter((k) => typeof e[k as keyof T] === "string")
      .map((k) => e[k as keyof T]) as unknown as T[keyof T][];

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);

  const initialValues = {
    id: selectedCar?.id || 0,
    plate: selectedCar?.plate || "",
    kilometer: selectedCar?.kilometer || 0,
    dailyPrice: selectedCar?.dailyPrice || 0,
    modelYear: selectedCar?.modelYear || 0,
    minFindeksRate: selectedCar?.minFindeksRate || 0,
    imagePath: selectedCar?.imagePath || "",
    modelId: selectedCar?.model_id || 0,
    colorId: selectedCar?.color_id || 0,
    carType: selectedCar?.carType || CarType.ECOHATCHBACK,
    fuelType: selectedCar?.fuelType || FuelType.DIESEL,
    transmissionType:selectedCar?.transmissionType || TransmissionType.AUTOMATIC,
    available: selectedCar?.available || Available.NO,  };
  const validationSchema = object({
    id: number().required("Id is required"),
    plate: string()
      .matches(
        /^(0[1-9]|[1-7][0-9]|8[01])((\s?[a-zA-Z]\s?)(\d{4,5})|(\s?[a-zA-Z]{2}\s?)(\d{3,4})|(\s?[a-zA-Z]{3}\s?)(\d{2,3}))/,
        "Invalid plate number"
      )
      .required("Plate is required"),
    kilometer: number()
      .min(0, "Car kilometer can not be less than 0")
      .required("Kilometer is required"),
    dailyPrice: number()
      .min(0, "Daily price can not be less than 0")
      .required("Daily Price is required"),
    minFindeksRate: number().required("Min. Findeks Rate is required"),
    imagePath: string().required("Imagepath is required"),
    modelYear: number()
      .min(2005, "Model year can not be less than 2005!")
      .max(2024, "Model year can not be greater than 2024!")
      .required("Model Year is required"),
    modelId: number().required("Model is required"),
    colorId: number().required("Color is required"),
  });

  const handleUpdateCar = async (
    updateCarRequest: UpdateCarRequest,
    { resetForm }: FormikHelpers<UpdateCarRequest>
  ) => {
    await dispatch(updateCar(updateCarRequest));
    dispatch(fetchCars());
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleUpdateCar}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-3">
            <label className="form-label">ID</label>
            <Field
              type="text"
              className={`form-control ${
                errors.id && touched.id ? "is-invalid" : ""
              }`}
              id="id"
              name="id"
            />
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
            <ErrorMessage
              name="plate"
              component="div"
              className="text-danger"
            />
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
            <ErrorMessage
              name="kilometer"
              component="div"
              className="text-danger"
            />
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
            <ErrorMessage
              name="dailyPrice"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="minFindeksRate" className="form-label">
              minFindeksRate
            </label>
            <Field
              type="number"
              name="minFindeksRate"
              className={`form-control ${
                errors.minFindeksRate && touched.minFindeksRate
                  ? "is-invalid"
                  : ""
              }`}
            />
            <ErrorMessage
              name="minFindeksRate"
              component="div"
              className="text-danger"
            />
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
            <ErrorMessage
              name="modelYear"
              component="div"
              className="text-danger"
            />
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
            <ErrorMessage
              name="imagePath"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="colorId" className="form-label">
              Color
            </label>
            {""}
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
            </label>
            {""}
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
          <div className="mb-3">
            <label htmlFor="fuelType" className="form-label">
              Yakıt Tipi
            </label>
            {""}
            <Field
              as="select"
              name="fuelType"
              className="form-select"
              value={initialValues.fuelType}
            >
              {enumValues(FuelType).map((fuelType: FuelType) => (
                <option key={fuelType} value={fuelType}>
                  {fuelType === FuelType.DIESEL ? "Dizel" : "Benzin"}
                </option>
              ))}
            </Field>

            <ErrorMessage
              name="fuelType"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="transmissionType" className="form-label">
              Yakıt Tipi
            </label>
            {""}
            <Field
              as="select"
              name="transmissionType"
              className="form-select"
              value={initialValues.transmissionType}
            >
              {enumValues(TransmissionType).map(
                (transmissionType: TransmissionType) => (
                  <option key={transmissionType} value={transmissionType}>
                    {transmissionType === TransmissionType.AUTOMATIC
                      ? "Otomatik"
                      : "Manuel"}
                  </option>
                )
              )}
            </Field>
            <ErrorMessage
              name="transmissionType"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carType" className="form-label">
              Araç Tipi
            </label>
            {""}
            <Field
              as="select"
              name="carType"
              className="form-select"
              value={initialValues.carType}
            >
              {enumValues(CarType).map((carType: CarType) => (
                <option key={carType} value={carType}>
                  {carType}
                </option>
              ))}
            </Field>

            <ErrorMessage
              name="carType"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="available" className="form-label">
            Araç müsait mi?
            </label>
            {""}
            <Field as="select" name="available" className="form-select">
              <option value="">Araç durumu seçin</option>

              {enumValues(Available).map((available: Available) => (
                <option key={available} value={available}>
                  {available}
                </option>
              ))}
            </Field>

            <ErrorMessage
              name="available"
              component="div"
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update Car
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateCarForm;
