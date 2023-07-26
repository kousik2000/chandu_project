import React from 'react'
import CardTopDetail from '../CardTopDetail'
import './index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards= [
    {
        id:1,
        url:"/cards/1.png",
        title:'Conceptual'
    },
    {
        id:2,
        url:"/cards/2.png",
        title:'Design'
    },
    {
        id:3,
        url:"/cards/3.png",
        title:'Drawings'
    },
    {
        id:4,
        url:"/cards/4.png",
        title:'Critics'
    },
    {
        id:5,
        url:"/cards/5.png",
        title:'Construction'
    }
]

const CardCarousel = () => {
    const settings = {
        dots:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              slidesToScroll: 1,
              autoplaySpeed: 1000,
              cssEase: 'linear'
            },
          },
          {
            breakpoint: 952,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplaySpeed: 1000,
              cssEase: 'linear'
            },
          },
        ],
      };
  return (
    <div className="card-carousel">
    <Slider {...settings}>
        {cards.map((eachItem) => (
            <CardTopDetail eachItem={eachItem} key={eachItem.id}/>
        ))}
    </Slider>
    </div>
  )
}

export default CardCarousel