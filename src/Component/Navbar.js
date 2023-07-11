import React from 'react';
import './Navbar.css'; // Import the custom CSS file
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-success bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">{props.title}</Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-white-icon "></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active text-white" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" to="/about">{props.aboutText}</Link></li> 
                </ul>
                <form className="d-flex">
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input  className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div>
                </form>
                </div>
            </div>
    </nav>
    </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
  };
  
  Navbar.defaultProps = {
    title: 'Navbar',
    aboutText: 'About',
  };
  export default Navbar; // Export the Navbar component