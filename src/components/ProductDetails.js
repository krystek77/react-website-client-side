import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dataProducts as data } from '../constants/products';
import './ProductDetails.css';

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const product = data.find((p) => p.pathname === props.match.params.name);
    if (product) { setProduct(product); }
    if (props.location.hash) {
      const target = document.getElementById(props.location.hash.slice(1));
      if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
    }
  }, [props]);

  function renderProduct() {
    return (
      <React.Fragment>
        {product.kind.map((item) => {
          const { title, subtitle,control_options, purpose,heating,g_factor,mount, pathname,desc } = item;
          const id = pathname.split('#')[1];

          return (
            <article id={id} key={id}>
              <header>
                <p className="subtitle">{subtitle}</p>
                <h3>{title}</h3>
                <ul className="short-info">
                  {purpose.length && <li className="short-info__item"><span className="short-info__title">Przeznaczenie:</span><span className="short-info__content">{purpose.join(', ')}</span></li>}
                  {control_options.length && <li className="short-info__item"><span className="short-info__title">Sterownik:</span><span className="short-info__content">{control_options.map((item)=><a key={item} href="/">{item}</a>)}</span></li>}
                  {heating.length && <li className="short-info__item"><span className="short-info__title">Podgrzew:</span><span className="short-info__content">{heating.join(', ')}</span></li>}
                  {g_factor && <li className="short-info__item"><span className="short-info__title">G-faktor:</span><span className="short-info__content">{g_factor}</span></li>}
                  {mount && <li className="short-info__item"><span className="short-info__title">Mocowanie:</span><span className="short-info__content">{mount}</span></li>}
                </ul>
              </header>

              <h4>Cechy</h4>
              <p>{desc}</p>
              <h4>Opcje</h4>
              <p>{desc}</p>
              <h4>Technologie</h4>
              <p>{desc}</p>
              <h4>Dane techniczne</h4>
              <p>{desc}</p>
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
    );
  }

  return (
    product && (
      <main>
        <header><h2 id={product.pathname}>{product.title}</h2></header>
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
      name:PropTypes.string
    }),
  }),
};

export default ProductDetails;
