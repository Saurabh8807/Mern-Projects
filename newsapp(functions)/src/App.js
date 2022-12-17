// import logo from './logo.svg';
import './App.css';

import React from 'react'
import Navbar from './component/Navbar'
import News from './component/News'

import{
  BrowserRouter as Router,
  
  Routes,
  Route,
}from"react-router-dom"
function App () {
 
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/business"element={<News key="business"country="in" category="business"/>}/>
          <Route exact path="/entertainment"element={<News key="entertainment"country="in" category="entertainment"/>}/>
          <Route exact path="/health"element={<News key="health" country="in" category="health"/>}/>
          <Route exact path="/"element={<News key="general" country="in" category="general"/>}/>
          <Route exact path="/science"element={<News key="science"country="in" category="science"/>}/>
          <Route exact path="/sports"element={<News key="sports"country="in" category="sports"/>}/>
          <Route exact path="/technology"element={<News key="technology"country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}
export default App;

