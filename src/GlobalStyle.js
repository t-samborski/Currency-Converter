import { createGlobalStyle } from "styled-components";
import background from "./background-image.jpg"

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
box-sizing: inherit;
}

body {   
    font-family: Arial, Helvetica, sans-serif;
    background-image: url("${background}");
    background-size: cover;
    }

`