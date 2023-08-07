import React from 'react'
import './index.css'
import {useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  }
  return (
    <center className="not-found-container">
      <img src="./notFound.jpg" className="notfound" alt="notfound"/>
      <button className="button " onClick={returnToHome}>Go back to Home</button>
    </center>
  )
}

export default NotFound