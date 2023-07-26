
const initialState = {
    filteredGallery: [], 
  };
  

  const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTERED_GALLERY':
        return { ...state, filteredGallery: action.payload };
      default:
        return state;
    }
  };
  
  export default galleryReducer;
  