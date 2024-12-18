import React from "react";
import CountUp from "react-countup";
import "./OurMission.css"; // For custom styles

const OurMission = () => {
  return (
    <div className="fitness-container">
      {/* Top Section: Title and Description */}
      <div className="fitness-header">
        <h1>
          <span className="red-text">YOUR FITNESS.</span>
          <br />
          <span className="red-text">OUR MISSION.</span>
        </h1>
        <p className="description">
          At GymFluencer, our mission is simple: to provide the tools and support
          you need to reach your fitness goals. We combine innovative technology
          with personalized guidance to make fitness easier, more accessible,
          and more motivating. Join us as we help you transform your fitness
          journey, one workout at a time.
        </p>
      </div>

      {/* Animated Numbers Section */}
      <div className="stats-section">
        <div className="stat">
          <h2>
            <CountUp start={0} end={422} duration={5} suffix="k+" />
          </h2>
          <p>Workouts logged and progress tracked every month</p>
        </div>
        <div className="stat">
          <h2>
            <CountUp start={0} end={122} duration={5} suffix="k+" />
          </h2>
          <p>Fitness enthusiasts connected through our platform</p>
        </div>
        <div className="stat">
          <h2>
            <CountUp start={0} end={2} duration={5} suffix="+" />
          </h2>
          <p>Countries where GymFluencer is making an impact</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <video autoPlay loop muted className="fitness-video">
          <source
            src="your-video-url.mp4" // Replace with your video URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default OurMission;
