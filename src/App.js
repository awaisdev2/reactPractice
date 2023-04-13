import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/Textform';
// import { useState } from 'react';
import React from 'react'


function App() {

  return (
    <>
    <Navbar title="TextUtils" first_page="Home"/>
    <TextForm />
    <About />
    </>
  );
}

export default App;
