import React from 'react';
import Me from '../../assets/avatar-1.svg'
import './home.scss'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import ReactWhatsapp from 'react-whatsapp';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img'/>
                <h1 className="home__name">Al Shahriar Mehedi</h1>
                <span className="home__education">I'm a Full-Stack Developer</span>
                <HeaderSocials/>
                <ReactWhatsapp className="btn" number="+8801317752207" message="Hi!">Hire Me</ReactWhatsapp>
                <ScrollDown/>
            </div>
            <Shapes/>
        </section>
    );
};

export default Home;