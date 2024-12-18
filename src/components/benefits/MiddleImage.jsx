import React from "react";
//import "./MiddleImage.css"; // Styling for the image component
const MiddleImage = ({ middleImage }) => {
  return (
    <div className="middle-image">
      <img src={middleImage} alt="Central Display"  style={{ width: "100%", height: "auto" }}/>
    </div>
  );
};

export default MiddleImage;
