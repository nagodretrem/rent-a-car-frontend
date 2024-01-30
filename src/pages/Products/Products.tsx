import React, { useEffect, useState } from 'react'
import { ProductModel } from '../../models/responses/ProductModel'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductService from '../../services/productService'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/slices/productSlice'
import { AppDispatch } from '../../store/configureStore'
type Props = {}

const Products = (props: Props) => {
    // const[products,setProducts]=useState<ProductModel[]>([]);
    
    //    useEffect(() =>{
    //     fetchProducts();
    //    },[])

    // const fetchProducts =() =>{
    //     let service: ProductService = new ProductService();
    //     service.getAll().then(response =>{
    //         setProducts(response.data.products);
    //     });
    // };

    const productsState = useSelector((state:any) => state.product);
    const dispatch= useDispatch<AppDispatch>();
    useEffect(() =>{
       dispatch(fetchProducts());
    },[])
  return (
    <div className='container' >
        <div className='row'>
            {productsState.products.map((product:any) =>(
                <div key={product.id} className='col-4'>
                    <ProductCard product={product}/>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Products