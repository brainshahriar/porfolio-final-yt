import React from 'react';
import Data from './Data';
import Card from './Card';
import './resume.scss';

const Resume = () => {
    return (
        <section className='resume container section' id='resume'>
            <h2 className="section__title">Qualification</h2>
            <div className="resume__container grid">
                <div className="timeline grid">
                    {
                        Data.map((val,id) => {
                            if(val.category === 'education'){
                                return(
                                    <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
                                )
                            }
                            return null;
                        })
                    }
                </div>
                <div className="timeline grid">
                    {
                        Data.map((val,index) => {
                            if(val.category === 'experience'){
                                return(
                                    <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>

                                )
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Resume;