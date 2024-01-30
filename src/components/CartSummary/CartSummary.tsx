import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const cartState = useSelector((state: any) => state.cart);

  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="btn btn-sm btn-light me-2">{cartState.cartItems.length}</div>
            Sepetiniz
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
          

            {cartState.cartItems.map((cartItem: any, index: number) => (
              <li key={index}>
                <Link to={""} className="dropdown-item">
                  <div className="btn btn-sm btn-light me-2">
                    {cartItem.quantity}
                  </div>
                  {cartItem.product.title}
                </Link>
              </li>
            ))}

            <li>
              <Link to={"/cart"} className="dropdown-item">
                Sepet Detayı
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CartSummary;
