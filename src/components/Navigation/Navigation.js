/* eslint-disable no-unused-vars */

import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

import './Navigation.css';

function Navigation() {
  const [openNavigation,setOpenNavigation] = useState(false);
  const [activeMenu,setActiveMenu] = useState("0");
  const [activeHandySubmenu,setActiveHandySubmenu] = useState("0");

  function toggleMenu(){
    setOpenNavigation(!openNavigation);
  }
  if(openNavigation){
    document.body.classList.add("no-scroll-mobile");
  } else {
    document.body.classList.remove('no-scroll-mobile');
  }

  console.log("[Navigation.js] - render");

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/** logo component */}
        <div className="logo"><Link to="/" className="logo__text">LOGO</Link></div>
        {/** toggle button component */}
        <button className="toggle-btn toggle-btn--menu" type="button" onClick={toggleMenu}>{openNavigation ? <MenuOpenIcon/>:<MenuIcon/>}</button> 
      </div>
      <div className={`navbar__menu ${openNavigation ? "navbar__menu--visible":""}`}>
        <ul className="menu">
          <li className="menu__item"><Link className="menu__link" to="/o-nas">O nas</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/klienci">Klienci</Link></li>
          <li className="menu__item">

            <button data-number-menu="1" onClick={(e)=>setActiveMenu(e.target.dataset.numberMenu)} type="button" className="menu-button">Produkty<span className="pointer pointer--right"><KeyboardArrowRightIcon/></span></button>
            <div className={`submenu ${activeMenu === "1" ? "submenu--visible":"" }`}>
              <button type="button" onClick={()=>setActiveMenu("0")} className="menu-button menu-button--submenu">Produkty<span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span></button>
              <ul className="submenu__list">
                <li className="submenu__item">

                  <button type="button" data-number-hs="11" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Pralnice bębnowe
                    {activeHandySubmenu === "11" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "11" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setOpenNavigation(false)}} to="/produkty/pralnice#pralnice">Pralnice</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#czolowe-pb"><span>bębnowe o załadunku czołowym</span><b>PB</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#czolowe-pc"><span>bębnowe o załadunku czołowym</span><b>PC</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#boczne"><span>bębnowe o załadunku bocznym</span><b>BP</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#specjalne-czolowe"><span>specjalistyczne, bębnowe o załadunku czołowym</span><b>PC</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#specjalne-boczne"><span>specjalistyczne, bębnowe o załadunku bocznym</span><b>PB</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="12" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Wirówki pralnicze
                    {activeHandySubmenu === "12" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "12" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/produkty/wirowki#wirowki">Wirówki</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wirówki#c8"><span>wirówka pralnicza</span><b>C8</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wirówki#wr"><span>wirówki pralnicze</span><b>WR</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="13" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Pralnicowirówki przemysłowe
                    {activeHandySubmenu === "13" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "13" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/produkty/pralnicowirowki#pralnicowirowki">Pralnicowirówki</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#normalnoobrotowe-pralma"><span>normalnoobrotowe</span><b>Pralma</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#normalnoobrotowe-rx"><span>normalnoobrotowe</span><b>RX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#szybkoobrotowe-rx"><span>szybkoobrotowe</span><b>RX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#wysokoobrotowe-fx"><span>wysokoobrotowe</span><b>FX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#wysokoobrotowe-fx350"><span>wysokoobrotowe</span><b>FX350/450/600</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#wysokoobrotowe-fsa"><span>wysokoobrotowe</span><b>FS</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#male-profesjonalne-sf"><span>małe, profesjonalne</span><b>SF</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#slupek-pralniczy-stw"><span>słupek pralniczy</span><b>STW10</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="14" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Suszarki bębnowe
                    {activeHandySubmenu === "14" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "14" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/produkty/suszarki#suszarki">Suszarki</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/suszarki#kompaktowe"><span>kompaktowe</span><b>TX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/suszarki#bębnowe-tx"><span>bębnowe</span><b>TX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/suszarki#bębnowe-dx"><span>bębnowe</span><b>DX</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">
                  
                  <button type="button" data-number-hs="15" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Magle
                    {activeHandySubmenu === "15" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "15" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/produkty/magle#magle">Magle przemysłowe</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#nieckowe-i25"><span>nieckowe</span><b>I25</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#nieckowe-i30"><span>nieckowe</span><b>I30</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-i33"><span>walcowe, suszące</span><b>I33</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-i50"><span>walcowe, suszące</span><b>I50</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-ir50"><span>walcowe, suszące</span><b>IR50</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-if50"><span>walcowe ze składarką wzdłużną</span><b>IF50</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-iff50"><span>walcowe ze składarką wzdłużną i wprowadzarką</span><b>IFF50</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#nieckowe-acl1"><span>nieckowe 1-walcowe</span><b>ACL</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#nieckowe-acl2"><span>nieckowe 2-walcowe</span><b>ACL</b></Link></li>
                      </ul>
                  </div>
                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="16" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Bariery higieny
                    {activeHandySubmenu === "16" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "16" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/produkty/bariery-higieny#bariery-higieny">Urządzenia do pralni z tzw. barierą higieny</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/bariery-higieny#normalnoobrotowe-bh"><span>normalnoobrotowe</span><b>BH</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/bariery-higieny#wysokoobrotowe-FXB"><span>wysokoobrotowe</span><b>FXB</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/bariery-higieny#wysokoobrotowe-MXB"><span>wysokoobrotowe</span><b>MXB</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/bariery-higieny#wysokoobrotowe-MB"><span>wysokoobrotowe</span><b>MB</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">
                
                  <button type="button" data-number-hs="17" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Prasowanie fasonowe
                    {activeHandySubmenu === "17" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "17" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/produkty/prasowanie-fasonowe#prasowanie-fasonowe">Zestawy do prasowania ręcznego, prasy</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/prasowanie-fasonowe#eb3"><span>zestaw do prasowania ręcznego</span><b>EB3</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/prasowanie-fasonowe#ecomatic"><span>zestaw do prasowania ręcznego</span><b>Ecomatic</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/prasowanie-fasonowe#wa1"><span>zestaw do prasowania ręcznego</span><b>WA-1</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/prasowanie-fasonowe#wa10"><span>zestaw do prasowania ręcznego</span><b>WA-10</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="18" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Wózki i regały
                    {activeHandySubmenu === "18" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "18" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/produkty/wozki-regaly#wozki-regaly">Sprzęt pomocniczy</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#ws150"><span>wózek na suche pranie</span><b>WS-150</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#wm150"><span>wózek na mokre pranie</span><b>WM-150</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#wst280"><span>wózek na suche pranie</span><b>WST-280</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#wst400"><span>wózek na suche pranie</span><b>WST-400</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#wpd400"><span>wózek z podnoszonym dnem</span><b>WPD-400</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#rs"><span>regał stacjonarny</span><b>RS</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#rj"><span>regał jezdny</span><b>RJ</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#wj"><span>wieszak jezdny</span><b>WJ</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#sm"><span>stół manipulacyjny</span><b>SM</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{;setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wozki-regaly#kj"><span>kontener jezdny</span><b>KJ</b></Link></li>
                      </ul>
                  </div>

                </li>
              </ul>
            </div>

          </li>
          <li className="menu__item">

            <button data-number-menu="2" onClick={(e)=>setActiveMenu(e.target.dataset.numberMenu)} type="button" className="menu-button">Rozwiązania specjalne<span className="pointer pointer--right"><KeyboardArrowRightIcon/></span></button>
            <div className={`submenu ${activeMenu === "2" ? "submenu--visible":"" }`}>
              <button type="button" onClick={()=>setActiveMenu("0")} className="menu-button menu-button--submenu">Rozwiązania specjalne<span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span></button>
              <ul className="submenu__list">
                <li className="submenu__item">
                  <button type="button" data-number-hs="21" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Pralnie samoobsługowe
                    {activeHandySubmenu === "21" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>

                  <div className={`handy-submenu ${activeHandySubmenu === "21" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setOpenNavigation(false)}} to="/rozwiazania-specjalne/samoobslugowe#samoobslugowe">Do samoobsługi</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-wysokoobrotowe"><span>pralnicowirówki wysokoobrotowe</span><b>FX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-normalnoobrotowe"><span>pralnicowirówki normalnoobrotowe</span><b>RX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-szybkoobrotowe"><span>pralnicowirówki szybkoobrotowe</span><b>RX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#suszarki-tx"><span>suszarki bębnowe</span><b>TX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#suszarki-dx"><span>suszarki bębnnowe</span><b>DX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#male-profesjonalne-sfc"><span>małe, profesjonalne pralnicowirówki</span><b>SFC</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#male-profesjonalne-sdc"><span>małe, profesjonalen suszarki</span><b>SDC</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#slupki-pralnicze-stwc"><span>słupki pralnicze</span><b>STWC10</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#slupki-pralnicze-stdc"><span>słupki pralnicze</span><b>STDC10</b></Link></li>
                      </ul>
                  </div>
                </li>
                <li className="submenu__item">
                  <button type="button" data-number-hs="22" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Służby cywilne (np. straż pożarna)
                    {activeHandySubmenu === "22" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "22" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setOpenNavigation(false)}} to="/rozwiazania-specjalne/sluzby-cywilne#sluzby-cywilne">Urządzenia dedykowane</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/sluzby-cywilne#suszarka-komorowa-fdc"><span>suszarka komorowa</span><b>FDC6</b></Link></li>
                      </ul>
                  </div>
                </li>
                <li className="submenu__item">
                  <button type="button" data-number-hs="23" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Urządzenia softwash
                    {activeHandySubmenu === "23" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "23" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setOpenNavigation(false)}} to="/rozwiazania-specjalne/softwash#softwash">Urządzenia softwash</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/softwash#pralnicowirowki"><span>pralnicowirówki wysokoobrotowe</span><b>SW</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/softwash#psuszarki-swt"><span>suszarki</span><b>SWT</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/softwash#psuszarki-swt-hp"><span>suszarki</span><b>SWT HP</b></Link></li>
                      </ul>
                  </div>
                </li>
              </ul>
            </div>

          </li>
          <li className="menu__item"><Link className="menu__link" to="/technologie">Technologie</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/akcesoria">Akcesoria</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/wiadomości">Wiadomości</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/kontakt">Kontakt</Link></li>
        </ul>
        {/** toggle button component */}
        <button className="toggle-btn toggle-btn--contact" type="button"><ContactMailIcon/></button>
      </div>
    </nav>
  );
}
export default Navigation;
