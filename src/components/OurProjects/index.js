import React from 'react'
import './index.css'
import './Slider.css'
import ProjectCard from '../ProjectCard'

import { connect } from 'react-redux';
import { setFilteredGallery } from '../../redux/galleryActions';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState,useEffect } from "react";

import { useNavigate } from 'react-router-dom';


const ourProjects = [
    {
        id:1,
        title:"Their Project",
        description:'Architectural projects involve the art and science of designing and constructing spaces that blend aesthetics, functionality, and safety to create inspiring and innovative built environments.',
        category:'onGoing',
        projectType:'Architecture',
        startDate:"22 August 2021",
        endDate:"20 june 2023",
        imageUrl:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg',
        gallery:[
            {
                id:1,
                url:'https://media.architecturaldigest.com/photos/5e9f3c67fae1bd0008ebea61/master/w_1920%2Cc_limit/11_Sandra-Weingort_LES.jpg'
            },
            {
                id:2,
                url:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg'
            },
            {
                id:3,
                url:'https://media.architecturaldigest.com/photos/5e9f3c63d5eaf100086259ee/master/w_1920%2Cc_limit/08_Sandra-Weingort_LES.jpg'
            },
            {
                id:4,
                url:'https://media.architecturaldigest.com/photos/5e9f3c64d5eaf100086259ef/master/w_1920%2Cc_limit/09_Sandra-Weingort_LES.jpg'
            },
            {
                id:5,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66aaf74f0008ef715f/master/w_1920%2Cc_limit/10_Sandra-Weingort_LES.jpg'
            },
            {
                id:6,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66eeb6670009c14cf8/master/w_1920%2Cc_limit/12_Sandra-Weingort_LES.jpg'
            }
        ]

    },
    {
        id:2,
        title:"Their Project",
        description:'Architectural projects involve the art and science of designing and constructing spaces that blend aesthetics, functionality, and safety to create inspiring and innovative built environments.',
        category:'onGoing',
        projectType:'Architecture',
        startDate:"22 August 2021",
        endDate:"20 june 2023",
        imageUrl:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg',
        gallery:[
            {
                id:1,
                url:'https://media.architecturaldigest.com/photos/5e9f3c67fae1bd0008ebea61/master/w_1920%2Cc_limit/11_Sandra-Weingort_LES.jpg'
            },
            {
                id:2,
                url:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg'
            },
            {
                id:3,
                url:'https://media.architecturaldigest.com/photos/5e9f3c63d5eaf100086259ee/master/w_1920%2Cc_limit/08_Sandra-Weingort_LES.jpg'
            },
            {
                id:4,
                url:'https://media.architecturaldigest.com/photos/5e9f3c64d5eaf100086259ef/master/w_1920%2Cc_limit/09_Sandra-Weingort_LES.jpg'
            },
            {
                id:5,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66aaf74f0008ef715f/master/w_1920%2Cc_limit/10_Sandra-Weingort_LES.jpg'
            },
            {
                id:6,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66eeb6670009c14cf8/master/w_1920%2Cc_limit/12_Sandra-Weingort_LES.jpg'
            }
        ]

    },
    {
        id:3,
        title:"Their Project",
        description:'Architectural projects involve the art and science of designing and constructing spaces that blend aesthetics, functionality, and safety to create inspiring and innovative built environments.',
        category:'onGoing',
        projectType:'Architecture',
        startDate:"22 August 2021",
        endDate:"20 june 2023",
        imageUrl:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg',
        gallery:[
            {
                id:1,
                url:'https://media.architecturaldigest.com/photos/5e9f3c67fae1bd0008ebea61/master/w_1920%2Cc_limit/11_Sandra-Weingort_LES.jpg'
            },
            {
                id:2,
                url:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg'
            },
            {
                id:3,
                url:'https://media.architecturaldigest.com/photos/5e9f3c63d5eaf100086259ee/master/w_1920%2Cc_limit/08_Sandra-Weingort_LES.jpg'
            },
            {
                id:4,
                url:'https://media.architecturaldigest.com/photos/5e9f3c64d5eaf100086259ef/master/w_1920%2Cc_limit/09_Sandra-Weingort_LES.jpg'
            },
            {
                id:5,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66aaf74f0008ef715f/master/w_1920%2Cc_limit/10_Sandra-Weingort_LES.jpg'
            },
            {
                id:6,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66eeb6670009c14cf8/master/w_1920%2Cc_limit/12_Sandra-Weingort_LES.jpg'
            }
        ]

    },
    {
        id:4,
        title:"Their Project",
        description:'Architectural projects involve the art and science of designing and constructing spaces that blend aesthetics, functionality, and safety to create inspiring and innovative built environments.',
        category:'onGoing',
        projectType:'Architecture',
        startDate:"22 August 2021",
        endDate:"20 june 2023",
        imageUrl:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg',
        gallery:[
            {
                id:1,
                url:'https://media.architecturaldigest.com/photos/5e9f3c67fae1bd0008ebea61/master/w_1920%2Cc_limit/11_Sandra-Weingort_LES.jpg'
            },
            {
                id:2,
                url:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg'
            },
            {
                id:3,
                url:'https://media.architecturaldigest.com/photos/5e9f3c63d5eaf100086259ee/master/w_1920%2Cc_limit/08_Sandra-Weingort_LES.jpg'
            },
            {
                id:4,
                url:'https://media.architecturaldigest.com/photos/5e9f3c64d5eaf100086259ef/master/w_1920%2Cc_limit/09_Sandra-Weingort_LES.jpg'
            },
            {
                id:5,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66aaf74f0008ef715f/master/w_1920%2Cc_limit/10_Sandra-Weingort_LES.jpg'
            },
            {
                id:6,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66eeb6670009c14cf8/master/w_1920%2Cc_limit/12_Sandra-Weingort_LES.jpg'
            }
        ]

    },
    {
        id:5,
        title:"Their Project",
        description:'Architectural projects involve the art and science of designing and constructing spaces that blend aesthetics, functionality, and safety to create inspiring and innovative built environments.',
        category:'onGoing',
        projectType:'Architecture',
        startDate:"22 August 2021",
        endDate:"20 june 2023",
        imageUrl:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg',
        gallery:[
            {
                id:1,
                url:'https://media.architecturaldigest.com/photos/5e9f3c67fae1bd0008ebea61/master/w_1920%2Cc_limit/11_Sandra-Weingort_LES.jpg'
            },
            {
                id:2,
                url:'https://media.architecturaldigest.com/photos/5e9f3c5beeb6670009c14cf5/master/w_1920%2Cc_limit/02_Sandra-Weingort_LES.jpg'
            },
            {
                id:3,
                url:'https://media.architecturaldigest.com/photos/5e9f3c63d5eaf100086259ee/master/w_1920%2Cc_limit/08_Sandra-Weingort_LES.jpg'
            },
            {
                id:4,
                url:'https://media.architecturaldigest.com/photos/5e9f3c64d5eaf100086259ef/master/w_1920%2Cc_limit/09_Sandra-Weingort_LES.jpg'
            },
            {
                id:5,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66aaf74f0008ef715f/master/w_1920%2Cc_limit/10_Sandra-Weingort_LES.jpg'
            },
            {
                id:6,
                url:'https://media.architecturaldigest.com/photos/5e9f3c66eeb6670009c14cf8/master/w_1920%2Cc_limit/12_Sandra-Weingort_LES.jpg'
            }
        ]

    }
]


const OurProjects = (props) => {
  const [activeProectItem, setActiveProjectItem] = useState("onGoing"); 
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  const handleButtonItemClick = (item) => {
    setActiveProjectItem(item);
  };

  useEffect(() =>{
    const filteredProjects = ourProjects.filter((eachItem) => eachItem.category === activeProectItem);
    setFilteredData(filteredProjects);
  },[activeProectItem])

  const cardClicked = (id) => {
    const filteredGallery = ourProjects.find((eachItem) => eachItem.id === id);

    if (filteredGallery) {
      props.setFilteredGallery(filteredGallery); // Dispatch action to set filtered gallery data in Redux
      navigate('/gallery')
    } else {
      console.log("No project found with id === ", id);
    }

  };


  const settings = {
    dots:false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    focusOnSelect:true,
    focusOnChange:true,
    arrows: true,
    swipe: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
      {
        breakpoint: 952,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };


  return (
    <center>
        <h1 className="our-projects-title">Our Projects</h1>
        <div class="button-container">
        <button class={activeProectItem === "onGoing" ? "active-2" : "button-3"} onClick={() =>handleButtonItemClick("onGoing")}>On Going</button>
        <button class={activeProectItem === "Completed" ? "active-2" : "button-3"} onClick={() =>handleButtonItemClick("Completed")}>Completed</button>
        <button class={activeProectItem === "Proposed" ? "active-2" : "button-3"} onClick={() =>handleButtonItemClick("Proposed")}>Proposed</button>
        </div>

        <div className="projects-cotnainer">
            <Slider {...settings}>
                {filteredData.map((eachItem) => (
                    <ProjectCard eachItem={eachItem} key={eachItem.id} isButtonClicked={cardClicked}/>
                 ))}
            </Slider>
        </div>

    </center>
  )
}


export default connect(null, { setFilteredGallery })(OurProjects);


