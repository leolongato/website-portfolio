import React from 'react';
import { Container } from './styles';
import Foto from '../../../assets/1.jpg'

export default function HomeBackground() {
  return (
    <Container>
      <div>
        <img id="profilePic" src={Foto} alt="" />
      </div>
      <div id="separator"></div>
      <div id="profileContent">
        <h1>teste</h1>
      </div>
    </Container>
  );
}
