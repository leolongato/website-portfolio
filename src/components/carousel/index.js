import React from 'react';
import { Container } from './styles';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Teste from '../../assets/1.jpg'

export default function DemoCarousel(){
    return (
        <Container>
            <div id="carousel">
                <Carousel showThumbs={false} autoPlay="true" infiniteLoop={true} interval={5000}>
                    <div>
                        <img src={Teste} alt=""/>
                    </div>
                    <div>
                        <img src={Teste} alt=""/>
                    </div>
                    <div>
                        <img src={Teste} alt=""/>
                    </div>
                </Carousel>
            </div>
        </Container>
    );
};
