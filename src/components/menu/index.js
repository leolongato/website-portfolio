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
import WebSiteIcon from '../../assets/web-icon.png';

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

    const handleSocialRedirectionMobile = (data) => {
        switch (data) {
            case "linkedin":
                var linkedindestination = "https://br.linkedin.com/in/leonardo-zoccal-longato-320456148?trk=profile-badge"
                if( navigator.userAgent.match(/Android/i) ) {
                    document.location = linkedindestination;   
                }
                else {
                    window.location.replace(linkedindestination);
                }
                break;
            case "facebook":
                var facedestination = "fb://profile/100002061173178";
                if( navigator.userAgent.match(/Android/i) ) {
                    document.location = facedestination;   
                }
                else {
                    window.location.replace(facedestination);
                }
                break;
            case "instagram":
                var instadestination = "instagram://user?username=leolongato"; 
                if(navigator.userAgent.match(/Android/i) ) {
                    document.location = instadestination;   
                }   
                else {
                    window.location.replace(instadestination);
                }
                break;
            default:
                break;
        }
    }

  return (
      <Container>
          <Router>
          <Redirect exact from="/" to="/Principal" />
            <div id="menu-div">
                <div ref={btnToggle} className="container" onClick={onButtonClick}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul id="menu" ref={menuMobile}>
                    <Link className="menubuttons" to="/Principal" onClick={onTabSelectionClick}>
                        <MdHome size="48" className="icons" color="white"/>
                        Principal
                    </Link>
                    <Link className="menubuttons" to="/Conhecimentos" onClick={onTabSelectionClick}>
                        <MdCode size="48" className="icons" color="white"/>
                        Conhecimentos
                    </Link>
                    <Link className="menubuttons" to="/Experiencias" onClick={onTabSelectionClick}>
                        <MdAccountCircle size="48" className="icons" color="white"/>
                        Experiências
                    </Link>
                    <Link className="menubuttons" to="/Sobre" onClick={onTabSelectionClick}>
                        <MdInfoOutline size="48" className="icons" color="white"/>
                        Sobre
                    </Link>
                </ul>
                <img id="websiteicon" src={WebSiteIcon} alt="" />
            </div>



            <div id="body-div">
                <div id="box">
                    <img id="codingPic" src={CodingBackground} alt="" />
                    <div className="text">
                        <h4 id="text1">Olá, me chamo</h4>
                        <h1>Leonardo Zoccal Longato</h1>
                        <h4 id="text2">e sou um estudante e entusiasta de tecnologia</h4>
                        <div id="social">
                            <FaLinkedin onTouchStart={() => handleSocialRedirectionMobile("linkedin")} onClick={() => window.open("http://www.linkedin.com/in/leonardo-zoccal-longato-320456148")} size="36"/>
                            <FaFacebookSquare onTouchStart={() => handleSocialRedirectionMobile("facebook")} onClick={() => window.open("https://www.facebook.com/leonardo.longato.9")} size="36"/>
                            <FaInstagram onTouchStart={() => handleSocialRedirectionMobile("instagram")} onClick={() => window.open("https://www.instagram.com/leolongato")} id="instagram" size="36"/>
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

