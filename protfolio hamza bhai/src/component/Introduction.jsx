import React from 'react';
import Header from './Header.jsx'
import '../style/Introduction.css';
import userImage1 from '../images/hamza7.png'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import image5 from '../images/5.png'
import image6 from '../images/6.png'
import image7 from '../images/7.png'
import image8 from '../images/8.png'
import { FacebookOutlined, LinkedinOutlined, BehanceSquareOutlined } from '@ant-design/icons';

const Introduction = () => {


    return (
        <>
            <div className='main'>
                <div className='circleDiv'>
                    <Header />
                    <div className="introContainer">
                        <div className='left'>

                            <b className='color-gray '>

                                ——  Hello
                            </b>
                            <br />

                            <span className='im'>
                                I'm  <b className='name font-family'> Ameer </b>Hamza
                            </span>


                            <br />
                            <b className='text-gray size'>
                                — Creative Graphic Designer
                            </b>
                            <div className='social-icons'>

                                <a href="https://www.facebook.com/ameer.hamza.5203577" target='_blank'>
                                    <FacebookOutlined style={{ fontSize: '40px', color: '#3e4455', margin: '25px 10px' }} />
                                </a>

                                <a href="https://www.linkedin.com/in/ameer-hamza-a5327a18a/" target="_blank">
                                    <LinkedinOutlined style={{ fontSize: '40px', color: '#3e4455', margin: '25px 10px' }} />
                                </a>

                                <a href="https://www.behance.net/ameerhamza241ae562" target="_blank">
                                    <BehanceSquareOutlined style={{ fontSize: '40px', color: '#3e4455', margin: '25px 10px' }} />
                                </a>


                            </div>

                        </div>
                        <div className='right' data-aos="zoom-in"
                            data-aos-duration="2500"
                        >
                            <img src={userImage1} alt="image" className='image-rotate' />
                        </div>
                    </div>

                    <div className='imaSoft-con'>
                        <img src={image1} alt="image" className='softwareImage'/>
                        <img src={image2} alt="image" className='softwareImage'/>
                        <img src={image3} alt="image" className='softwareImage'/>
                        <img src={image4} alt="image" className='softwareImage'/>
                        <img src={image5} alt="image" className='softwareImage'/>
                        <img src={image6} alt="image" className='softwareImage'/>
                        <img src={image7} alt="image" className='softwareImage'/>
                        <img src={image8} alt="image" className='softwareImage'/>
                    </div>

                </div>
            </div>



        </>

    );
}

export default Introduction