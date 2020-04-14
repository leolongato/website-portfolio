import React from 'react';
import { Container } from './styles';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SkillCard({title, porcentage}) {
  return (
    <Container>
      <h1 id="title">{title}</h1>
      <CircularProgressbar className="progressBar" value={porcentage} text={`${porcentage}%`} />
    </Container>
  );
}
