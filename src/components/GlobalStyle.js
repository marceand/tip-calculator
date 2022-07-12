import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1500px){
            font-size: 75%;
        }
    }

    body{
        background: #1BB1AA;
        font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyle;
