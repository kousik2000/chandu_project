import React from 'react'
import Navbar from '../Navbar'

const Contractors = () => {
  return (
    <div className="bg-container">
      <Navbar/>
      <hr className="line"/>
      <section className="hero-section">
      
        <div className="hero-description-container ">
        
        <div className='hero-description animate__animated animate__fadeInLeft'>
        <h1 className='hero-title '><span className='hero-title-span'>B</span>uild + <span className='hero-title-span'>A</span>rchExcellence</h1>
                    <p className='description'>Building the future with precision and passion, With our team of skilled builders and close collaboration with architects, we are dedicated to delivering exceptional construction projects from the initial stages to the final state.</p>
                    <button className='button' >Contact Us</button>
                </div>
                <img src="/ezgif.gif" alt="gif" className='gif animate__animated animate__fadeIn'/>
            </div>
            
        </section>
    </div>
  )
}

export default Contractors