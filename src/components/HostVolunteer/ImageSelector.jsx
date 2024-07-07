import React, { useState } from 'react';
import image1 from '../../assets/event.png'
import image2 from '../../assets/event1.jpg'

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div className="image-options" style={{justifyContent: 'space-between', display:'flex', flexDirection: 'row', padding: '5%'}}>
        <label>
          <input
            type="radio"
            name="image"
            value="image1.jpg"
            onChange={() => handleImageSelect('image1.jpg')}
            className="radio-input"
          />
          <div className="radio-button"></div>
          <img src={image1} alt="Image 1" style={{height: "400px", width: "450px"}} />
        </label>

        <label>
          <input
            type="radio"
            name="image"
            value="image2.jpg"
            onChange={() => handleImageSelect('image2.jpg')}
            className="radio-input"
          />
          <div className="radio-button"></div>
          <img src={image2} alt="Image 2" style={{height: "400px", width: "450px"}} />
        </label>
      </div>

      {/*{selectedImage && (
        <div>
          <h3>Selected Image</h3>
          <img src={await importImage(selectedImage)} alt="Selected Image" />
        </div>
      )}*/}
    </div>
  );
};

export default ImageSelector;
