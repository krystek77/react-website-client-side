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
          <li className="menu__item"><Link className="menu__link" to="/">O nas</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/">Klienci</Link></li>
          <li className="menu__item">
            <button name="1" onClick={(e)=>setActiveMenu(e.target.name)} type="button" className="menu-button">Produkty<span className="pointer pointer--right"><KeyboardArrowRightIcon/></span></button>
            <div className={`submenu ${activeMenu === "1" ? "submenu--visible":"" }`}>
              <button type="button" onClick={()=>setActiveMenu("0")} className="menu-button menu-button--submenu">Produkty<span className="pointer pointer--left"><KeyboardArrowLeftIcon/></span></button>
              <ul className="submenu__list">
                <li className="submenu__item">

                  <button type="button" data-number-hs="1" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Pralnice bębnowe
                    {activeHandySubmenu === "1" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "1" ? "handy-submenu--visible":""}`}>
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

                  <button type="button" data-number-hs="2" onClick={(e)=> setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Wirówki pralnicze
                    {activeHandySubmenu === "2" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "2" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/">Wirówki</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link className="handy-submenu__link" to="/">1</Link></li>
                        <li className="handy-submenu__item"><Link className="handy-submenu__link" to="/">2</Link></li>
                        <li className="handy-submenu__item"><Link className="handy-submenu__link" to="/">3</Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" data-number-hs="3" onClick={(e)=>setActiveHandySubmenu(e.target.dataset.numberHs)} className="menu-button">Pralnicowirówki przemysłowe
                    {activeHandySubmenu === "3" ? 
                    <span className="pointer pointer--up"><KeyboardArrowUp/></span>:
                    <span className="pointer pointer--down"><KeyboardArrowDown/></span>
                    }
                  </button>
                  <div className={`handy-submenu ${activeHandySubmenu === "3" ? "handy-submenu--visible":""}`}>
                      <Link className="handy-submenu__title" to="/">Pralnicowirówki</Link>
                      <ul className="handy-submenu__list">
                        <li className="handy-submenu__item"><Link className="handy-submenu__link" to="/">1</Link></li>
                        <li className="handy-submenu__item"><Link className="handy-submenu__link" to="/">2</Link></li>
                        <li className="handy-submenu__item"><Link className="handy-submenu__link" to="/">3</Link></li>
                      </ul>
                  </div>

                </li>
                <li className="submenu__item">

                  <button type="button" className="menu-button">Suszarki bębnowe<span className="pointer pointer--down"><KeyboardArrowDown/></span></button>

                </li>
                <li className="submenu__item">
                  
                  <button type="button" className="menu-button">Prasownice przemysłowe<span className="pointer pointer--down"><KeyboardArrowDown/></span></button>

                </li>
                <li className="submenu__item">

                  <button type="button" className="menu-button">Bariery higieny<span className="pointer pointer--down"><KeyboardArrowDown/></span></button>

                </li>
                <li className="submenu__item">

                  <button type="button" className="menu-button">Prasowanie fasonowe<span className="pointer pointer--down"><KeyboardArrowDown/></span></button>

                </li>
                <li className="submenu__item">

                  <button type="button" className="menu-button">Sprzęt pomocniczy<span className="pointer pointer--down"><KeyboardArrowDown/></span></button>
                  
                </li>
              </ul>
            </div>
          </li>
          <li className="menu__item"><button type="button" className="menu-button">Rozwiązania specjalne<span className="pointer pointer--right"><KeyboardArrowRightIcon/></span></button></li>
          <li className="menu__item"><Link className="menu__link" to="/">Technologie</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/">Akcesoria</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/">Wiadomości</Link></li>
        </ul>
        {/** toggle button component */}
        <button className="toggle-btn toggle-btn--contact" type="button"><ContactMailIcon/></button>
      </div>
    </nav>
  );
}
export default Navigation;
