import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { date, object, string } from "yup";
import { getClaims } from "../../store/slices/tokenSlice";

type Props = {};

const Profile = (props: Props) => {
  const dispatch = useDispatch();
  const claims = useSelector((state: any) => state.token.claims);

  const handleGetClaims = () => {
    dispatch(getClaims());
  };

  // claims && claims.id
  console.log(claims && claims.id);

  const initialValues = {
    firstName: "",
    lastName: "",
    birthDate: "",
    nationalityId: "",
    gsm: "",
  };
  const validationSchema = object({
    firstName: string().required("Adınızı giriniz"),
    lastName: string().required("Soyadınızı giriniz"),
    nationalityId: string()
      .required("Tc no zorunludur")
      .matches(/^\d{11}$/, "NationalityId must be a 11-digit number."),
    birthDate: date().required("Doğum tarihinizi giriniz"),
    gsm: string()
      .required("Cep telefon numaranızı giriniz")
      .matches(/^05\d{9}$/, "Gsm must be a valid number. Like 05xxxxxxxxx"),
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
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5 text-white">Profil</h2>
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
                            Adınız
                          </label>
                          <Field
                            type="text"
                            name="firstName"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label text-white">
                            Soyadınız
                          </label>
                          <Field
                            type="text"
                            name="lastName"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label text-white">
                            Doğum Tarihi
                          </label>
                          <Field
                            type="date"
                            name="birthDate"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="birthDate"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label text-white">
                            Cep Telefonu
                          </label>
                          <Field
                            type="tel"
                            name="gsm"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="gsm"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label text-white">
                          TC Kimlik Numarası
                        </label>
                        <Field
                          type="text"
                          name="nationalId"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="nationalId"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Kayıt Ol
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

export default Profile;
