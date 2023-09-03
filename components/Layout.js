import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>E-Library</title>
        <icon rel="icon" href="/favicon.ico"/>
      </Head>
      <Header />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout