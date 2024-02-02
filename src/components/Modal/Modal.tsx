import React, { FC } from "react";
import { ProductModel } from "../../models/responses/ProductModel";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  selectedProduct: ProductModel | null;
}

const Modal: FC<ModalProps> = (props) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          props.onClose();
        }
      };
  return (
    <div className={`${"modal"} ${props.open ? "display-block" : "display-none"}`} onClick={handleOverlayClick}>
      <div className="modal-main">
       
      
        
        <div className="modal-head">
       
          <h5> </h5>

        </div>
        <div className="modal-body">
          {props.selectedProduct && (
            <div>
              <h6>{props.selectedProduct.title}</h6>
              <p>Description: {props.selectedProduct.description}</p>
              <p>Brand: {props.selectedProduct.brand}</p>
              <p>Stock: {props.selectedProduct.stock}</p>
              <p>Rating: {props.selectedProduct.rating}</p>



              
              
            </div>
          )}
        </div>
        <div className="btn-container ">
          <button type="button" className="btn btn-outline-danger" onClick={props.onClose}>
          X
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
