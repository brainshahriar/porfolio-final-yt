import React from 'react';
import {AiFillLinkedin,AiFillFacebook,AiFillInstagram,AiFillGithub,AiOutlineWhatsApp} from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="#home" className='home__social-link' target='_blank'>
                <AiFillLinkedin/>
            </a>
            <a href="#home" className='home__social-link' target='_blank'>
                <AiFillFacebook/>
            </a>
            <a href="#home" className='home__social-link' target='_blank'>
                <AiFillInstagram/>
            </a>
            <a href="#home" className='home__social-link' target='_blank'>
                <AiFillGithub/>
            </a>
            <a href="#home" className='home__social-link' target='_blank'>
                <AiOutlineWhatsApp/>
            </a>
        </div>
    );
};

export default HeaderSocials;