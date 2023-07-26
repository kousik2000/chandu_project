import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Gallery = (props) => {
  const { filteredGallery } = props;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!filteredGallery) {
    // Handle the case when filteredGallery is not yet available
    return null;
  }

  const { title, gallery, projectType } = filteredGallery;

  const handleGalleryClose=()=>{
    navigate(-1);
  }

  return (
    <div className="gallery-container">
      <div className="gallery-nav">
        <button className="close-gallery" onClick={handleGalleryClose}>
          <BiArrowBack className="icon" />
        </button>
        <h1 className="gallery-title">{title}</h1>
        <p className="gallery-project-type">{projectType}</p>
      </div>
      {gallery.map((each, index) => (
        <img src={each.url} alt={index} className="gallery-image" key={index} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredGallery: state.filteredGallery,
  };
};

export default connect(mapStateToProps)(Gallery);
