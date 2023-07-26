import React,{useState,useRef} from 'react'
import './index.css'
import emailjs from '@emailjs/browser'

import { FiPhoneCall } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const ContactSection = () => {

    const form = useRef();

    const [memberData, setMemberData] = useState({
        Name: "",
        Email: "",
        Message: ""
    });  
    
    const handleChange = (event) => {
        setMemberData({
            ...memberData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(memberData)
        setMemberData({
            Name: "",
            Email: "",
            Message: ""
        })

      emailjs.sendForm('service_8mz9hxp', 'template_gv2mpwn', form.current, 'Uk5MWzoYF3VZySOHN')
      .then((result) => {
          alert("Your Message sent successfully we will be back with in 24 hours")
      }, (error) => {
        alert("Failed to send")
      });
    };


  return (
    <center>
        <h1 className="our-projects-title" >Get in Touch with Architects</h1>
        <div className="contact-container">
            <form ref={form} className="form" onSubmit={handleSubmit}>
                <label htmlFor="name-input" className="contact-label">Enter your Name</label>
                <input stype="text" name="Name" onChange={handleChange} value={memberData.Name} autoComplete="none"  id="name-input" className="contact-input" placeholder='Your Name' required/><br/>

                <label htmlFor="email-input" className="contact-label">Enter your Email or Phone</label>
                <input type="text" name="Email" onChange={handleChange} value={memberData.Email} autoComplete="none" id="email-input" className="contact-input" placeholder='Your Email / Phone Number' required/><br/>
                
                <label htmlFor="text-input" className="contact-label">Type a Message</label>
                <textarea id="text-input" name="Message" onChange={handleChange} value={memberData.Message} required className="text-area" placeholder="Message"></textarea>

                <button type="submit" className='button'>Submit</button>
            </form>
            <div className='map-conainer'>
                <label htmlFor="google-maps" className="contact-label">Google Maps</label>
                
                <div id="google-maps">
                    <a href="https://goo.gl/maps/rF3oZW8DLiwXiUfY7" target="_blank" rel="noopener noreferrer">
                        <img src="./map.png" alt="map" className="map-image"/>
                    </a>
                </div>
            </div>
        </div>
        <div className="another-contact-container">
            <p className="contact-label">Direct contact with us</p>
            <div className="contact-icon-container">
                <a href="tel:8309159912"
            target="_blank"
            className="contact-icon"
            rel="noreferrer">
                    <FiPhoneCall className="icon-contact"/>
                    <p className="contact-link-text">+91 0000000000</p>
                </a>
                <a href="tel:8309159912"
            target="_blank"
            className="contact-icon"
            rel="noreferrer">
                    <BsInstagram  className="icon-contact"/>
                    <p className="contact-link-text">instagram.com</p>
                </a>
                <a href="mailto:kousik.ramachandruni@gmail.com"
            target="_blank"
            className="contact-icon"
            rel="noreferrer">
                    <GoMail  className="icon-contact"/>
                    <p className="contact-link-text">kousik.ramachandruni@gmail.com</p>
                </a> 
                </div>
        </div>
    </center>
  )
}

export default ContactSection