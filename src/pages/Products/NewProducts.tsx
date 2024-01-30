import React, { useEffect, useState } from 'react'
import { ProductModel } from '../../models/responses/ProductModel'
import ProductService from '../../services/productService'
import NewProductCard from '../../components/ProductCard/NewProductCard'
type Props = {}

const Products = (props: Props) => {
    const[products,setProducts]=useState<ProductModel[]>([]);
       useEffect(() =>{
        fetchProducts();
       },[])

    const fetchProducts =() =>{
        let service: ProductService = new ProductService();
        service.getAll().then(response =>{
            setProducts(response.data.products);
        });
    };
    
  return (
    <div className='container' >
        <div className='row'>
            {products.map(product =>(
                <div key={product.id} className='col-12 col-md-6 col-lg-4 col-xl-4 mb-3'>
                    <NewProductCard product={product}/>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Products