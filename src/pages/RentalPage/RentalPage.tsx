import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import "../RentalPage/rentalpage.css"
import { GetAllCarResponse } from "../../models/cars/response/getAllCarResponse";
import { fetchCars } from "../../store/slices/carSlice";
import { Available, CarType } from "../../models/cars/requests/addCarRequest";
import { setSelectedFilters } from "../../store/slices/filterSlice";

type Props = {};

const RentalPage = (props: Props) => {
  const carsState = useSelector((state:any) => state.car);
  const filterState = useSelector((state: any) => state.filter);
  const availableCars = carsState.cars.filter((car: GetAllCarResponse) => car.available === Available.YES);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCars());
    if (filterState.selectedFilters) {
      dispatch(setSelectedFilters(filterState.selectedFilters));
      console.log("selectedFilters", filterState.selectedFilters);
    }
    
  }, [dispatch, filterState.selectedFilters]);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-3">
          
          <FilterMenu />
          
        </div>
        <div className="col-9">
          <div className="row ">
          
          {availableCars.filter((car: GetAllCarResponse) => 
            filterState.selectedFilters.some((filter: string) => 
              filter === car.carType || filter === car.fuelType || filter === car.transmissionType
                ) || filterState.selectedFilters.length === 0)
            .map((car: GetAllCarResponse) => (
            <div key={car.id}className="col-12 col-md-6 col-lg-4 col-xl-4 mb-3 d-flex justify-content-center align-items-center ">
             <ProductCard car={car}/> </div>))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalPage;
