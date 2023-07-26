import React from 'react';

import './index.css';



const PopUpContainer = (props) => {
  const { toggleModal, filterGallery} = props;

  const closePopUp = () => {
    toggleModal();
  };

  return (
    <div className="modal-content">
      <button className="close-modal" onClick={closePopUp}>
        <AiOutlineClose className="icon" />
      </button>
      <div style={{ columnCount: 4, columnGap: '5px' }}>
      {filterGallery.map((eachImage, index) => (
          <img
            src={eachImage.url}
            className="galleryImage"
            key={index}
            style={{ padding: '2.5px' }}
            alt={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PopUpContainer;
