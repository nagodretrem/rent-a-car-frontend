import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { fetchProducts } from "../../store/slices/productSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import "../RentalPage/rentalpage.css"
import { GetAllCarResponse } from "../../models/cars/response/getAllCarResponse";
import { fetchCars } from "../../store/slices/carSlice";

type Props = {};

const RentalPage = (props: Props) => {
  const carsState = useSelector((state:any) => state.car);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-3">
          
          <FilterMenu />
          
        </div>
        <div className="col-9">
          
          <div className="row ">
          {carsState.cars.map((car: GetAllCarResponse) => (
  <div key={car.id}
       className="col-12 col-md-6 col-lg-4 col-xl-4 mb-3 d-flex justify-content-center align-items-center "
  >
    <ProductCard car={car}/>
  </div>
))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalPage;
