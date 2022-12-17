//recp is shortcut 
import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar (){
    return (
      <>
      <div id="nav">
        <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor:"darkcyan"}}>
  <div className="container-fluid">
    <Link style={{color:"white"}} className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li style={{color:"white"}} className="nav-item" >
          <Link  style={{color:"white"}} className="nav-link active" aria-current="page" to="/">Home</Link>
        </li >
            <li  className="nav-item" ><Link  style={{color:"white"}} className='nav-link' to="/business">Business</Link></li>
            <li  className="nav-item" ><Link  style={{color:"white"}} className='nav-link' to="/entertainment">Entertainment</Link></li>
            <li  className="nav-item" ><Link  style={{color:"white"}} className='nav-link' to="/health">Health</Link></li>
            <li  className="nav-item" ><Link  style={{color:"white"}} className='nav-link' to="/">General</Link></li>
            <li  className="nav-item" ><Link  style={{color:"white"}} className='nav-link' to="/science">Science</Link></li>
            <li  className="nav-item" ><Link  style={{color:"white"}} className='nav-link' to="/sports">Sports</Link></li>
            <li  className="nav-item" ><Link  style={{color:"white"}} className='nav-link' to="/technology">Technology</Link></li>
            <li  className="nav-item" ><Link  style={{color:"yellow",marginLeft:"420px"}} className='nav-link' to="/">By Saurabh Jagtap</Link></li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
      </>
    )
}

