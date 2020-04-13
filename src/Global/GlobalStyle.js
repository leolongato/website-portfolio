import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-rendering: antialiased;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Baloo Paaji 2', cursive;
        /*font-family: 'Roboto', sans-serif;*/
        font-size: 18px;
    }
`;
