/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dataProducts as allProducts } from '../../constants/products';
import { dataControls as allControls } from '../../constants/control-options';

import Slider from './Slider/Slider';
import List from '../List/List';
import TechnicalData from './TechnicalData/TechnicalData';

import './ProductDetails.css';


const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const [controls, setControls] = useState([]);

  useEffect(() => {
    console.log('[ProductDetails.js] - useEffect');
    const product = allProducts.find((p) => p.pathname === props.match.params.name);

    if (product) {
      setProduct(product);
    }
    if (allControls.length) {
      setControls(allControls);
    }
  }, []);

  useEffect(()=>{
    console.log('[ProductDetails.js] - useEffect product');
    if (props.location.hash) {
      console.log('hash');
      const target = document.getElementById(props.location.hash.slice(1)); //do not get element
      console.log(target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },[product,props])

  console.log('[ProductDetails.js] - render');

  return (
    product && (
      <React.Fragment>

        <div className="banner" id={product.pathname}>
          <div className="container">
            <div className="banner__content">
              <h1 className="banner__title">Przemysłowe pralnice bębnowe</h1>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="header__content">
              <h2 className="header__title">{product.title}</h2>
            </div>
          </div>
        </div>

        <section className="needs">
          <div className="container">
            <List items={product.needs}>
              <h3 className="content-title content-title--light">Potrzeby:</h3>
            </List>
          </div>
        </section>

        <div className="product__content">
          <div className="container">
            <div className="product__wrapper">
              <main className="product__main">

                {product.kind.map((item)=>{
                  const {title, subtitle, images,thumbnails, features, options,purpose,heating,g_factor,mount,control_options,parameters} = item;
                  const key = item.pathname.split('#')[1];
                  const controlTypes = control_options.map((id)=>controls.find((item)=>item.id===id));

                  return (
                    <article className="product-card" key={key} id={key}>

                      <header className="product-card__header">
                        <h4 className="product-card__title">{title}</h4>
                        <p className="product-card__subtitle">{subtitle}</p>
                      </header>

                      <Slider images={images} thumbnails={thumbnails}/>
                      <div className="product-card__content">
                        
                        {/** start product short component */}
                        <div className="product-short">
                          {purpose.length !==0 && <div className="product-short__item"><span className="product-short__name">Przeznaczenie:</span><span className="product-short__value">{purpose.join(', ')}</span></div>}
                          {g_factor && <div className="product-short__item"><span className="product-short__name">G-faktor:</span><span className="product-short__value">{g_factor}</span></div>}
                          {mount &&<div className="product-short__item"><span className="product-short__name">Mocowanie:</span><span className="product-short__value">{mount}</span></div>}
                          {heating.length !==0 && <div className="product-short__item"><span className="product-short__name">Dostępne podgrzewy:</span><span className="product-short__value">{heating.join(', ')}</span></div>}
                          {controlTypes.length !==0 && <div className="product-short__item">
                              <span className="product-short__name">Rodzaje sterowników:</span>
                              <span className="product-short__value"> {controlTypes.map((item)=>{ return <Link className="product-short__link" to="/" key={item.id}>{item.control}</Link> }) } </span>
                            </div>
                           }
                        </div>
                        {/** end product short component */}

                        <div className="product-card__lists">
                            <List items={features}>
                              <h5 className="list-title">Cechy</h5>
                            </List>
                            <List items={options}>
                              <h5 className="list-title">Opcje</h5>
                            </List>
                        </div>

                      </div>

                      <div className="product-card__details">
                        <h5>Dane techniczne</h5>
                        <TechnicalData data={parameters}/>
                      </div>
                    </article>
                    )
                })}
                
              </main>
            

              <aside className="product__aside">
                <ul className="utility-menu">
                  <li className="utility-menu__title">
                    <Link to={`/produkty/pralnice#${product.pathname}`}> <strong>{product.short_title}</strong> </Link>

                    <ul className="utility-menu__submenu">
                      {product.kind.map((item) => {
                        const { pathname, label } = item;
                        return (
                          <li className="utility-menu__item" key={pathname}> <Link to={`/produkty/${pathname}`}>{label}</Link> </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </aside>
            </div>

          </div>

        </div>
      </React.Fragment>
    )
  );
};
ProductDetails.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default ProductDetails;
