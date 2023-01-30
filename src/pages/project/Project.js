import React from 'react'
import './Project.css'
import ideas from '../../assets/images/projectideas.png'
// import Particles from 'react-particles-js'
const Project = () => {
    return (
        <>
            {/* <Particles /> */}

            <section className="project">
                <div className="container mx-auto">
                    <div className="projecttext">
                        <h2 className='text-center text-[#000B1E]'>Project Ideas?</h2>
                    </div>
                    <div className="mangement">
                        <div className="grid grid-cols-2">
                            <div className="projectimg m-auto">
                                <img src={ideas} alt="" />
                            </div>
                            <div className="projectformet">
                                <p className='overview text-[#000C20]' >An overview of existing projects in the Web 3.0 Technology Stack along with broad project ideas we would potentially be interested in funding can be found here, as well as a list of previously accepted applications here.</p>
                                <p className='text-[#000C20]'>Requests For Proposals (RFPs) represent concrete ideas for projects that we would like to see implemented. Several teams may apply for the same RFP, so even if another team has already applied to implement a certain RFP, we invite you to do the same if you're interested.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Project