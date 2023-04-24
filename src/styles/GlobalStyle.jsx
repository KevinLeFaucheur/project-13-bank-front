import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body, #root {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex: 1;
  }

  .bg-dark {
    background-color: #12002b;
  }
`