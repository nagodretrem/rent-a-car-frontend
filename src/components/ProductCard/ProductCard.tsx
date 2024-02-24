import React, { useEffect, useState } from "react";
import { ProductModel } from "../../models/responses/ProductModel";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import "../../styles/product.css";
import "../../styles/modal.css";
import { GetAllCarResponse } from "../../models/cars/response/getAllCarResponse";
import { Button, Modal } from "react-bootstrap";

type Props = {
  car: GetAllCarResponse;
};

const ProductCard = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleNavigateModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/rentpage/${props.car.id}`);
  };
  return (
    <div className="card mt-3 " style={{ width: "17rem" }}>
      <div className="card">
        <div className="card-header bg-transparent border-0">
          <div className="product-custom-container">
            <div className="car-box-style">{props.car.carType}</div>
            <div className="car-box-model">
              {props.car.model_id.brandResponse.name} {props.car.model_id.name}
            </div>
            <div className="div-table-row">
              <div className="car-box-text">{props.car.modelYear} Model</div>
            </div>
          </div>
        </div>
        <div className="car-info-container">
          <div className="row">
            <div className="col-md-4 text-center">
              <h6 className="title-custom">SINIFI</h6>
              <div>
                <p>B</p>
              </div>
            </div>
            <div className="col-md-4 text-center custom-border">
              <h6 className="title-custom">MİN. SÜRÜCÜ</h6>
              <div>
                <p>21 YAŞ</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <h6 className="title-custom">MİN. EHLİYET</h6>
              <div>
                <p>1 YIL</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://megarentacar.com/tema/genel/uploads/araclar/renault-clio-hb_1.png"
          className="card-img-top"
          alt="..."
        />

        <div className="card-body custom">
          <div className="car-card">
            <div className="row custom-row">
              <div className="col-md-6">
                <div className="mb-2">
                  <p className="card-text">
                    <span className="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-gear"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                      </svg>
                    </span>{" "}
                    {props.car.transmissionType}
                  </p>
                </div>
                <div className="mb-2">
                  <p className="card-text">
                    <span className="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-cash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                      </svg>
                    </span>{" "}
                    {props.car.dailyPrice} TL/GÜN
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <p className="card-text">
                    <span className="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-fuel-pump"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z" />
                        <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z" />
                      </svg>
                    </span>{" "}
                    {props.car.fuelType}
                  </p>
                </div>
                <div className="mb-2">
                  <p className="card-text">
                    <span className="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-speedometer"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                        <path
                          fill-rule="evenodd"
                          d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
                        />
                      </svg>
                    </span>{" "}
                    {props.car.kilometer} KM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="info-logo">
            <button
              className="btn btn-outline-dark detail"
              onClick={handleNavigateModal}
            >
              Detay
            </button>

            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Araç Bilgileri</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Marka: {props.car.model_id.brandResponse.name}</p>
                <p>Model: {props.car.model_id.name}</p>
                <p>Yıl: {props.car.modelYear}</p>
                <p>Plaka: {props.car.plate}</p>
                <p>Renk: {props.car.color_id.name}</p>
                <p>Günlük ücret: {props.car.dailyPrice}</p>
                <p>Kilometre: {props.car.kilometer}</p>






              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Kapat
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="card-footer car-button-rent">
          <div className="card-body">
            <div className="row">
              <button
                className="btn btn-sm"
                style={{ width: "100%" }}
                onClick={handleNavigate}
              >
                Kirala
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
