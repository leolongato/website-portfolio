import React from 'react';

import { Container } from './styles';
import Coding from '../../../assets/coding.png';
import { FaLinkedin, FaFacebookSquare, FaInstagram} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Bounce from 'react-reveal/Bounce';

export default function About() {
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
      <Bounce left>
        <img src={Coding} alt="" />
        <div id="description">
          <h1>Este site foi feito utilizando React JS com intuito de aprender novas tecnologias e divulgar meu portifolio.</h1>
          <div id="social">
            <FaLinkedin onTouchStart={() => handleSocialRedirectionMobile("linkedin")} onClick={() => window.open("http://www.linkedin.com/in/leonardo-zoccal-longato-320456148")} size="36"/>
            <FaFacebookSquare onTouchStart={() => handleSocialRedirectionMobile("facebook")} onClick={() => window.open("https://www.facebook.com/leonardo.longato.9")} size="36"/>
            <FaInstagram onTouchStart={() => handleSocialRedirectionMobile("instagram")} onClick={() => window.open("https://www.instagram.com/leolongato")} id="instagram" size="36"/>
            <MdEmail size="38" onClick={() => window.open("mailto:leonardolongato@gmail.com?&subject=&body=")}/>
          </div>
        </div>
      </Bounce>
    </Container>
  );
}
