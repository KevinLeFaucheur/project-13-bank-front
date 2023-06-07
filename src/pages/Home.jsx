import styled from 'styled-components'
import { Layout } from '../layout/Layout'
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
    <Layout>
      <main>
        <Hero />
        <Section>
          <H2>Features</H2>
          {features.map((feature, index) => <Feature key={index} feature={feature} /> )}
        </Section>
      </main>
    </Layout>
  )
}
