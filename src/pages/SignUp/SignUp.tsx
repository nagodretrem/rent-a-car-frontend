import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { boolean, object, ref, string } from 'yup';
import { passwordValidator } from '../../utils/customValidations';
import { Link, useNavigate } from 'react-router-dom';
import { signupRequest } from '../../models/signup/requests/signupRequest';
import signupService from '../../services/signupService';

type Props = {}

const SignUp = (props: Props) => {
  const initialValues = {
    email: "",
    password: "",
    confirmpassword:"",
    agreement: false,
  };

  const validationSchema = object({
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
      confirmpassword: string().required("Şifre doğrulama boş geçilemez")
      .oneOf([ref("password")],"Şifreler eşleşmiyor"),
      agreement: boolean().oneOf([true],"Üyelik sözleşmesini kabul etmelisiniz"),

  });
  const navigate = useNavigate();

  const onSubmit = (values: signupRequest) => {
    const { email, password } = values;
    const postData: signupRequest = {
      email: email,
      password: password,
    };
    signupService.signup(postData).then((response) =>{
      console.log(response.data);
      navigate("/login")
    })
  };

  return (
    <div className="gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h4 className="fw-bold mb-2 ">Kayıt Olun</h4>
                <hr />

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form> 
                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        
                        
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Şifre</label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Şifreyi tekrar girin</label>
                      <Field
                        type="password"
                        name="confirmpassword"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="confirmpassword"
                        component="div"
                        className="text-danger"
                      />
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
                      className="btn btn-outline-light btn-lg px-5"
                    >
                      Kayıt Ol
                    </button>
                    
                  </Form>
                </Formik>

               
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp


  
  
  

   


