import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid
const IndexPage = () => {
  return <Layout>
    <Hero />
  </Layout>
}

export default IndexPage
