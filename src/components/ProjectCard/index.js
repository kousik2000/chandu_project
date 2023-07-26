import React, { useState } from 'react';
import './index.css';

const ProjectCard = (props) => {
  const { eachItem ,isButtonClicked} = props;
  const { id, title, description, startDate, endDate, imageUrl } = eachItem;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setIsHovered(false), 3000);
  };
  

  const galleyButtonClicked=()=>{
    isButtonClicked(id)
  }

  const MobileCardCliked=()=>{
    isButtonClicked(id)
  }

  return (
    <>
    <div className="project-card-container">
      <button
        className={isHovered ? "card-hovered" : "project-card"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={isHovered ? "image-hovered" : "project-image"}
          src={imageUrl}
          alt={title}
        />
        <div className="project-description-container">
        <h1 className={isHovered ? "title-after-hovered" : "project-title"}>{title}</h1>
        <p className={isHovered ? "decription-after-hovered" : "project-card-description"}>{description}</p>
        <p className={isHovered ? "decription-after-hovered" : "project-card-description"}>Start Date: {startDate}</p>
        <p className={isHovered ? "decription-after-hovered" : "project-card-description"}>End Date: {endDate}</p>

        <button className={isHovered ? "project-gallery-button" : "project-card-description"} onClick={galleyButtonClicked}>View Gallery</button>
        </div>
      </button>
    </div>
    <div className="project-card-container-for-lower" onClick={MobileCardCliked}>
    <img className="project-image-lower"
          src={imageUrl}
          alt={title}
        />
        <h1 className="project-title-lower">{title}</h1>
    </div>
    </>
  );
};

export default ProjectCard;
