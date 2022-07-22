import './App.css';

import Introduction from './components/Introduction'
import Photo from './components/Photo'
import Header from './components/Header'
import PersonalInfo from './components/PersonalInfo'
import SoftSkills from './components/SoftSkills'

import Formation from './components/Formation'
import Skills from './components/Skills'
import Accomplishments from './components/Accomplishments'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Modal from './components/Modal'
import React from 'react'


function App() {
  return (
    <>
			<Header />
      <div style={{ display:'flex' }}>
        <div style={{ width:'20%' }}>
          <Photo />
        </div>
        <div style={{ flex:'1',marginLeft:'2%' }}>
          <Introduction />
          <PersonalInfo />
          <Formation />
          <SoftSkills />
          <Skills />
          <Accomplishments />
          <Projects />
          {/* <Goals /> */}
        </div>
      </div>
      <Footer />
      <Modal />
    </>
  );
}

export default App;