import React, { useEffect, useState } from "react";
import { ProductModel } from "../../models/responses/ProductModel";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import "../../styles/product.css";
import Modal from "../Modal/Modal";
import "../../styles/modal.css";
import { GetAllCarResponse } from "../../models/cars/response/getAllCarResponse";

type Props = {
 
  car: GetAllCarResponse;
};

const ProductCard = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(
    null
  );

  const openModalForProduct = () => {
    toggleModal();
  };

  function toggleModal() {
    setShowModal(!showModal);
  }

  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addToCart(props.car));
  };
  return (
    <div className="card mt-3 " style={{ width: "17rem" }}>
      <div className="card">
        <div className="card-header bg-transparent border-0">
          <div className="product-custom-container">
            <div className="car-box-style">Ekonomi - Hatchback</div>
            <div className="car-box-model">{props.car.imagePath}</div>
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
                <p>{props.car.kilometer}</p>
              </div>
            </div>
            <div className="col-md-4 text-center custom-border">
              <h6 className="title-custom">MİN. SÜRÜCÜ</h6>
              <div>
                <p>{props.car.dailyPrice}</p>
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
                    Manuel
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
                        className="bi bi-suitcase"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 6 5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 10 5" />
                        <path d="M6.5 0a.5.5 0 0 0-.5.5V3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 1.031 1.75A1.003 1.003 0 0 0 5 16a1 1 0 0 0 1-1h4a1 1 0 1 0 1.969-.25A2 2 0 0 0 13 13V5a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-.5-.5zM9 3H7V1h2zm3 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                      </svg>
                    </span>{" "}
                    391 lt
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
                    Benzinli
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
                    500 KM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="info-logo">
          <button
              className="btn btn-outline-dark detail"
              onClick={openModalForProduct}
            >
            Detay
            </button>
          </div>
          <Modal open={showModal} onClose={toggleModal} selectedProduct={selectedProduct} />

        </div>
        <div className="card-footer car-button-rent">
          <div className="card-body">
            <div className="row">
            <button
                className="btn btn-sm"
                onClick={addProductToCart}
                style={{ width: "100%" }}
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
