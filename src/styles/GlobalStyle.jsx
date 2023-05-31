import styled, { createGlobalStyle } from "styled-components";

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

export const Separator = styled.div`
  display: none;
  width: 100%;
  height: 1px;
  margin: 5px 0;
  background-color: #cecece;

  @media (max-width: 720px) {
    display: block;
  }
`