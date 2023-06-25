import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        max-width : 1920px;
        min-width : 1080px;
        margin : 0 auto;
     }
`;

export default GlobalStyle;
