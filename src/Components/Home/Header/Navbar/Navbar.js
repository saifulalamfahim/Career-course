import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container mb-2">
            <nav className="navbar navbar-expand-lg  nav-font">
                
                <button className="navbar-toggler bgMenu w-40 btn-dark p-2 pl-3 pr-3 ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <img style={{ width: "25px" }} alt="" />
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link to="/admin_user"> <button style={{ textDecoration: "none", color: "black" }} className="bg-warning nav-item btn px-4 h-75 btnLogin">
                            Admin/User Panel
                        </button></Link>
                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-white">Home <span className="sr-only">(current)</span></p>
                        </li></Link>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-white" href="#carousel">Our Portfolio</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-white" href="#service">Our Service</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-white" href="#review">Review</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-white" href="#footer">Contact Us</a>
                        </li>
                        {
                loggedInUser.email ? <button style={{ textDecoration: "none", color: "black" }} className="bg-warning nav-item btn px-4 h-75 btnLogin" onClick={() => setLoggedInUser({})}>Sign Out, {loggedInUser.name}</button> :
                  <Link to="/login"><button style={{ textDecoration: "none", color: "black" }} className="bg-warning nav-item btn px-4 h-75 btnLogin">Sign In</button></Link>
              }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;