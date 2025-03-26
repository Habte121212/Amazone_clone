import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './product.module.css'

function Product() {
    const [product, setproduct] = useState([])
    useEffect(() =>{

    }, [])
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        setproduct(res.data)
    }).catch((err)=>{
        console.log(err)
    })
  return (
   <section className={classes.product_container}>
    {
        product.map((singleproduct)=>(
            <ProductCard product ={singleproduct} key={singleproduct.id}/>
        ))
    }
   </section>
  )
}

export default Product
