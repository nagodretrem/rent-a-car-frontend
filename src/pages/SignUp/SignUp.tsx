import React from "react";
import { Link } from "react-router-dom";
import { boolean, date, object, string } from "yup";
import { passwordValidator } from "../../utils/customValidations";
import { ErrorMessage, Field, Form, Formik } from "formik";

type Props = {};

const SignUp = (props: Props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    password: "",
    agreement: false,
  };
  const validationSchema = object({
    firstName: string().required("Adınızı giriniz"),
    lastName: string().required("Soyadınızı giriniz"),
    birthDate: date().required("Doğum tarihinizi giriniz"),
    phoneNumber: string().required("Cep telefon numaranızı giriniz"),
    email: string()
      .required("Email boş geçilemez")
      .email("Geçerli bir email adresi giriniz"),
    password: string()
      .required("Şifre boş geçilemez").min(3, "Şifre en az 3 karakter olmalıdır.")
			.max(50).test(
				"my-custom-rule",
				"En az 1 büyük, 1 küçük harf ve 1 rakam içermelidir.",
				passwordValidator,
			),
    agreement: boolean().oneOf([true],"Üyelik sözleşmesini kabul etmelisiniz"),
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
              <h2 className="fw-bold mb-5 text-white">Kayıt Olun</h2>
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
                            name="phoneNumber"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="phoneNumber"
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
                            Email
                          </label>
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label text-white">
                            Şifre
                          </label>
                          <Field
                            type="password"
                            name="password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <Field
                        className="form-check-input me-2"
                        type="checkbox"
                        name="agreement"
                      />
                      <label className="form-check-label text-white">
                        <Link to={""} className="text-white">
                          Üyelik sözleşmesini
                        </Link>{" "}
                        okudum kabul ediyorum.
                      </label>
                      <ErrorMessage
                        name="agreement"
                        component="div"
                        className="text-danger"
                      />
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

export default SignUp;
