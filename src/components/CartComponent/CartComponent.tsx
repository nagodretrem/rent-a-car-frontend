import React from 'react'
import { ProductModel } from '../../models/responses/ProductModel'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/slices/cartSlice'
import "../../styles/cart.css"


type Props = {
    product?: ProductModel
}

const CartComponent = (props: Props) => {
    const cartState = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const removeProductFromCart = (product: ProductModel) => {
    dispatch(removeFromCart({ id: product.id }));
  };
  
 
  return (
    <div className='container-sm '>
    <div className="card mb-3 mt-3">
      {cartState.cartItems.map((cartItem: any, index: number) => (
        
        <div key={cartItem.product.id} className="row ">
          <div className="col-md-4">
            <img
              src="https://megarentacar.com/tema/genel/uploads/araclar/renault-clio-hb_1.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="card-body">
              <h5 className="card-title">{cartItem.product.title}</h5>

              <small className="card-text">Category: {cartItem.product.category}</small>
              <br/>
              <small className="card-text">Discount:{cartItem.product.discountPercentage}</small>
              <br/>
              <small className="card-text">Rating: {cartItem.product.rating}</small>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="btn-ligth ">
              <button type="button" className="btn btn-sm btn-light me-2">
                +
              </button>
              {cartItem.quantity}
              <button type="button" className="btn btn-sm btn-light ms-2">
                -
              </button>
            </div>
            <span className="mx-2"></span>
            <button
              onClick={() => removeProductFromCart(cartItem.product)}
              type="button"
              className="btn btn-danger"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CartComponent