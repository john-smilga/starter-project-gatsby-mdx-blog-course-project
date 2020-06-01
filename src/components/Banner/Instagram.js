import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
//...GatsbyImageSharpFluid

const Instagram = () => {
  return <Wrapper>Banner Instagram</Wrapper>
}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
