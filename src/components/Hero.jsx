import React from 'react';
import styled from 'styled-components';
import bankTree from '../images/bank-tree.jpeg';

const HeroWrapper = styled.div`
  background-image: url(${props => props.background});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  .hero-content {
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
  }

  .hero-content .subtitle {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
  }

  .hero-content .text {
    margin-bottom: 0;
    font-size: 0.9rem;
  }

  @media (min-width: 920px) {
    .hero {
      height: 400px;
      background-position: 0% 33%;
    }

    .hero-content {
      position: absolute;
      top: 50px;
      right: 50px;
      width: 300px;
      margin: 2rem;
    }

    .hero-content .subtitle {
      font-size: 1.5rem;
    }

    .hero-content .text {
      font-size: 1.2rem;
    }
  }
`

export const Hero = () => {
  return (
    <HeroWrapper background={bankTree} >
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </HeroWrapper>
  )
}
