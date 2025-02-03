import React from 'react'
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'
import  {Toaster} from 'react-hot-toast'
function Layout({children}) {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8'/>
       <title> My Title</title>
       </Helmet>
      <Header/>
      <main style={{minHeight:"70vh"}}>
        <Toaster />
      {children}
      </main>
      <Footer/>
      
    </div>
  )
}

export default Layout
