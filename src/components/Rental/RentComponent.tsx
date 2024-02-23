import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { date, object } from "yup";
import { GetByIdCarResponse } from "../../models/cars/response/getByIdCarResponse";
import { getByIdCar } from "../../store/slices/carSlice";

type Props = {};

const RentComponent = (props: Props) => {
  const { carId } = useParams();
  const dispatch = useDispatch();

  const cars = useSelector((state: any) => state.car.cars);
  const carIdInt = carId ? parseInt(carId) : undefined;
  const car = cars.find((car: any) => car.id === carIdInt);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/profile");
  };

  console.log("Car id:", carId);

  const initialValues = {
    startDate: "",
    endDate: "",
    carId: carId ? parseInt(carId) : 0,
    userId: 0,
  };

  const validationSchema = object({
    startDate: date().required("Kiralama tarihinizi giriniz"),
    endDate: date().required("Teslim tarihini girin"),
  });

  const handleSubmit = () => {};

  return (
    <div className="text-center">
      <div
        className="card mx-4 mx-md-5 mt-5 mb-5 shadow-5-strong"
        style={{
          background: "hsla(0, 0%, 10%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="card" style={{ width: "25rem" }}>
              <img
                className="card-img-top"
                src="https://megarentacar.com/tema/genel/uploads/araclar/renault-clio-hb_1.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{car && car.dailyPrice}</h5>
                <p className="card-text">
                  <span>Model Year: {car && car.modelYear}</span>
                  <br />
                  <span>Plate: {car && car.plate}</span>
                  <br />
                  <span>Kilometer: {car && car.kilometer}</span>
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, handleSubmit }) => (
                  <Form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label text-white">
                            Car ID
                          </label>
                          <Field
                            type="text"
                            name="carId"
                            className="form-control"
                            value={initialValues.carId}
                          />
                        </div>
                        <div className="form-outline">
                          <label className="form-label text-white">
                            Başlangıç Tarihi
                          </label>
                          <Field
                            type="date"
                            name="startDate"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="startDate"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label text-white">
                            Teslim Tarihi
                          </label>
                          <Field
                            type="date"
                            name="endDate"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="endDate"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      style={{ width: "50%" }}
                      onClick={handleNavigate}
                    >
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentComponent;
