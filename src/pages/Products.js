import React, { useEffect, useState } from 'react';
import {useParams,useLocation} from 'react-router-dom';


import { dataProducts as allProducts } from '../constants/products';
import { dataControls as allControls } from '../constants/control-options';

import ProductDetails from '../components/ProductDetails/ProductDetails';

const Products = () => {
  const [product, setProduct] = useState(null);
  const [controls, setControls] = useState([]);

  const params = useParams();
  const location = useLocation();

  // console.log(params);
  // console.log(location)

  useEffect(() => {
    console.log('[Product.js] - useEffect');
    const product = allProducts.find((p) => p.pathname === params.name);

    if (product) {
      setProduct(product);
    }
    if (allControls.length) {
      setControls(allControls);
    }
  }, [params.name]);

  useEffect(()=>{
    console.log('[Products.js] - useEffect product');
    if (location.hash) {
      // console.log('hash');
      const target = document.getElementById(location.hash.slice(1)); //do not get element
      // console.log(target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },[product,location.hash]);

  console.log('[Products.js] - render');

  return <ProductDetails product={product} controls={controls}/>

  }


export default Products;
