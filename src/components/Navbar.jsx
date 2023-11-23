import React, { useState } from 'react';
import logo from '../imgs/🍕.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Btn from './Btn';
// import Feedback from './Feedback';
import Hero from './Hero';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <Router >
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand " to="/Hero">
                            <img className='img-fluid' src={logo} alt="pizza logo" />
                        </Link>
                        <button onClick={() => setActive(!active)} className="navbar-toggler fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* {active ? <FontAwesomeIcon icon={faBarsStaggered} /> : <FontAwesomeIcon icon={faBars} />} */}
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item  fw-bold text-capitalize me-4">
                                    <Link className="nav-link active" aria-current="page" to="/Restaurants">restaurants</Link>
                                </li>
                                <li className="nav-item fw-bold text-capitalize me-4">
                                    <Link className="nav-link" to="/Recipes">recipes</Link>
                                </li>
                                <li className="nav-item fw-bold text-capitalize me-4">
                                    <Link className="nav-link" to="/About">about</Link>
                                </li>
                                <li className="nav-item fw-bold fw-bold text-capitalize me-4 dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        page
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="/">page 1</a></li>
                                        <li><a class="dropdown-item" href="/">page 2</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">page 3</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link className="btn login text-capitalize fw-bold me-2 ps-0 ps-lg-2 pe-lg-2" to="/Feedback">login</Link>
                                <Btn text='sign up' bg='#E94339' />
                                {/* <span className="btn sign rounded-pill text-capitalize fw-bold">sign up</span> */}
                            </form>
                        </div>
                    </div>
                </nav>

                {/* <Routes> */}
                    {/* <Route exact path='/' Component={Hero} /> */}
                    {/* <Route path='/Feedback' Component={Feedback} /> */}
                    {/* </Routes> */}
            </Router>

        </>
    )
};

export default Navbar;