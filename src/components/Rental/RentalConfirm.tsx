import React, { useEffect } from "react";
import RentalPayment from "./RentalPayment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { AppDispatch } from "../../store/configureStore";
import { getClaims } from "../../store/slices/tokenSlice";
import { fetchRentals, getById } from "../../store/slices/rentalSlice";
import { GetAllRentalResponse } from "../../models/rental/response/getAllRentalResponse";

type Props = {};

const RentalConfirm = (props: Props) => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const rentalId = location.state.rentalId;
  const claims = useSelector((state: any) => state.token.claims);

  const rentalsState = useSelector((state: any) => state.rental);

  useEffect(() => {
    if (rentalId) {
      dispatch(getById(rentalId));
    }
  }, [dispatch, rentalId]);
  
  const handleGetClaims = () => {
    dispatch(getClaims());
  };
  const selectedRental = useSelector((state: any) => state.rental.selectedRental);

  console.log("user id:", claims && claims.id);
  console.log("rental id:", rentalId);

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
          {selectedRental && (
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Kiralama Detayları</h5>
          <div className="card-text">
            <p>Kiralama Tarihi: {selectedRental.startDate}</p>
            <p>Teslim Tarihi: {selectedRental.endDate}</p>
            <p>Kilometre: {selectedRental.carResponse.kilometer}</p>
            <p>Marka adı: {selectedRental.carResponse.model_id.brandResponse.name}</p>
            <p>Model adı: {selectedRental.carResponse.model_id.name}</p>
            <p>Model Yılı: {selectedRental.carResponse.modelYear}</p>
            <p>Plaka : {selectedRental.carResponse.plate}</p>
            <p>Günlük ücret : {selectedRental.carResponse.dailyPrice}</p>

            




           





          </div>
        </div>
      </div>
    )}
        </div>
      </div>
    </div>
  );
};

export default RentalConfirm;
