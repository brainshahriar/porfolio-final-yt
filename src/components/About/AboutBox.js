import React from 'react';

const AboutBox = () => {
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
                <i className="about__icon icon-fire">37</i>
                <div>
                    <h3 className="about__title">Project Completed</h3>
                    <span className="about__subtitle"></span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">5670</h3>
                    <span className="about__subtitle">Cup of Coffee</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;