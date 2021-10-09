import React from 'react';
import './index.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <ul>
        <li><Link to="/o-nas">O nas</Link></li>
        <li><Link to="/klienci">Klienci</Link></li>
        <li><Link to="/produkty/pralnice">Produkty</Link>
          {/** komponent */}
          <ul>
            <li className="title">
              <Link to="/produkty/pralnice#pralnice"> <strong>Pralnice</strong> </Link> 
              <ul>
                <li> <Link to="/produkty/pralnice#czolowe">bębnowe o załadunku czołowym </Link></li>
                <li> <Link to="/produkty/pralnice#boczne">bębnowe o załadunku bocznym</Link></li>
                <li> <Link to="/produkty/pralnice#specjalne-czolowe">specjalistyczne, bębnowe o załadunku czołowym</Link></li>
                <li> <Link to="/produkty/pralnice#specjalne-boczne">specjalistyczne, bębnowe o załadunku bocznym</Link></li>
              </ul>
            </li>
          </ul>
          {/** end komponent */}
          <ul>
            <li>
              <Link to="/produkty/wirowki#wirowki"> <strong>Wirówki</strong></Link>
              <ul>
                <li> <Link to="/produkty/wirowki#c8">pralnicza <b>C8</b></Link></li>
                <li> <Link to="/produkty/wirowki#wr">pralnicza <b>WR</b></Link></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li className="title">
              <Link to="/produkty/pralnicowirowki#pralnicowirowki"><strong>Pralnicowirówki</strong> </Link>
              <ul>
                <li><Link to="/produkty/pralnicowirowki#normalnoobrotowe-pralma">normalnoobrotowe <b>Pralma</b></Link> </li>
                <li><Link to="/produkty/pralnicowirowki#normalnoobrotowe-rx">normalnoobrotowe <b>RX</b></Link> </li>
                <li><Link to="/produkty/pralnicowirowki#szybkoobrotowe-rx">szybkoobrotowe <b>RX</b></Link> </li>
                <li><Link to="/produkty/pralnicowirowki#wysokoobrotowe-fx">wysokoobrotowe <b>FX</b></Link> </li>
                <li><Link to="/produkty/pralnicowirowki#wysokoobrotowe-fx350">wysokoobrotowe <b>FX350/450/600</b></Link> </li>
                <li><Link to="/produkty/pralnicowirowki#wysokoobrotowe-fs">wysokoobrotowe <b>FS</b></Link> </li>
                <li><Link to="/produkty/pralnicowirowki#male-profesionalne-sf">małe, profesjonalne <b>SF</b></Link> </li>
                <li><Link to="/produkty/pralnicowirowki#slupki-pralnicze-stw">słupki pralnicze <b>STW10</b></Link></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/produkty/suszarki#suszarki"><strong>Suszarki</strong></Link>
              <ul>
                <li><Link to="/produkty/suszarki#kompaktowe">kompaktowe <b>TX</b></Link></li>
                <li><Link to="/produkty/suszarki#bębnowe-tx">bębnowe <b>TX</b></Link></li>
                <li><Link to="/produkty/suszarki#bębnowe-dx">bębnowe <b>DX</b></Link></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/produkty/magle#magle"><strong>Magle</strong></Link>
              <ul>
                <li><Link to="/produkty/magle#nieckowe-i25">nieckowe <b>I25</b></Link></li>
                <li><Link to="/produkty/magle#nieckowe-i30">nieckowe <b>I30</b></Link></li>
                <li><Link to="/produkty/magle#walcowe-i33">walcowe, suszące <b>I33</b></Link></li>
                <li><Link to="/produkty/magle#walcowe-i50">walcowe, suszące <b>I50</b></Link></li>
                <li><Link to="/produkty/magle#walcowe-ir50">walcowe, suszące <b>IR50</b></Link></li>
                <li><Link to="/produkty/magle#walcowe-if50">walcowe, ze składarką wzdłużną <b>IF50</b></Link></li>
                <li><Link to="/produkty/magle#walcowe-iff50">walcowe, ze składarką wzdłużną i wprowadzarką <b>IFF50</b></Link></li>
                <li><Link to="/produkty/magle#nieckowe-acl1">nieckowe 1-walcowe <b>ACL</b></Link></li>
                <li><Link to="/produkty/magle#nieckowe-acl2">nieckowe 2-walcowe <b>ACL</b></Link></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/produkty/bariery-higieny#bariery-higieny"><strong>Bariery higieny</strong></Link>
               <ul>
                <li><Link to="/produkty/bariery-higieny#normalnoobrotowe">normalnoobrotowe <b>BH</b></Link></li>
                <li><Link to="/produkty/bariery-higieny#wysokoobrotowe-FXB">wysokoobrotowe <b>FXB</b></Link></li>
                <li><Link to="/produkty/bariery-higieny#wysokoobrotowe-MXB">wysokoobrotowe <b>MXB</b></Link></li>
                <li><Link to="/produkty/bariery-higieny#wysokoobrotowe-MB">wysokoobrotowe <b>MB</b></Link></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/produkty/prasowanie-fasonowe#prasowanie-fasonowe"><strong>Prasowanie fasonowe</strong></Link>
               <ul>
                <li><Link to="/produkty/prasowanie-fasonowe#eb3">zestaw do prasowania ręcznego <b>EB3</b></Link></li>
                <li><Link to="/produkty/prasowanie-fasonowe#ecomatic">zestaw do prasowania ręcznego <b>Ecomatic</b></Link></li>
                <li><Link to="/produkty/prasowanie-fasonowe#wa1">zestaw do prasowania ręcznego <b>WA-1</b></Link></li>
                <li><Link to="/produkty/prasowanie-fasonowe#wa10">zestaw do prasowania ręcznego <b>WA-10</b></Link></li>
              </ul>
            </li>
          </ul>
          <ul>
            <li><Link to="/produkty/wozki-regaly#wozki-regaly"><strong>Wózki i regały</strong></Link>
              <ul>
                <li><Link to="/produkty/wozki-regaly#ws150">wózek na suche pranie <b>WS-150</b></Link></li>
                <li><Link to="/produkty/wozki-regaly#wm150">wózek na mokre pranie <b>WM-150</b></Link></li>
                <li><Link to="/produkty/wozki-regaly#wst280">wózek na suche pranie <b>WST-280</b></Link></li>
                <li><Link to="/produkty/wozki-regaly#wst400">wózek na suche pranie <b>WST-400</b></Link></li>
                <li><Link to="/produkty/wozki-regaly#wpd400">wózek z podnoszonym dnem <b>WPD-400</b></Link></li>
                <li><Link to="/produkty/wozki-regaly#rs">regał stacjonarny <b>RS</b></Link></li>
                <li><Link to="/produkty/wozki-regaly#rj">regał jezdny <b>RJ</b></Link></li>
                <li><Link to="/produkty/wozki-regaly#wj">wieszak jezdny <b>WJ</b></Link></li>
                <li><Link to="/produkty/wozki-regaly#sm">stół manipulacyjny <b>SM</b></Link></li>
              </ul>
            </li>
          </ul>
          
        </li>
        <li><Link to="/rozwiazania-specjalne/samoobslugowe">Rozwiązania specjalne</Link>
  
        <ul>
            <li className="title">
              <Link to="/rozwiazania-specjalne/samoobslugowe#samoobslugowe"><strong>Pralnie samoobsługowe</strong></Link> 
              <ul>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-wysokoobrotowe">pralnicowirówki wysokoobrotowe <b>FX</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-normalnoobrotowe">pralnicowirówki normalnoobrotowe <b>RX</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-szybkoobrotowe">pralnicowirówki szybkoobrotowe <b>RX</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#suszarki-tx">suszarki bębnowe <b>TX</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#suszarki-dx">suszarki bębnowe <b>DX</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#male-profesjonalne-sfc">małe, profesjonalne pralnicowirówki <b>SFC</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#male-profesjonalne-sdc">małe, profesjonalne suszarki <b>SDC</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#slupki-pralnicze-stwc">słupki pralnicze <b>STWC10</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/samoobslugowe#slupki-pralnicze-stdc">słupki pralnicze <b>STDC10</b></Link></li>
              </ul>
            </li>
            <li className="title">
              <Link to="/rozwiazania-specjalne/sluzby-cywilne#sluzby-cywilne"> <strong>Służby cywilne (np. straż pożarna)</strong></Link>
              <ul>
                <li><Link to="/rozwiazania-specjalne/sluzby-cywilne#suszarka-komorowa-fdc">suszarka komorowa <b>FDC</b></Link></li>
              </ul>
            </li>
            <li className="title">
              <Link to="/rozwiazania-specjalne/softwash#softwash"> <strong>Urządzenia softwash</strong></Link>
              <ul>
                <li><Link to="/rozwiazania-specjalne/softwash#pralnicowirowki">pralnicowirówki wysokoobrotowe <b>SW</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/softwash#suszarki">suszarki <b>SWT</b></Link></li>
                <li><Link to="/rozwiazania-specjalne/softwash#suszarki-hp">suszarki <b>SWT HP</b></Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><Link to="/technologie">Technologie</Link></li>
        <li><Link to="/akcesoria">Akcesoria</Link></li>
        <li><Link to="/wiadomosci">Wiadomości</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
      <Switch>
        <Route path="/produkty/:name" render={(props) => <ProductDetails {...props} />} />
        <Route path="/" render={() => <h1>Home Page</h1>} />
      </Switch>
    </Router>
  );
};
export default App;
