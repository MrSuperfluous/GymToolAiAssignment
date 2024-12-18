import React from "react";
import CardComponent from "./CardComponent";
import MiddleImage from "./MiddleImage";
import "./OurBenefits.css";
import middleImage from "./MiddleImage.png";


function OurBenefits() {
  return (
    <div className="container">
      {/* Top Heading */}
      <div className="top-heading">
        <span className="our-benefits">⭐ Our Benefits</span>
      </div>

      {/* Title Section */}
      <h1 className="main-title">Discover GymFluencer Benefits</h1>
      <p className="subtitle">
        Unlock your full potential with GymFluencer, your personal fitness partner for progress and motivation.
      </p>

      {/* Top Section */}
      <div className="top-section">
        <CardComponent
          title="Effortless Workout Logging"
          description="Easily log your workouts and monitor your progress over time with our intuitive logging feature."
          icon="👥"
        />
        <CardComponent
          title="Personalized Workout Plans"
          description="AI-powered workout plans tailored to your fitness level, goals, and progress."
          icon="⭐"
        />
      </div>

      {/* Middle Image */}
      <MiddleImage imageUrl={middleImage} />
      {/* Bottom Section */}
      <div className="bottom-section">
        <CardComponent
          title="Accurate Rep Counting"
          description="Count your reps accurately with our app, ensuring consistency and improved performance."
          icon="🛠️"
        />
        <CardComponent
          title="Calorie Calculation & Personalized Diet Plans"
          description="Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness."
          icon="🔥"
        />
      </div>
    </div>
  );
}

export default OurBenefits;
