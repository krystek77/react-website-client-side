/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dataProducts as allProducts } from '../../constants/products';
import { dataControls as allControls } from '../../constants/control-options';

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


        <div>
          <div className="container">
            <h3>Potrzeby:</h3>
            <ul>
              <li>prosta konstrukcja</li>
              <li>trwała budowa</li>
              <li>niskie koszty eksploatacji i serwisu</li>
              <li>trudne warunki w pralni</li>
              <li>osobna wirówka</li>
            </ul>
          </div>
        </div>

        <div className="product__content">
          <div className="container">
            <div className="product__wrapper">
              <main className="product__main">

                <header className="content__header">
                  <h3 className="content__title">Rodzaje urządzeń:</h3>
                </header>
                {product.kind.map((item)=>{
                  const {title,images,thumbnails, features, options,purpose,heating,g_factor,mount,control_options,parameters} = item;
                  const key = item.pathname.split('#')[1];
                  const currentImage = images[1];
                  const controlTypes = control_options.map((id)=>controls.find((item)=>item.id===id));

                  return (
                    <article className="product-card" key={key}>

                      <h4 className="article-title">{title}</h4>

                      {/** start product-slider component */}
                      <aside className="product-slider">
                        <div className="product-slider__image">
                          <img src={`../assets/images/${currentImage}.webp`} alt={currentImage}/>
                        </div>
                        {thumbnails.length !== 0 && (
                           <div className="product-slider__thumbnails">
                            {thumbnails.map((item)=>{
                                return (
                                  <button key={item} type="button" className="product-slider__button-thumbnail">
                                    <img className="product-slider__thumbnail" src={`../assets/images/${item}.webp`} alt={item}/>
                                  </button>
                                )
                            })}
                           </div>
                        )}
                      </aside>
                      {/** end product-slider component */}

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
                          {/** start unordered list component */}
                          {features.length !== 0 && (
                            <div className="product-card__list">
                              <h5 className="article-subtitle">Cechy</h5>
                              <ul>
                                {features.map((item)=>{
                                  return <li key={item}>{item}</li>
                                })}
                              </ul>
                            </div>
                          )}
                          {/** end unordered list component */}

                          {/** start unordered list component */}
                          {options.length !== 0 && (
                            <div className="product-card__list">
                              <h5 className="article-subtitle">Opcje</h5>
                              <ul>
                                {options.map((item)=>{
                                  return <li key={item}>{item}</li>
                                })}
                              </ul>
                            </div>
                          )}
                          {/** end unordered list component */}
                        </div>

                      </div>

                      <div className="product-card__details">
                        <h5 className="article-subtitle">Dane techniczne</h5>
                        <TechnicalData data={parameters}/>
                      </div>

                      <div className="product-card__details">
                        <h5 className="article-subtitle">Technologie</h5>
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
