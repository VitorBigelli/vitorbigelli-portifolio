import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSection from './components/HomeSection'
import SkillSection from './components/SkillSection'
import ContactSection from './components/ContactSection'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Menu /> 
      <HomeSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
}

export default App;
