import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import ContractorsProjects from '../ContractorsProjects'

const Contractors = () => {
  return (
    <div className="bg-container ">
      <Navbar/>
      <hr className="line"/>
      <section className="hero-section contractors">
      
        <div className="hero-description-container ">
        
        <div className='hero-description animate__animated animate__fadeInLeft'>
        <h1 className='hero-title '><span className='hero-title-span'>B</span>uild + <span className='hero-title-span'>A</span>rchExcellence</h1>
                    <p className='description'>Building the future with precision and passion, With our team of skilled builders and close collaboration with architects, we are dedicated to delivering exceptional construction projects from the initial stages to the final state.</p>
                    <button className='button' >Contact Us</button>
                </div>
                <img src="/ezgif.gif" alt="gif" className='gif animate__animated animate__fadeIn'/>
            </div>
            
      </section>
      <section className='contractors-section'>
            <h1 className='section2-heading' data-aos="fade-right">Over View</h1>
            <p className='section2-description' data-aos="fade-right">We offer a comprehensive range of construction services tailored to meet the unique needs of each project. From concept to completion, our builders work closely with architects to ensure a cohesive and successful construction process. Whether it's residential, commercial, or industrial projects, we have the expertise and resources to bring your vision to life.</p>
            <button className='button-2' data-aos="fade-right" >Download our Brochure</button>
        </section> 
        <section className='our-projects-section' id="architecture-projects" data-aos="zoom-in-up">
            <ContractorsProjects/>
        </section> 
    </div>
  )
}

export default Contractors