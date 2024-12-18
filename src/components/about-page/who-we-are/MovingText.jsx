import React from "react";
import "./CircularText.css";

const CircularText = () => {
  const text = "Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • Your Fitness. Our Mission. Stay Strong! • ";

  return (
    <div className="circular-container">
      <div className="circular-text" data-text={text}>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CircularText;
