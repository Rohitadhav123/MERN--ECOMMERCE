import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-dark text-light p-3'>
      <h4 className='text-center'>All Right Reserved &copy: Techinfoyt</h4>
      <p className="text-center mt-3">
      <Link to={"/about"}>About</Link>
      |
      <Link to={"/contact"}>Contact</Link>
      |
      <Link to={"/policy"}>Policy</Link>
      
         </p>
      

    </div>
  )
}

export default Footer
