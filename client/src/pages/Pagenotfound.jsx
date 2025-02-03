import React from 'react'
import Layout from '../component/layout/layout'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
   <Layout>
    <div className='pnf'>
    <h1 className='pnf-title'>404</h1>
    <h2 className='pnf-headiing'> Oops ! Page Not Found</h2>
    <Link to={"/"} className='pnf-btn'>Go back</Link>
    </div>
   </Layout>
  )
}

export default Pagenotfound
