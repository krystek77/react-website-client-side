import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { dataProducts as allProducts } from '../constants/products';
import { dataControls as allControls } from '../constants/control-options';

import ProductDetails from '../components/ProductDetails/ProductDetails';

const Products = (props) => {
  const [product, setProduct] = useState(null);
  const [controls, setControls] = useState([]);

  useEffect(() => {
    console.log('[Product.js] - useEffect');
    const product = allProducts.find((p) => p.pathname === props.match.params.name);

    if (product) {
      setProduct(product);
    }
    if (allControls.length) {
      setControls(allControls);
    }
  }, [props.match.params.name]);

  useEffect(()=>{
    console.log('[Products.js] - useEffect product');
    if (props.location.hash) {
      // console.log('hash');
      const target = document.getElementById(props.location.hash.slice(1)); //do not get element
      // console.log(target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },[product,props])

  console.log('[Products.js] - render');

  return <ProductDetails product={product} controls={controls}/>

  }

Products.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default Products;
