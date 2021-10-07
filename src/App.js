import React from 'react';
import './index.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <ul>
        <li>
          <Link to="/o-nas">O nas</Link>
        </li>
        <li>
          <Link to="/klienci">Klienci</Link>
        </li>
        <li>
          <Link to="/produkty/pralnice">Produkty</Link>
          <ul>
            <li className="title">
              <Link to="/produkty/pralnice#pralnicee">
                <strong>Pralnice</strong>
              </Link>
              <ul>
                <li>
                  <Link to="/produkty/pralnice#czolowe"> bębnowe o załadunku czołowym </Link>
                </li>
                <li>
                  <Link to="/produkty/pralnice#boczne">bębnowe o załadunku bocznym</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li className="title">
              <Link to="/produkty/pralnicowirowki#pralnicowirowki">
                <strong>Pralnicowirówki</strong>
              </Link>
              <ul>
                <li>
                  <Link to="/produkty/pralnicowirowki#normalnoobrotowe-pralma">normalnoobrotowe Pralma</Link>
                </li>
                <li>
                  <Link to="/produkty/pralnicowirowki#normalnoobrotowe-rx">normalnoobrotowe RX</Link>
                </li>
                <li>
                  <Link to="/produkty/pralnicowirowki#szybkoobrotowe-rx">szybkoobrotowe RX</Link>
                </li>
                <li>
                  <Link to="/produkty/pralnicowirowki#wysokoobrotowe-fx">wysokoobrotowe FX</Link>
                </li>
                <li>
                  <Link to="/produkty/pralnicowirowki#wysokoobrotowe-fx350">wysokoobrotowe FX350/450/600</Link>
                </li>
                <li>
                  <Link to="/produkty/pralnicowirowki#wysokoobrotowe-fs">wysokoobrotowe FS</Link>
                </li>
                <li>
                  <Link to="/produkty/pralnicowirowki#male-profesionalne-sf">małe, profesjonalne SF</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/produkty/suszarki">
                <strong>Suszarki</strong>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/produkty/magle">
                <strong>Magle</strong>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/produkty/wirowki">
                <strong>Wirówki</strong>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/produkty/akcesoria">
                <strong>Akcesoria</strong>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/rozwiazania-specjalne">Rozwiązania specjalne</Link>
        </li>
        <li>
          <Link to="/technologie">Technologie</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/aktualnosci">Aktualności</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/produkty/:name" children={(props) => <ProductDetails {...props} />} />
        <Route path="/" render={() => <h1>Home Page</h1>} />
      </Switch>
    </Router>
  );
};
export default App;
