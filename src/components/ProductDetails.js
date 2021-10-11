import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dataProducts as allProducts } from '../constants/products';
import { dataControls as allControls } from '../constants/control-options';

import './ProductDetails.css';

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const [controls, setControls] = useState([]);

  useEffect(() => {
    const product = allProducts.find((p) => p.pathname === props.match.params.name);

    if (product) {
      setProduct(product);
    }
    if (allControls.length) {
      setControls(allControls);
    }

    if (props.location.hash) {
      const target = document.getElementById(props.location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [props]);

  function renderProduct() {
    return (
      <React.Fragment>
        {product.kind.map((item) => {
          const { title, subtitle, control_options, purpose, heating, g_factor, mount, pathname, features, options } = item;
          const id = pathname.split('#')[1];
          const controlsItem = control_options.map((controlId) => {
            return controls.find((control) => control.id === controlId);
          });

          return (
            <article className="product" id={id} key={id}>
              <p className="product__subtitle">{subtitle}</p>

              {/** start slider component */}
              <aside className="slider">
                <div className="slider__image">
                  <img src="../assets/images/pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-1-586x784.webp" alt="pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-1-586x784" />
                </div>
                <div className="slider__thumbnails">
                  <div className="slider__thumbnail">
                    <img src="../assets/images/pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-1-100x100.webp" alt="pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-1-100x100" />
                  </div>
                  <div className="slider__thumbnail">
                    <img src="../assets/images/pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-2-100x100.webp" alt="pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-2-100x100" />
                  </div>
                  <div className="slider__thumbnail">
                    <img src="../assets/images/pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-3-100x100.webp" alt="pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-3-100x100" />
                  </div>
                  <div className="slider__thumbnail">
                    <img src="../assets/images/pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-4-100x100.webp" alt="pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-4-100x100" />
                  </div>
                  <div className="slider__thumbnail">
                    <img src="../assets/images/pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-5-100x100.webp" alt="pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-5-100x100" />
                  </div>
                </div>
              </aside>
              {/** end slider component */}

              <div className="product__introduction">
                <header className="product__header">
                  <h3 className="product__title">{title}</h3>
                  {/** start short info component */}
                  <ul className="short-info">
                    {purpose.length !== 0 && (
                      <li className="short-info__item">
                        <span className="short-info__title">Przeznaczenie:</span>
                        <span className="short-info__content">{purpose.join(', ')}</span>
                      </li>
                    )}
                    {control_options.length !== 0 && (
                      <li className="short-info__item">
                        <span className="short-info__title">Sterownik:</span>
                        <span className="short-info__content">
                          {controlsItem.map((item) => (
                            <a key={item.control} href="/">
                              {item.control}
                            </a>
                          ))}
                        </span>
                      </li>
                    )}
                    {heating.length !== 0 && (
                      <li className="short-info__item">
                        <span className="short-info__title">Podgrzew:</span>
                        <span className="short-info__content">{heating.join(', ')}</span>
                      </li>
                    )}
                    {g_factor && (
                      <li className="short-info__item">
                        <span className="short-info__title">G-faktor:</span>
                        <span className="short-info__content">{g_factor}</span>
                      </li>
                    )}
                    {mount && (
                      <li className="short-info__item">
                        <span className="short-info__title">Mocowanie:</span>
                        <span className="short-info__content">{mount}</span>
                      </li>
                    )}
                  </ul>
                  {/** end short info component */}
                </header>
                <div className="product__content">
                  {/** plain list component */}
                  {features.length !== 0 && (
                    <div className="plain-list">
                      <h4 className="plain-list__title">Cechy</h4>
                      <ul className="plain-list__items">
                        {features.map((item) => (
                          <li className="plain-list__item" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/** end plain list component */}
                  {/** start plain list component */}
                  {options.length !== 0 && (
                    <div className="plain-list">
                      <h4 className="plain-list__title">Opcje</h4>
                      <ul className="plain-list__items">
                        {options.map((item) => (
                          <li className="plain-list__item" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/** end plain list component */}
                </div>
              </div>

              {/** start related details component */}
              <section className="related-details">
                <h4>Technologie</h4>
              </section>
              {/** end related details component */}

              {/** start related details component */}
              <section className="related-details">
                <h4>Dane techniczne</h4>
              </section>
              {/** end related details component */}
            </article>
          );
        })}
      </React.Fragment>
    );
  }
  function renderUtilityMenu() {
    return (
      <ul className="utility-menu">
        <li className="utility-menu__title">
          <Link to={`/produkty/pralnice#${product.pathname}`}>
            {' '}
            <strong>{product.short_title}</strong>{' '}
          </Link>

          <ul className="utility-menu__submenu">
            {product.kind.map((item) => {
              const { pathname, label } = item;
              return (
                <li className="utility-menu__item" key={pathname}>
                  {' '}
                  <Link to={`/produkty/${pathname}`}>{label}</Link>{' '}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    );
  }

  return (
    product && (
      <main>
        <header>
          <h2 id={product.pathname}>{product.title}</h2>
        </header>
        <div className="needs">
          <h3>Wymagania</h3>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>

        <section>{renderProduct()}</section>
        <aside>{renderUtilityMenu()}</aside>
      </main>
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
