import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
// import ReactDOM from "react-dom";
import React ,{useState} from 'react'

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
}from "react-router-dom";

// import About from './Components/About';

function App() {
 const [mode,newmode]=useState('light')
 const [alert,setAlert]=useState()
 const showAlert =(message,type)=>{
  setAlert({
    msg :message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
 }
 
 const togglemode =()=>{
  if(mode==='light'){
    newmode('dark');
    document.body.style.backgroundColor ="#042743"
    showAlert("Dark mode has been enable","success")
    document.title ="TextUtil(Dark-mode)"
  }
  else{
    newmode('light');
    document.body.style.backgroundColor ="white"
    showAlert("light mode has been enable","success")
    document.title ="TextUtil(Light-mode)"
  }
 }
  return (
    <>
    <Router>
    <Navbar mode ={mode} title ="Text-tools" home="Home" togglemode={togglemode}/>
    <Alert alert ={alert}/>
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} mode ={mode}/>} />
      <Route exact path="/about" element={<About mode ={mode} />} />
    </Routes>
  </Router>
    </>
  );
}

export default App;
