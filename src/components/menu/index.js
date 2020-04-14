import React, { useRef } from 'react';
import { Container } from './styles';
import { MdHome, MdAccountCircle, MdCode, MdInfoOutline } from 'react-icons/md';
import { FaLinkedin, FaFacebookSquare, FaInstagram} from 'react-icons/fa'
import { Link, Element } from "react-scroll";
import Skills from '../pages/skills/index';
import Experiences from '../pages/experiences/index';
import About from '../pages/about/index';
import CodingBackground from '../../assets/codingBackground.jpg';
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
                            <MdHome size="48" className="icons" color="white"/>
                            Principal
                        </Link>
                        <Link
                                className="menubuttons"
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration= {500}
                                onClick={onTabSelectionClick}
                            >
                            <MdCode size="48" className="icons" color="white"/>
                            Conhecimentos
                        </Link>
                        <Link
                                className="menubuttons"
                                activeClass="active"
                                to="experiences"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration= {500}
                                onClick={onTabSelectionClick}
                            >
                            <MdAccountCircle size="48" className="icons" color="white"/>
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
                            <MdInfoOutline size="48" className="icons" color="white"/>
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
                            <div id="social">
                                <FaLinkedin onTouchStart={() => handleSocialRedirectionMobile("linkedin")} onClick={() => window.open("http://www.linkedin.com/in/leonardo-zoccal-longato-320456148")} size="36"/>
                                <FaFacebookSquare onTouchStart={() => handleSocialRedirectionMobile("facebook")} onClick={() => window.open("https://www.facebook.com/leonardo.longato.9")} size="36"/>
                                <FaInstagram onTouchStart={() => handleSocialRedirectionMobile("instagram")} onClick={() => window.open("https://www.instagram.com/leolongato")} id="instagram" size="36"/>
                            </div>
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

