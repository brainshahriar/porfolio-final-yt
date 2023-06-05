import React, { useEffect, useState } from "react";

const AboutBox = () => {
  const [coffeeCount, setCoffeeCount] = useState(487);

  //increase coffe count daily
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const currentSecond = currentDate.getSeconds();

      if (currentHour === 0 && currentMinute === 0 && currentSecond === 0) {
        setCoffeeCount((prevCount) => prevCount + 1);
      }
    }, 1000); // Check every second for the current time

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //animate coffee count
  useEffect(() => {
    const targetCount = coffeeCount; // Replace with your actual target coffee count
    const duration = 5000; // Animation duration in milliseconds
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
