import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const SignUp = (props: Props) => {
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
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                        <label className="form-label text-white">
                        Adınız
                      </label>
                      <input type="text" className="form-control" />
                      
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label text-white">Soyadınız</label>
                      <input type="text" className="form-control" />
                      
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                        <label className="form-label text-white">
                        Doğum Tarihi
                      </label>
                      <input type="date" className="form-control" />
                      
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label text-white">Cep Telefonu</label>
                      <input type="tel" className="form-control" />
                      
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                        <label className="form-label text-white">
                        Email
                      </label>
                      <input type="email" className="form-control" />
                      
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label text-white">Şifre</label>
                      <input type="password" className="form-control" />
                      
                    </div>
                  </div>
                </div>

              

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    
                  />
                  <label className="form-check-label text-white">
                    <Link to={""} className="text-white">Üyelik sözleşmesini</Link> okudum kabul ediyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Kayıt Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
