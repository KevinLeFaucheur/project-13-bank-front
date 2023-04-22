import React from 'react'
import styled from 'styled-components'
import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/Navbar'
import { Hero } from '../components/Hero'
import { Feature } from '../components/Feature'
import { features } from '../data/features'
import { H2 } from '../styles/Headers'

const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`

export const Home = () => {

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Section>
          <H2 textContent={'Features'} />
          <Feature feature={features[0]} />
          <Feature feature={features[1]} />
          <Feature feature={features[2]} />
        </Section>
        <Footer />
      </main>
    </div>
  )
}
