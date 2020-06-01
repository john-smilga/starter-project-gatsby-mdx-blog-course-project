import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'
//...GatsbyImageSharpFixed

const About = () => {
  return <Wrapper>Banner About</Wrapper>
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
