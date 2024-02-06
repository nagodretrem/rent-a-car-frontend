import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { fetchProducts } from "../../store/slices/productSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import "../RentalPage/rentalpage.css"

type Props = {};

const RentalPage = (props: Props) => {
  const productsState = useSelector((state: any) => state.product);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-3">
          
          <FilterMenu />
          
        </div>
        <div className="col-9">
          
          <div className="row ">
            {productsState.products.map((product: any) => (
              <div
                key={product.id}
                className="col-12 col-md-6 col-lg-6 col-xl-4 mb-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalPage;
