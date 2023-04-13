import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  const [myStyle, setMyStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
})

const [btnText, setBtnText] = useState("Enable Dark Mode")

const toggleStyle = () => {
    if (myStyle.color === 'black') {
        setMyStyle({
            backgroundColor: 'black',
            color: 'white'
        })
        setBtnText("Enable Light Mode")
    }
    else {
        setMyStyle({
            backgroundColor: 'white',
            color: 'black'
        })
        setBtnText("Enable Dark Mode")
    }
}

  return (
    <nav className="navbar navbar-expand-lg" style={myStyle}>
      <div className="container-fluid" style={myStyle}>
        <a className="navbar-brand" style={myStyle} href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" style={myStyle} href="/">{props.first_page}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={myStyle} href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={myStyle} href="/">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={myStyle} href="/">Contact</a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input onClick={toggleStyle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">{btnText}</label> 
          </div>
        </div>
      </div>
    </nav>
  )
}