import React from 'react'
import './index.css'
import 'animate.css';

import Navbar from '../Navbar'
import OurProjects from '../OurProjects';
import CardCarousel from '../CardCarousel'
import ContactSection from '../ContactSection'

const Architecture = () => {

    const visitOurPage=()=>{
        alert('site under construction okato sari');
    }

    const contactUs=()=>{
        alert('site under construction rendo sari'); 
    }

    const readMore=()=>{
        alert('chepthe ardham kaada site under maintenance ani,  code rayaneeyara nannu');
    }

  return (
    <div className="bg-container">
        <Navbar/>
        <hr className="line"/>
        <section className="hero-section">
        <div className="hero-description-container ">
        <div className='hero-description animate__animated animate__fadeInLeft'>
            <h1 className='hero-title '><span className='hero-title-span'>D</span>ream.<span className='hero-title-span'>D</span>esign.<span className='hero-title-span'>A</span>ffordability</h1>
                    <p className='description'>Transforming visions into reality, our architectural firm creates stunning spaces without compromising on quality or budget. Experience architectural brilliance at an affordable price.</p>
                    <button className='button' onClick={contactUs}>Contact Us</button>
                </div>
                <img src="/gif.gif" alt="gif" className='gif animate__animated animate__fadeIn'/>
            </div>
            <div className="card-carousel">
                <CardCarousel/>
            </div>
        </section>
        <section className='contractors-section'>
            <h1 className='section2-heading'>Are you Searching for the Contractors ?</h1>
            <p className='section2-description'>You are at the right place, We construct your dream home within your budget, without compromising on quality. Trust our team to deliver exceptional results that exceed your expectations. Experience the perfect fusion of affordability and craftsmanship in your dream home.</p>
            <button className='button-2' onClick={visitOurPage}>Visit our page</button>
        </section> 
        <section className='our-projects-section'>
            <OurProjects/>
        </section> 
        <section className='about-section'>
            <h1 className='section2-heading'>About</h1>
            <p className='section2-description'>Welcome to our esteemed architecture firm, where we specialize in site layouts, interiors, and comprehensive architecture projects. At our firm, we understand that every client has unique needs and preferences, which is why we strive to provide the best design solutions while also considering cost-effectiveness.
            <br className='about-span-description-text'/>
            <br className='about-span-description-text'/>
            <span className="about-span-description-text">
            Our team of skilled architects, designers, and construction professionals work collaboratively to ensure that each project we undertake meets the highest standards of quality and client satisfaction. From the initial concept and design phase to the final construction and handover, we are committed to delivering exceptional results.</span></p>
            
            <button className='button-2' onClick={readMore}>Read More &#x279C;</button>
        </section>  
        <section className="contact-section">
            <ContactSection/>
        </section>
        <footer className="footer-section"></footer>
        </div>
  )
}

export default Architecture