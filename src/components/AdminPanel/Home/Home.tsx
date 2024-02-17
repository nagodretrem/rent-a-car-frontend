import React, { useEffect, useState } from "react";
import Nav from "../AdminNav/Nav";
import "../Home/home.css";
import CarTable from "../../Tables/CarTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/configureStore";
import { fetchCars } from "../../../store/slices/carSlice";
import { GetAllCarResponse } from "../../../models/cars/response/getAllCarResponse";
import BrandTable from "../../Tables/BrandTable";

type Props = {
  Toggle: () => void;
};

const Home = (props: Props) => {
  const carsState = useSelector((state: any) => state.car);
  const brandsState = useSelector((state: any) => state.brand);

  return (
    <div className="px-3">
      {" "}
      <Nav Toggle={props.Toggle} />{" "}
      <div className="container-fluid">
        {" "}
        <div className="row g-3 my-2">
          {" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">{carsState.cars.length}</h3>{" "}
                <p className="fs-5">Cars</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">-</h3> <p className="fs-5">Users</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">{brandsState.brands.length}</h3> <p className="fs-5">Brands</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">-</h3> <p className="fs-5">Models</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <CarTable />
      <BrandTable/>
    </div>
  );
};

export default Home;
