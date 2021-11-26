/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dataProducts as allProducts } from '../../constants/products';
import { dataControls as allControls } from '../../constants/control-options';

import Slider from './Slider/Slider';
import List from '../List/List';
import Accordion from '../Accordion/Accordion';
import TechnicalData from './TechnicalData/TechnicalData';
import InformationMaterials from './InformationMaterials/InformationMaterials';

import './ProductDetails.css';

const ProductDetails = (props) => {
  const {product,controls} = props;
  return (
    product && (
      <div className="page">
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
                {product.kind.map((item) => {
                  const { title, subtitle, images, thumbnails, features, options, purpose, heating, g_factor, mount, control_options, parameters, information_materials } = item;
                  const key = item.pathname.split('#')[1];
                  const controlTypes = control_options.map((id) => controls.find((item) => item.id === id));

                  return (
                    <article className="product-card" key={key} id={key}>
                      <header className="product-card__header">
                        <h4 className="product-card__title">{title}</h4>
                        <p className="product-card__subtitle">{subtitle}</p>
                      </header>

                      <Slider images={images} thumbnails={thumbnails} />
                      <div className="product-card__content">
                        {/** start product short component */}
                        <div className="product-short">
                          {purpose.length !== 0 && (
                            <div className="product-short__item">
                              <span className="product-short__name">Przeznaczenie:</span>
                              <span className="product-short__value">{purpose.join(', ')}</span>
                            </div>
                          )}
                          {g_factor && (
                            <div className="product-short__item">
                              <span className="product-short__name">G-faktor:</span>
                              <span className="product-short__value">{g_factor}</span>
                            </div>
                          )}
                          {mount && (
                            <div className="product-short__item">
                              <span className="product-short__name">Mocowanie:</span>
                              <span className="product-short__value">{mount}</span>
                            </div>
                          )}
                          {heating.length !== 0 && (
                            <div className="product-short__item">
                              <span className="product-short__name">Dostępne podgrzewy:</span>
                              <span className="product-short__value">{heating.join(', ')}</span>
                            </div>
                          )}
                          {controlTypes.length !== 0 && (
                            <div className="product-short__item">
                              <span className="product-short__name">Rodzaje sterowników:</span>
                              <span className="product-short__value">
                                {' '}
                                {controlTypes.map((item) => {
                                  return (
                                    <Link className="product-short__link" to="/" key={item.id}>
                                      {item.control}
                                    </Link>
                                  );
                                })}{' '}
                              </span>
                            </div>
                          )}
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

                      <Accordion title="Dane techniczne">
                        <TechnicalData data={parameters} />
                      </Accordion>
                      <Accordion title="Materiały informacyjne">
                        <InformationMaterials data={information_materials} />
                      </Accordion>
                    </article>
                  );
                })}
              </main>

              <aside className="product__aside">
                <div className="product__sticky">
                  <ul className="utility-menu">
                    <li className="utility-menu__title">
                      <Link to={`/produkty/pralnice#${product.pathname}`}>{product.short_title}</Link>

                      <ul className="utility-menu__submenu">
                        {product.kind.map((item) => {
                          const { pathname, label } = item;
                          const kind = label.split('-')[0];
                          const type = label.split('-')[1];

                          return (
                            <li className="utility-menu__item" key={pathname}>
                              {' '}
                              <Link to={`/produkty/${pathname}`}>
                                <span>{kind}</span>
                                <b>{type}</b>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

ProductDetails.propTypes = {
  product:PropTypes.object,
  controls:PropTypes.array
}
export default ProductDetails;
