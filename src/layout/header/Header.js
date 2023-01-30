import React from 'react'
import logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import './Header.css'

const Header = () => {
    // const ref = useRef(null)
    // const toggleClass = () => {
    //     ref.current.classList.toggle('show-menu')
    // }
    return (
        <>
            <header>
                <nav className="relative flex flex-wrap items-center justify-between">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between md:w-auto  px-4 lg:static lg:block lg:justify-start">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                                <img src={logo} alt="" />
                            </a>
                            <button className=" toggler cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden   outline-none focus:outline-none" type="button">
                                {/* <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span> */}
                                <FaBars />
                            </button>

                            <button className="closemenu inline-flex items-center justify-center rounded-md bg-white  text-gray-400   focus:outline-none ">
                                <FaTimes />
                            </button>


                        </div>
                        <div className=" lg:flex flex-grow items-center" id="example-navbar-warning">
                            <ul className=" navmenu flex flex-col md:flex-row list-none ml-auto">
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs leading-snug text-white" href="#pablo">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs  leading-snug text-white" href="#pablo">
                                        Team
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs  leading-snug text-white" href="#pablo">
                                        Process
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs  leading-snug text-white" href="#pablo">
                                        AcceptedApplications
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header