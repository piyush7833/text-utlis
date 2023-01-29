import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  {/*We are goint to write className by JS and we use back ticks as we want to use it as template literals*/}
        <div className="container-fluid">
          <Link className="navbar-brand primary" to="/">{props.title}</Link>  {/* getting props */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link> {/* getting props */}
              </li>

            </ul>
            <form className="d-flex" role="search">
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>   {/*using terneary operator in props */}
                <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable ':'Disable '}Dark Mode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {  //it is an object
  title: PropTypes.string.isRequired,   //if is required is there then it should must be present
  about: PropTypes.string
};

Navbar.defaultProps = {
  title: "Piyush",
  about: "About"
};
