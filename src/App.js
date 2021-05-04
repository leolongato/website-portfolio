import React from "react";
import styled from "styled-components";
// import MenuBar from "./components/menu/index";
// import GlobalStyle from "./Global/GlobalStyle";

//import DemoCarousel from './components/carousel/index';

function App() {
  return (
    // <>
    <Container>
      <h1>Este site foi descontinuado.</h1>
      <a href="https://leonardolongato.vercel.app">
        Clique aqui para acessar a nova versão.
      </a>
    </Container>
    //<MenuBar />
    //<GlobalStyle />
    // </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
