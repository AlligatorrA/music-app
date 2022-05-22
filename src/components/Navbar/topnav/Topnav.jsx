import React from 'react'
import { Link } from 'react-router-dom'
import './topnav.css'
const Topnav = () => {
    return (
        <>
            <nav className='top_nav'>
                <Link to='/'>
                    <div className="left_nav just_btw">
                        <h1><sup>&#119071;</sup>M<sub>	&#119136;</sub></h1>
                    </div>
                </Link>
                <div className="center_nav all_center">
                    <Link to='/'>ABOUT</Link>
                    <Link to='/'>DASHBOARD</Link>
                    <Link to='/'>TRENDING</Link>

                </div>
                <div className="right_nav all_center">
                    <div className="search_box all_center">
                        <i className="fa-brands fa-searchengin"></i>
                        <input type="text" className='search_input' />
                    </div>
                    <Link to='/'>sign up</Link>
                    <Link to='/'>login </Link>
                </div>
            </nav>
        </>
    )
}

export default Topnav