import React from 'react'
import './index.css'

const CardTopDetail = (props) => {
    const {eachItem} = props;
    const {url,title}= eachItem;
  return (
    <div className="card-top">
        <img src={url} alt={title} className='card-top-image'/>
        <p className='card-title'>{title}</p>
    </div>
  )
}

export default CardTopDetail