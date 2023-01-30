import React from 'react'
import './Level.css'
import level1 from '../../assets/images/level1.png'
import level2 from '../../assets/images/level2.png'
import level3 from '../../assets/images/level3.png'


const Level = () => {
    return (
        <>
            <section className='level'>
                <div className="container mx-auto">
                    <div className="projecttext">
                        <h2 className='text-center text-[#000B1E]'>Levels</h2>
                        <p className='text-[#616161]'>The W3F Grants Program offers different grant levels to help you best depending on your current stage</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="levelimg">
                            <img src={level1} alt="" />
                        </div>
                        <div className="levelinfo m-auto">
                            <h2 className='text-[#001840]'>Level 1</h2>
                            <ul className='list-disc'>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Target : </span>Individuals & Small teams</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Amount : </span> Upto $10,000</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Requirements : </span> 2 approvals</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Benefits : </span> Feedback during application process and evaluation, introduction to related teams/projects.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="levelinfo m-auto">
                            <h2 className='text-[#001840]'>Level 2</h2>
                            <ul className='list-disc'>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Target : </span>Individuals & Small teams</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Amount : </span> Upto $10,000</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Requirements : </span> 2 approvals</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Benefits : </span> Feedback during application process and evaluation, introduction to related teams/projects.</li>
                            </ul>
                        </div>
                        <div className="nextlevel">
                            <img src={level2} alt="" />
                        </div>


                    </div>
                    <div className="grid grid-cols-2">
                        <div className="thridlevel">
                            <img src={level3} alt="" />
                        </div>
                        <div className="levelinfo m-auto">
                            <h2 className='text-[#001840]'>Level 3</h2>
                            <ul className='list-disc'>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Target : </span>Individuals & Small teams</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Amount : </span> Upto $10,000</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Requirements : </span> 2 approvals</li>
                                <li className='text-[#81838C]'><span className='text-[#000000]'>Benefits : </span> Feedback during application process and evaluation, introduction to related teams/projects.</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Level