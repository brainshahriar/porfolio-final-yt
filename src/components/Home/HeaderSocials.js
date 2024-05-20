import React from 'react';
import {AiFillLinkedin,AiFillFacebook,AiFillInstagram,AiFillGithub,AiOutlineWhatsApp} from 'react-icons/ai'
import ReactWhatsapp from 'react-whatsapp';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.linkedin.com/in/sh4hriar/" className='home__social-link' target='_blank' rel="noreferrer">
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
            <ReactWhatsapp className="home__social-link" number="+8801317752207" message="Hi!"><AiOutlineWhatsApp/></ReactWhatsapp>
        </div>
    );
};

export default HeaderSocials;