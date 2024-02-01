import React, { useEffect } from "react";
import "../../styles/homepage.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { fetchProducts } from "../../store/slices/productSlice";
import ProductCard from "../../components/ProductCard/ProductCard";

type Props = {};

const Homepage = (props: Props) => {
  const productsState = useSelector((state: any) => state.product);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="container-xxl">
      <div className="container-sm">
        <SearchForm />
        <div className="row">
        {productsState.products.map((product: any) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <ProductCard product={product} />
          </div>
         


          
        ))}
        </div>
      </div>

      
    </div>
  );
};

export default Homepage;
