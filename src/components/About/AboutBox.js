import React, { useEffect, useState } from "react";

const AboutBox = () => {
  const [coffeeCount, setCoffeeCount] = useState(20);

  //animate coffee count
  useEffect(() => {
    const targetCount = coffeeCount; // Replace with your actual target coffee count
    const duration = 2000; // Animation duration in milliseconds
    const intervalDelay = 20; // Delay between each increment in milliseconds
    const increment = (targetCount / duration) * intervalDelay;

    let currentCount = 0;
    const intervalId = setInterval(() => {
      currentCount += increment;
      setCoffeeCount(Math.floor(currentCount));

      if (currentCount >= targetCount) {
        clearInterval(intervalId);
        setCoffeeCount(targetCount);
      }
    }, intervalDelay);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //increase coffee count daily
  useEffect(() => {
    // Function to update coffeeCount by 1 every day
    const updateCoffeeCount = () => {
      setCoffeeCount((prevCount) => prevCount + 1);
    };

    // Set up interval to update coffeeCount daily
    const intervalId = setInterval(updateCoffeeCount, 24 * 60 * 60 * 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-event"></i>
        <div>
          <h3 className="about__title">2+ Years</h3>
          <span className="about__subtitle">Experience</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">37</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">{coffeeCount}</h3>
          <span className="about__subtitle">Cup of Coffee</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
