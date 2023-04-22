import React from 'react'
import styled from 'styled-components'

const style = `
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`

const H1Wrapper = styled.h1`
  ${style}
`

const H2Wrapper = styled.h2`
  ${style}
`

const H3Wrapper = styled.h3`
  ${style}
`

export const H1 = ({ textContent }) => {
  return (
    <H1Wrapper>{textContent}</H1Wrapper>
  )
}


export const H2 = ({ textContent }) => {
  return (
    <H2Wrapper>{textContent}</H2Wrapper>
  )
}


export const H3 = ({ textContent }) => {
  return (
    <H3Wrapper>{textContent}</H3Wrapper>
  )
}