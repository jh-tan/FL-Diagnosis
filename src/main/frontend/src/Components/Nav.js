import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Nav = ()=>{
    return (
        <>
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <button className="nav-toggle" onClick={()=>document.querySelector(".links").classList.toggle("show-links")}>
                        <div>
                            <div className="menuBar"></div>
                            <div className="menuBar"></div>
                            <div className="menuBar"></div>
                        </div>
                    </button>
                </div>
                <ul className="links">
                    <Link to="/">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li>
                            About
                        </li>
                    </Link>
                    <Link to="project">
                        <li>
                            Project
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
        </>
    )
    
}

export default Nav