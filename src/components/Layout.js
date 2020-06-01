/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <>
      <h2>layout component</h2>
      <main>{children}</main>
    </>
  )
}

export default Layout
