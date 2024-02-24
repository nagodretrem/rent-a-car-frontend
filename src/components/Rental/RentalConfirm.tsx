import React from "react";
import RentalPayment from "./RentalPayment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

type Props = {};

const RentalConfirm = (props: Props) => {
  const { carId } = useParams();

  const cars = useSelector((state: any) => state.car.cars);
  const carIdInt = carId ? parseInt(carId) : undefined;
  const car = cars.find((car: any) => car.id === carIdInt);
  return (
    <div className="container mt-8">
      <div
        className="row justify-content-center mx-4 mx-md-5 mt-5 mb-5 shadow-5-strong "
        style={{
          background: "hsla(0, 0%, 10%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        <div className="col-md-7">
          <RentalPayment />
        </div>
        <div className="col-md-5">
          <div className="d-flex justify-content-start">
            <h3> Sipariş Onayı</h3>
          </div>
          <div className="card shadow-sm">
            <img
              className="card-img-top"
              src="https://megarentacar.com/tema/genel/uploads/araclar/renault-clio-hb_1.png"
              alt="Car"
            />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <div className="card-text">
                <p>
                  <strong>Model:</strong> {car && car.model_id.name}
                </p>
                <p>
                  <strong>Günlük Fiyat:</strong> {car && car.dailyPrice}
                </p>
                <p>
                  <strong>Model Yılı:</strong> {car && car.modelYear}
                </p>
                <p>
                  <strong>Plaka:</strong> {car && car.plate}
                </p>
                <p>
                  <strong>Renk:</strong> {car && car.color_id.name}
                </p>
                <p>
                  <strong>Kilometer:</strong> {car && car.kilometer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalConfirm;
