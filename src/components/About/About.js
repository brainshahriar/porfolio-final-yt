import React from "react";
import Image from "../../assets/avatar-2.svg";
import "./about.scss";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello ! I am Full Stack Software engineer who is
                            passionate about making error-free Applications with
                            100% satisfaction.I love to solve real world
                            problem.
                        </p>
                        <a href="#about" className="btn">
                            Download CV
                        </a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Front-End</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage front-end"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Back-End</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage back-end"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Dev-Ops</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage dev-ops"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox/>
        </section>
    );
};

export default About;
