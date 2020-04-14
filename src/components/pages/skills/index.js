import React from 'react';
import { Container } from './styles';

import Flip from 'react-reveal/Flip';

import SkillCard from '../../SkillCard/index';
import CSharp from '../../../assets/csharp.png'
import Excel from '../../../assets/excel.png'
import Html from '../../../assets/html.png'
import Nodejs from '../../../assets/nodejs.png'
import Python from '../../../assets/python.png'
import Reactjs from '../../../assets/reactjs.png'
import Sql from '../../../assets/sql.png'
import CSS from '../../../assets/css.png'

export default function Skills() {
  return (
    <Container>
      <h1>Conhecimentos</h1>
      <div>
        <Flip left>
        <div className="card"><img className="icons" src={CSharp} alt=""/><SkillCard title="C#" porcentage={90}/></div>
        <div className="card"><img className="icons" src={Excel} alt=""/><SkillCard title="Excel VBA" porcentage={90}/></div>
        <div className="card"><img className="icons" src={Sql} alt=""/><SkillCard title="SQL" porcentage={75}/></div>
        <div className="card"><img className="icons" src={Python} alt=""/><SkillCard title="Python" porcentage={60}/></div>
        <div className="card"><img className="icons" src={Nodejs} alt=""/><SkillCard title="Node Js" porcentage={60}/></div>
        <div className="card"><img className="icons" src={Reactjs} alt=""/><SkillCard title="React Js" porcentage={50}/></div>
        <div className="card"><img className="icons" src={Html} alt=""/><SkillCard title="HTML" porcentage={75}/></div>
        <div className="card"><img className="icons" src={CSS} alt=""/><SkillCard title="CSS" porcentage={75}/></div>
        </Flip>
      </div>
    </Container>
  );
}
