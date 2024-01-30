import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductModel } from '../../models/responses/ProductModel';
import ProductService from '../../services/productService';

type Props = {}

const ProductDetail = (props: Props) => {
    const [productDetail, setProductDetail] = useState<ProductModel | undefined>();
    const params=useParams<{id: string}>();
    
    useEffect(()=>{
        if(params.id){
            fetchDetails(params.id)
        }
    },[params.id])

    const fetchDetails = async(id:string) =>{
        let service:ProductService= new ProductService();
        let response= await service.getById(parseInt(id));
        setProductDetail(response.data);
        console.log(response.data);
    }
  return (
    <div className="container mt-5">
      <div className="card" style={{ maxWidth: '540px' }}>
        <img src={productDetail?.thumbnail} className="card-img-top" alt={productDetail?.title} />
        <div className="card-body">
          <h5 className="card-title">{productDetail?.title}</h5>
          <p className="card-text">{productDetail?.description}</p>
          <div className="row">
            <div className="col-md-6">
              <p><strong>Price:</strong> {productDetail?.price}</p>
              <p><strong>Stock:</strong> {productDetail?.stock}</p>
              <p><strong>Rating:</strong> {productDetail?.rating}</p>
              <p><strong>Discount:</strong> {productDetail?.discountPercentage}</p>
              

            </div>
            <div className="col-md-6">
              {/* İhtiyaca göre ek detaylar eklenebilir. */}
            </div>
          </div>
          <button className="btn btn-primary">Sepete Ekle</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail