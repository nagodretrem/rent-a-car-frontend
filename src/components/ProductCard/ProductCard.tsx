import React from "react";
import { ProductModel } from "../../models/responses/ProductModel";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

type Props = {
  product: ProductModel;
};

const ProductCard = (props: Props) => {
  const dispatch= useDispatch();

  const addProductToCard =() =>{
    dispatch(addToCart(props.product))
  };

  return (
    <div className="col mt-5">
      <div className="card">
        <div className="card-header bg-transparent border-success border-opacity-10 d-flex justify-content-between align-items-center">
          <span>{props.product.title}</span>
          <button onClick={addProductToCard} className="btn btn-secondary">
					Sepete Ekle <span>&gt;</span>
				</button>
          <Link
            to={"/product-detail/" + props.product.id}
            className="btn btn-secondary"
          >
            Detay<span>&gt;</span>
          </Link>
        </div>
        <img src={props.product.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h6 className="card-title">Araç Özellikleri</h6>
              <div className="mb-2">
                <p className="card-text">
                  <span className="logo">
                    <img
                      src="https://www.clipartmax.com/png/middle/282-2829171_black-and-white-credit-cards-black-and-white-credit-card-vector.png"
                      alt="Logo"
                    />
                  </span>
                  Stock: {props.product.stock}
                </p>
              </div>
              <div className="mb-2">
                <p className="card-text">
                  <span className="logo">
                    <img
                      src="https://www.clipartmax.com/png/middle/282-2829171_black-and-white-credit-cards-black-and-white-credit-card-vector.png"
                      alt="Logo"
                    />
                  </span>
                  Price: {props.product.price}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="card-title">Kiralama Koşulları</h6>
              <div className="mb-2">
                <p className="card-text">
                  <span className="logo">
                    <img
                      src="https://www.clipartmax.com/png/middle/282-2829171_black-and-white-credit-cards-black-and-white-credit-card-vector.png"
                      alt="Logo"
                    />
                  </span>
                  Rating:{props.product.rating}
                </p>
              </div>
              <div className="mb-2">
                <p className="card-text">
                  <span className="logo">
                    <img
                      src="https://www.clipartmax.com/png/middle/282-2829171_black-and-white-credit-cards-black-and-white-credit-card-vector.png"
                      alt="Logo"
                    />
                  </span>
                  Discount:{props.product.discountPercentage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
