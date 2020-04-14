import React from 'react';
import { Container } from './styles';
import { MdLocationOn, MdPermIdentity } from 'react-icons/md'
import { AiFillPrinter } from 'react-icons/ai'
import { GiHistogram } from 'react-icons/gi'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Experiences() {
  return (
    <Container>
      <h1>Experiências</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', borderTop: '3px solid #607B8B'}}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="Desde Março/2019"
          iconStyle={{ background: 'white', color: '#fff' }}
          icon={<GiHistogram color="#607B8B" size="36"/>}
        >
          <h2 onClick={() => window.open("https://www.itauassetmanagement.com.br")} style={{color: "#607B8B"}}>Itaú Asset Management</h2>
          <h3 className="vertical-timeline-element-title"><MdPermIdentity />Estagiário - T.I</h3>
          <h4 className="vertical-timeline-element-subtitle"><MdLocationOn color="red"/>Itaim Bibi - SP</h4>
          <p>
            Acompanhamento do sistema de negócios Charles River; Projetos voltados a correções, automações e melhorias no sistema utilizando C#; 
            Criação e monitoramento das ferramentas do sistema; Auxiliar na criação e alimentação dos bancos de dados do Charles River;
            Elaborar a criação/automação de interfaces dos trades para o sistema de post-trade/custódia; Acompanhar com suporte 
            as rotinas dos Gestores de Fundo/Trading; Auxiliar na condução e acompanhamento de Projetos da Itaú Asset;
            Acompanhamento supervisionado na elaboração e automação de relatórios; Auxiliar na elaboração de documentos e planilhas.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'black', borderTop: '3px solid darkorange' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="Abril/2018 - Fevereiro/2019"
          iconStyle={{ background: 'white', color: '#fff' }}
          icon={<AiFillPrinter color="darkorange" size="36"/>}
        >
          <h2 onClick={() => window.open("https://www.infodigitus.com.br/")} style={{color: "darkorange"}}>Info Digitus</h2>
          <h3 className="vertical-timeline-element-title"><MdPermIdentity />Programador</h3>
          <h4 className="vertical-timeline-element-subtitle"><MdLocationOn color="red"/>Vila Mariana, SP</h4>
          <p>
          Desenvolvimento e suporte de programas feitos em C# para tratamento de arquivos e geração de documentos 
          (boletos, holerites etc).
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}
