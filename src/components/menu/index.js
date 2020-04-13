import React, { useRef } from 'react';
import { Container } from './styles';
import { MdHome, MdAccountCircle, MdCode, MdInfoOutline } from 'react-icons/md';
import { FaLinkedin, FaFacebookSquare, FaInstagram} from 'react-icons/fa'
import { BrowserRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import Home from '../pages/home/index';
import Skills from '../pages/skills/index';
import Experiences from '../pages/experiences/index';
import About from '../pages/about/index';
import CodingBackground from '../../assets/codingBackground.jpg';


export default function MenuBar() {
    const btnToggle = useRef(null);
    const menuMobile = useRef(null);
    const onButtonClick = () => {
        menuMobile.current.classList.contains("ul-changedin") 
        ? menuMobile.current.classList.toggle("ul-changedout")
        :  menuMobile.current.classList.toggle("ul-changedin")
        
        
        menuMobile.current.classList.toggle("menuMobileSize");
        btnToggle.current.classList.toggle("change");
    };

    const onTabSelectionClick = () => {
        if (menuMobile.current.classList.contains("ul-changedin")){
            menuMobile.current.classList.toggle("ul-changedout");
            menuMobile.current.classList.toggle("menuMobileSize");
            btnToggle.current.classList.toggle("change");
        }
    };

  return (
      <Container>
          <Router>
          <Redirect exact from="/" to="/Principal" />
            <div id="menu-div">
                <div ref={btnToggle} class="container" onClick={onButtonClick}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <ul id="menu" ref={menuMobile}>
                <Link class="menubuttons" to="/Principal" onClick={onTabSelectionClick}>
                    <MdHome size="48" class="icons" color="white"/>
                    Principal
                </Link>
                <Link class="menubuttons" to="/Conhecimentos" onClick={onTabSelectionClick}>
                    <MdCode size="48" class="icons" color="white"/>
                    Conhecimentos
                </Link>
                <Link class="menubuttons" to="/Experiencias" onClick={onTabSelectionClick}>
                    <MdAccountCircle size="48" class="icons" color="white"/>
                    Experiências
                </Link>
                <Link class="menubuttons" to="/Sobre" onClick={onTabSelectionClick}>
                    <MdInfoOutline size="48" class="icons" color="white"/>
                    Sobre
                </Link>
                </ul>
            </div>



            <div id="body-div">
                <div id="box">
                    <img id="codingPic" src={CodingBackground} alt="" />
                    <div class="text">
                        <h4 id="text1">Olá, me chamo</h4>
                        <h1>Leonardo Zoccal Longato</h1>
                        <h4 id="text2">e sou um estudante e entusiasta de tecnologia</h4>
                        <div id="social">
                            <FaLinkedin size="36"/>
                            <FaFacebookSquare size="36"/>
                            <FaInstagram id="instagram" size="36"/>
                        </div>
                    </div>          
                </div>
                <Switch>
                    <Route exact path="/Principal">
                        <Home />
                    </Route>
                    <Route exact path="/Conhecimentos">
                        <Skills />
                    </Route>
                    <Route exact path="/Experiencias">
                        <Experiences />
                    </Route>
                    <Route exact path="/Sobre">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
      </Container>

  );
}

