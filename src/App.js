import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light');
  const toggleDarkMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
    }
    else{
      setMode('dark')
    }
  }

  return (
    <>
      <Navbar title="Textutils" home="Home" mode={mode} toggleDarkMode={toggleDarkMode} />
      <TextForm />
      <About />
    </>
  );
}

export default App;
