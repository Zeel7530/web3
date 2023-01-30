import React from 'react'
import './Hero.css'
import web from '../../assets/images/webpalnt.png'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <section className='webgrants'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2">
                        <div className="webgrantsformet flex flex-col justify-center">
                            <h1 className='text-[#FFFFFF]'>Web3 Grants</h1>
                            <p className='text-[#D3D3D3]'>In support of our mission, the Web3 Foundation grants program funds software development and research in the field of decentralized software protocols.</p>
                            <div className="getstartbtn flex">
                                <Link to="/" className='getbtn bg-[#FAB247] text-[#FFFFFF]'> Get Started </Link>
                            </div>

                        </div>
                        <div className="webgrantsgallery m-auto">
                            <img src={web} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero