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
  const [isOpen,setIsopen]=React.useState(false);
  const toggle=()=>{
    setIsopen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>

      <main>{children}</main>
      <Footer/>
      {/* <Footer/> */}
    </>
  )
}

export default Layout
