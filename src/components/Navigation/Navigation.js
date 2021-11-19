/* eslint-disable no-unused-vars */

import React,{useState,useEffect} from 'react';
import {Link, NavLink,useLocation} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

import './Navigation.css';

function Navigation() {
  const [openNavigation,setOpenNavigation] = useState(false);
  const [activeMenu,setActiveMenu] = useState("0");
  const [activeHandySubmenu,setActiveHandySubmenu] = useState("0");
  const location = useLocation();

  function toggleMenu(){
    setOpenNavigation(!openNavigation);
  }
  if(openNavigation){
    document.body.classList.add("no-scroll-mobile");
  } else {
    document.body.classList.remove('no-scroll-mobile');
  }

  console.log("[Navigation.js] - render");
  useEffect(()=>{
    setActiveMenu("0");
  },[location]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/** logo component */}
        <div className="logo"><Link to="/" onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="logo__text">LOGO</Link></div>
        {/** toggle button component */}
        <button className="hamburger" type="button" onClick={toggleMenu}>{openNavigation ? <MenuOpenIcon/>:<MenuIcon/>}</button> 
      </div>
      <div className={`navbar__menu ${openNavigation ? "navbar__menu--visible":""}`}>
        <ul className="menu">
          <li className="menu__item"><NavLink className={`menu__link ${activeMenu==="3"?"active":""}`} onClick={()=>{setActiveMenu("3");setOpenNavigation(false);setActiveHandySubmenu("0")}} to="/o-nas">O nas</NavLink></li>
          <li className="menu__item"><NavLink className={`menu__link ${activeMenu==="4"?"active":""}`} onClick={()=>{setActiveMenu("4");setOpenNavigation(false);setActiveHandySubmenu("0")}} to="/klienci">Klienci</NavLink></li>
          <li className="menu__item">

            <button data-number-menu="1" onClick={(e)=>{setActiveMenu(e.target.dataset.numberMenu);setActiveHandySubmenu("11")}} className={`menu__link menu__link--button menu__link--pointer ${activeHandySubmenu >="11" && activeHandySubmenu <"21" && activeMenu==="0" ? "active":""}`}>Produkty
              <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
              {activeMenu === "1" ? <span className="pointer pointer--up"><KeyboardArrowUp/></span>:<span className="pointer pointer--down"><KeyboardArrowDown/></span> }
            </button>
            <div className={`submenu ${activeMenu=== "1" ? "submenu--visible":"" }`}>
              <button type="button" onClick={()=>{setActiveHandySubmenu("0");setActiveMenu("0");setOpenNavigation(false)}} className="menu-button menu-button--submenu">Produkty<span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span></button>
              <ul className="submenu__list">
                <li className="submenu__item">

                  <button type="button" data-number-hs="11" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="11" ? 'active':''}`}>Pralnice bębnowe
                    {activeHandySubmenu === "11" ? 
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "11" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/produkty/pralnice#pralnice">Pralnice</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#czolowe-pb"><span>bębnowe o załadunku czołowym</span><b>PB</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#czolowe-pc"><span>bębnowe o załadunku czołowym</span><b>PC</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#boczne"><span>bębnowe o załadunku bocznym</span><b>BP</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#specjalne-czolowe"><span>specjalistyczne, bębnowe o załadunku czołowym</span><b>PC</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnice#specjalne-boczne"><span>specjalistyczne, bębnowe o załadunku bocznym</span><b>PB</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="12" onClick={(e)=> {setActiveHandySubmenu(e.target.dataset.numberHs)}} className={`menu-button ${activeHandySubmenu==="12" ? 'active':''}`}>Wirówki pralnicze
                    {activeHandySubmenu === "12" ? 
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "12" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title"  onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/produkty/wirowki#wirowki">Wirówki</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wirówki#c8"><span>wirówka pralnicza</span><b>C8</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/wirówki#wr"><span>wirówki pralnicze</span><b>WR</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="13" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="13" ? 'active':''}`}>Pralnicowirówki przemysłowe
                    {activeHandySubmenu === "13" ? 
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                  </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "13" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/produkty/pralnicowirowki#pralnicowirowki">Pralnicowirówki</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#normalnoobrotowe-pralma"><span>normalnoobrotowe</span><b>Pralma</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#normalnoobrotowe-rx"><span>normalnoobrotowe</span><b>RX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#szybkoobrotowe-rx"><span>szybkoobrotowe</span><b>RX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#wysokoobrotowe-fx"><span>wysokoobrotowe</span><b>FX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#wysokoobrotowe-fx350"><span>wysokoobrotowe</span><b>FX350/450/600</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#wysokoobrotowe-fsa"><span>wysokoobrotowe</span><b>FS</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#male-profesjonalne-sf"><span>małe, profesjonalne</span><b>SF</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/pralnicowirowki#slupek-pralniczy-stw"><span>słupek pralniczy</span><b>STW10</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="14" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="14" ? 'active':''}`}>Suszarki bębnowe
                    {activeHandySubmenu === "14" ?                     
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "14" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/produkty/suszarki#suszarki">Suszarki</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/suszarki#kompaktowe"><span>kompaktowe</span><b>TX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/suszarki#bębnowe-tx"><span>bębnowe</span><b>TX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/suszarki#bębnowe-dx"><span>bębnowe</span><b>DX</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">
                  
                  <button type="button" data-number-hs="15" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="15" ? 'active':''}`}>Magle
                    {activeHandySubmenu === "15" ?                     
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "15" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/produkty/magle#magle">Magle przemysłowe</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#nieckowe-i25"><span>nieckowe</span><b>I25</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#nieckowe-i30"><span>nieckowe</span><b>I30</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-i33"><span>walcowe, suszące</span><b>I33</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-i50"><span>walcowe, suszące</span><b>I50</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-ir50"><span>walcowe, suszące</span><b>IR50</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-if50"><span>walcowe ze składarką wzdłużną</span><b>IF50</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#walcowe-iff50"><span>walcowe ze składarką wzdłużną i wprowadzarką</span><b>IFF50</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#nieckowe-acl1"><span>nieckowe 1-walcowe</span><b>ACL</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/magle#nieckowe-acl2"><span>nieckowe 2-walcowe</span><b>ACL</b></Link></li>
                      </ul>
                  </div>
                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="16" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="16" ? 'active':''}`}>Bariery higieny
                    {activeHandySubmenu === "16" ?                     
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "16" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/produkty/bariery-higieny#bariery-higieny">Urządzenia do pralni z tzw. barierą higieny</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/bariery-higieny#normalnoobrotowe-bh"><span>normalnoobrotowe</span><b>BH</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/bariery-higieny#wysokoobrotowe-FXB"><span>wysokoobrotowe</span><b>FXB</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/bariery-higieny#wysokoobrotowe-MXB"><span>wysokoobrotowe</span><b>MXB</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/bariery-higieny#wysokoobrotowe-MB"><span>wysokoobrotowe</span><b>MB</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">
                
                  <button type="button" data-number-hs="17" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="17" ? 'active':''}`}>Prasowanie fasonowe
                    {activeHandySubmenu === "17" ?                     
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "17" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/produkty/prasowanie-fasonowe#prasowanie-fasonowe">Zestawy do prasowania ręcznego, prasy</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/prasowanie-fasonowe#eb3"><span>zestaw do prasowania ręcznego</span><b>EB3</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/prasowanie-fasonowe#ecomatic"><span>zestaw do prasowania ręcznego</span><b>Ecomatic</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/prasowanie-fasonowe#wa1"><span>zestaw do prasowania ręcznego</span><b>WA-1</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/produkty/prasowanie-fasonowe#wa10"><span>zestaw do prasowania ręcznego</span><b>WA-10</b></Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="18" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="18" ? 'active':''}`}>Wózki i regały
                    {activeHandySubmenu === "18" ?                     
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "18" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} to="/produkty/wozki-regaly#wozki-regaly">Sprzęt pomocniczy</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#ws150"><span>wózek na suche pranie</span><b>WS-150</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#wm150"><span>wózek na mokre pranie</span><b>WM-150</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#wst280"><span>wózek na suche pranie</span><b>WST-280</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#wst400"><span>wózek na suche pranie</span><b>WST-400</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#wpd400"><span>wózek z podnoszonym dnem</span><b>WPD-400</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#rs"><span>regał stacjonarny</span><b>RS</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#rj"><span>regał jezdny</span><b>RJ</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#wj"><span>wieszak jezdny</span><b>WJ</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#sm"><span>stół manipulacyjny</span><b>SM</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/produkty/wozki-regaly#kj"><span>kontener jezdny</span><b>KJ</b></Link></li>
                      </ul>
                  </div>

                </li>
              </ul>
            </div>

          </li>
          <li className="menu__item">

            <button data-number-menu="2" onClick={(e)=>{setActiveMenu(e.target.dataset.numberMenu);setActiveHandySubmenu("21")}} className={`menu__link menu__link--button menu__link--pointer ${activeHandySubmenu >="21" && activeMenu==="0" ? "active":""}`}>Dedykowane
              <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
              {activeMenu === "2" ? <span className="pointer pointer--up"><KeyboardArrowUp/></span>: <span className="pointer pointer--down"><KeyboardArrowDown/></span> }
            </button>
            <div className={`submenu ${activeMenu === "2" ? "submenu--visible":"" }`}>
              <button type="button" onClick={()=>{setActiveMenu("0");setActiveHandySubmenu("0");setOpenNavigation(false)}} className="menu-button menu-button--submenu">Rozwiązania specjalne<span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span></button>
              <ul className="submenu__list">
                <li className="submenu__item">
                  <button type="button" data-number-hs="21" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="21" ? 'active':''}`}>Pralnie samoobsługowe
                    {activeHandySubmenu === "21" ?                     
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>

                  <div className={`handy-submenu ${activeHandySubmenu === "21" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/rozwiazania-specjalne/samoobslugowe#samoobslugowe">Do samoobsługi</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-wysokoobrotowe"><span>pralnicowirówki wysokoobrotowe</span><b>FX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-normalnoobrotowe"><span>pralnicowirówki normalnoobrotowe</span><b>RX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#pralnicowirowki-szybkoobrotowe"><span>pralnicowirówki szybkoobrotowe</span><b>RX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#suszarki-tx"><span>suszarki bębnowe</span><b>TX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#suszarki-dx"><span>suszarki bębnnowe</span><b>DX</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#male-profesjonalne-sfc"><span>małe, profesjonalne pralnicowirówki</span><b>SFC</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#male-profesjonalne-sdc"><span>małe, profesjonalen suszarki</span><b>SDC</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#slupki-pralnicze-stwc"><span>słupki pralnicze</span><b>STWC10</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/samoobslugowe#slupki-pralnicze-stdc"><span>słupki pralnicze</span><b>STDC10</b></Link></li>
                      </ul>
                  </div>
                </li>
                <li className="submenu__item">
                  <button type="button" data-number-hs="22" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="22" ? 'active':''}`}>Służby cywilne (np. straż pożarna)
                    {activeHandySubmenu === "22" ?                     
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "22" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} to="/rozwiazania-specjalne/sluzby-cywilne#sluzby-cywilne">Urządzenia dedykowane</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{setActiveMenu("0");setOpenNavigation(false)}} className="handy-submenu__link" to="/rozwiazania-specjalne/sluzby-cywilne#suszarka-komorowa-fdc"><span>suszarka komorowa</span><b>FDC6</b></Link></li>
                      </ul>
                  </div>
                </li>
                <li className="submenu__item">
                  <button type="button" data-number-hs="23" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className={`menu-button ${activeHandySubmenu==="23" ? 'active':''}`}>Urządzenia softwash
                    {activeHandySubmenu === "23" ?                     
                    <React.Fragment>
                      <span className="pointer pointer--up"><KeyboardArrowUp/></span>
                      <span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span>
                    </React.Fragment>:
                    <React.Fragment>
                      <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                      <span className="pointer pointer--right"><KeyboardArrowRightIcon/></span>
                    </React.Fragment>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "23" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" onClick={()=>{ setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} to="/rozwiazania-specjalne/softwash#softwash">Urządzenia softwash</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link onClick={()=>{ setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/rozwiazania-specjalne/softwash#pralnicowirowki"><span>pralnicowirówki wysokoobrotowe</span><b>SW</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{ setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/rozwiazania-specjalne/softwash#psuszarki-swt"><span>suszarki</span><b>SWT</b></Link></li>
                        <li className="handy-submenu__item"><Link onClick={()=>{ setActiveMenu("0");setOpenNavigation(false);setActiveHandySubmenu("0")}} className="handy-submenu__link" to="/rozwiazania-specjalne/softwash#psuszarki-swt-hp"><span>suszarki</span><b>SWT HP</b></Link></li>
                      </ul>
                  </div>
                </li>
              </ul>
            </div>

          </li>
          <li className="menu__item"><NavLink className={`menu__link ${activeMenu==="5"?"active":""}`} onClick={()=>{setActiveMenu("5");setOpenNavigation(false);setActiveHandySubmenu("0")}} to="/technologie">Technologie</NavLink></li>
          <li className="menu__item"><NavLink className={`menu__link ${activeMenu==="6"?"active":""}`} onClick={()=>{setActiveMenu("6");setOpenNavigation(false);setActiveHandySubmenu("0")}} to="/dodatkowe-wyposazenie">Akcesoria</NavLink></li>
          <li className="menu__item"><NavLink className={`menu__link ${activeMenu==="7"?"active":""}`} onClick={()=>{setActiveMenu("7");setOpenNavigation(false);setActiveHandySubmenu("0")}} to="/wiadomosci">Wiadomości</NavLink></li>
          <li className="menu__item"><NavLink className={`menu__link ${activeMenu==="8"?"active":""}`} onClick={()=>{setActiveMenu("8");setOpenNavigation(false);setActiveHandySubmenu("0")}} to="/kontakt">Kontakt</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
