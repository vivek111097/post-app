import React from 'react'
import MainNavigation from './main-navigatio'

const Layout = (props) => {
  return (
    <>
    <MainNavigation/>
    <main>{props.children}</main>
    </>
  )
}

export default Layout