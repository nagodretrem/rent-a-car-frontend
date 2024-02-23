import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { date, object } from "yup";
import { GetAllCarResponse } from "../../models/cars/response/getAllCarResponse";

type Props = {};

const RentComponent = (props: Props) => {
  const carsState = useSelector((state: any) => state.car);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/rentalconfirm");
  };
  const initialValues = {
    startDate: "",
    endDate: "",
    carId: 0,
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  <span>Brand</span>
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
