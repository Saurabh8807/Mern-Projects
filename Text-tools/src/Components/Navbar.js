import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input Style ="height:50px;margin-top:20px"className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button Style ="height:50px;margin-top:20px;margin-right:20px"className="btn btn-outline-success" type="submit">Search</button>
          <div className="form-check form-switch">
  <input Style="height:30px; width:60px"onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label Style="color:black; font-weight:bolder"className="form-check-label" for="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}} >Enable {props.mode} Mode</label>
</div>
        </form>
      </div>
    </div>
  </nav> 
  )
}
//This means title and home accept only string values otherwise it will throws an error
Navbar.propTypes ={
    title:PropTypes.string.isRequired,// It means you must have to give title
    home:PropTypes.string
} 
Navbar.defaultProps ={
    title:"Set title here",
    home:"Set home here",
}