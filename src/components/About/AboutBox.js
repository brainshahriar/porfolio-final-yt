import React, { useEffect, useState } from "react";

const AboutBox = () => {
    const [coffeeCount, setCoffeeCount] = useState(487);

    //increase coffe count daily
    useEffect(() => {
        const currentDate = new Date();
        const targetDate = new Date("2023-12-31"); // December 31, 2023

        if (currentDate < targetDate) {
            const timeDifference = targetDate.getTime() - currentDate.getTime();
            const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

            // If the time difference is positive, set an initial delay before the first update
            if (timeDifference > 0) {
                setTimeout(() => {
                    setCoffeeCount((prevCount) => prevCount + 1);
                }, timeDifference);
            }

            const interval = setInterval(() => {
                setCoffeeCount((prevCount) => prevCount + 1);
            }, twentyFourHours);

            // Cleanup the interval when the component unmounts or when reaching the target date
            return () => {
                clearTimeout(interval);
                clearInterval(interval);
            };
        }
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
