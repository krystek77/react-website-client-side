import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataProducts as data } from "../constants/products";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = data.find((p) => p.pathname === props.match.params.name);
    if (product) {
      setProduct(product);
    }
    if (props.location.hash) {
      const target = document.getElementById(props.location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [props]);

  function renderProduct() {
    return (
      <React.Fragment>
        {product.kind.map((item) => {
          const { title, subtitle, desc, pathname } = item;
          const id = pathname.split("#")[1];

          return (
            <article id={id} key={id}>
              <header>
                <p className="subtitle">{subtitle}</p>
                <h3>{title}</h3>
              </header>
              <ul className="short-info">
                <li className="short-info__item">
                  <span className="short-info__name">Funkcje:</span>
                  <span className="short-info__value">pranie, płukanie</span>
                </li>
                <li className="short-info__item">
                  <span className="short-info__name">Sterowanie:</span>
                  <span className="short-info__value">
                    półautomatyczne, automatyczne
                  </span>
                </li>
                <li className="short-info__item">
                  <span className="short-info__name">Dostępne podgrzewy:</span>
                  <span className="short-info__value">
                    elektryczny, parowy bezpośredni, woda ciepła
                  </span>
                </li>
              </ul>
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
          <Link to={`/produkty/pralnice#${product.pathname}`}>
            <strong>{product.short_title}</strong>
          </Link>

          <ul className="utility-menu__submenu">
            {product.kind.map((item) => {
              const { pathname, label } = item;
              return (
                <li className="utility-menu__item" key={pathname}>
                  <Link to={`/produkty/${pathname}`}>{label}</Link>
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
export default ProductDetails;
