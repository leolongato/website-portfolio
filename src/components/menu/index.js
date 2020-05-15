import React, { useRef } from 'react';
import { Container } from './styles';
import { MdHome, MdAccountCircle, MdCode, MdInfoOutline } from 'react-icons/md';
import { Link, Element } from "react-scroll";
import Skills from '../pages/skills/index';
import Experiences from '../pages/experiences/index';
import About from '../pages/about/index';
import CodingBackground from '../../assets/binarybackground.jpg';
import WebSiteIcon from '../../assets/web-icon.png';
import Zoom from 'react-reveal/Zoom';

export default function MenuBar() {

    const btnToggle = useRef(null);
    const menuMobile = useRef(null);

    const onButtonClick = () => {
        menuMobile.current.classList.toggle("ul-changedin");
        menuMobile.current.classList.toggle("menuMobileSize");
        btnToggle.current.classList.toggle("change");
    };

    const onTabSelectionClick = () => {
        menuMobile.current.classList.toggle("ul-changedin");
        menuMobile.current.classList.toggle("menuMobileSize");
        btnToggle.current.classList.toggle("change");
    };

  return (
      <Container>
            <div id="menu-div">
                <div ref={btnToggle} className="container" onClick={onButtonClick}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                    <ul id="menu" ref={menuMobile}>
                        <Link
                                className="menubuttons"
                                activeClass="active"
                                to="topMenu"
                                spy={true}
                                smooth={true}
                                duration= {500}
                                onClick={onTabSelectionClick}
                            >
                            <MdHome size="48" className="icons"/>
                            Principal
                        </Link>
                        <Link
                                className="menubuttons"
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration= {500}
                                onClick={onTabSelectionClick}
                            >
                            <MdCode size="48" className="icons"/>
                            Conhecimentos
                        </Link>
                        <Link
                                className="menubuttons"
                                activeClass="active"
                                to="experiences"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration= {500}
                                onClick={onTabSelectionClick}
                            >
                            <MdAccountCircle size="48" className="icons"/>
                            Experiências
                        </Link>
                        <Link
                                className="menubuttons"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                onClick={onTabSelectionClick}
                            >
                            <MdInfoOutline size="48" className="icons"/>
                            Sobre
                        </Link>
                    </ul>
                <img id="websiteicon" src={WebSiteIcon} alt="" />
            </div>           

            <div id="body-div">
                <div id="box">
                    <Element id="topElement" name="topMenu" className="element" ></Element>
                    <img id="codingPic" src={CodingBackground} alt="" />
                    <Zoom left>
                        <div className="text">
                            <h4 id="text1">Olá, me chamo</h4>
                            <h1>Leonardo Zoccal Longato</h1>
                            <h4 id="text2">tenho 20 anos e sou um estudante e entusiasta de tecnologia!</h4>
                        </div>          
                    </Zoom>
                </div>
                <Element name="skills" className="element" ><Skills/></Element>
                <Element name="experiences" className="element" ><Experiences /></Element>           
                <Element name="about" className="element" ><About /></Element>           
            </div>
      </Container>

  );
}

