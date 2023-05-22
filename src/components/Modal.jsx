import React from 'react';
import styled from 'styled-components';
import { Transaction } from './Transaction';

const Background = styled.div`
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &.open {
    visibility: visible;
  }
`

const Dialog = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  width: 80%;
  /* background-color: rgba(#2c3e50, 1); */
  background-color: #FFF;
`

const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 5px;
`

export const Modal = ({ transaction}) => {

  const close = () => {
    document.getElementById('modal').classList.remove('open');
  }

  return (
    <Background id='modal'>
      <Dialog>
        <div id='modal-header'>
          <p>Transaction:</p>
          <Button onClick={close} className="fa fa-regular fa-eye"></Button>
        </div>
        <div id='modal-body'>
          <Transaction transaction={transaction} /> 
        </div>
      </Dialog>
    </Background>
  )   
}
