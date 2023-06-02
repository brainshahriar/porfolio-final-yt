import React from 'react';
import {AiFillLinkedin,AiFillFacebook,AiFillInstagram,AiFillGithub,AiOutlineWhatsApp} from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.linkedin.com/in/al-shahriar-mehedi-4094341bb/" className='home__social-link' target='_blank' rel="noreferrer">
                <AiFillLinkedin/>
            </a>
            <a href="https://www.facebook.com/al.shahariar" className='home__social-link' target='_blank' rel="noreferrer">
                <AiFillFacebook/>
            </a>
            <a href="https://www.instagram.com/al.shahriar.mehedi/" className='home__social-link' target='_blank' rel="noreferrer">
                <AiFillInstagram/>
            </a>
            <a href="https://github.com/brainshahriar" className='home__social-link' target='_blank' rel="noreferrer">
                <AiFillGithub/>
            </a>
            <a href="#home" className='home__social-link' target='_blank'>
                <AiOutlineWhatsApp/>
            </a>
        </div>
    );
};

export default HeaderSocials;