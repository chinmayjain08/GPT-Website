import React from 'react'

import './App.css'

import { Header, Footer, Blog, Possibility, Features, WhatGPT } from './containers';
import {CTA, Navbar, Brand} from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App