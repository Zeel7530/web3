import React from 'react'
import './Barnd.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import barnd1 from '../../assets/images/barnd1.png'
import barnd2 from '../../assets/images/barnd2.png'
import barnd3 from '../../assets/images/barnd3.png'
import barnd4 from '../../assets/images/barnd4.png'
import { Link } from 'react-router-dom'


const Barnd = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [

            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='barndlogo'>
                <div className="container mx-auto">
                    <div className="polkadot">
                        <Slider {...settings}>
                            <div className='items'>

                                <Link to="/">  <img src={barnd1} alt="" /></Link>

                            </div>
                            <div className='items'>
                                <Link to="/">  <img src={barnd2} alt="" /></Link>
                            </div>
                            <div className='items'>
                                <Link to="/">  <img src={barnd3} alt="" /></Link>
                            </div>
                            <div className='items'>
                                <Link to="/">  <img src={barnd4} alt="" /></Link>
                            </div>
                            <div className='items'>
                                <Link to="/">  <img src={barnd1} alt="" /></Link>
                            </div>
                            <div className='items'>
                                <Link to="/">  <img src={barnd2} alt="" /></Link>
                            </div>
                            <div className='items'>
                                <Link to="/">  <img src={barnd3} alt="" /></Link>
                            </div>
                            <div className='items'>
                                <Link to="/">  <img src={barnd4} alt="" /></Link>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Barnd