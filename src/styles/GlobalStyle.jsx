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

export const GlobalButton = styled.button`
  cursor: pointer;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #FFF;
  font-weight: bold;
  min-width: 100px;
`

export const GlobalInput = styled.input`
  font-weight: bold;
  padding: 2px;
  width: 30%;

  &::placeholder {
    font-weight: 300;
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

export const GlobalError = styled.p`
  background-color: #FFF;
  color: #990000;
  padding: 10px;
  margin: 1rem auto;
  width: 300px;
`

export const GlobalIcon = styled.i`
  cursor: pointer;

  &.collapse--icon {
    position: absolute;
    top: 0.7rem;
    left: 1.4rem;
    font-size: 1.5rem;
    font-weight: 800;

    @media (max-width: 720px) {
      display: none;
    }
  }
  &.modal--icon {
    position: absolute;
    top: 0.7rem;
    right: 1.4rem;  
    font-size: 1rem;

    @media (max-width: 720px) {
      top: 0.9rem;
      right: 0.9rem; 
    }
  }
  &.modalClose--icon {
    position: absolute;
    top: 1.6rem;
    right: 1.4rem;  
    font-size: 1rem;

    @media (max-width: 720px) {
      right: 1rem; 
    }
  }
  &.pen--icon {
    font-size: 1rem;
    margin: 0 0.5rem;
  }
`