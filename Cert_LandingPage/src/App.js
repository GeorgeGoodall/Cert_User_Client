import React from 'react';
import Header from './Components/Header/Header'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import ContactSection from "./Components/ContactSection/ContactSection"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section2 />
      <Section1 />
      <ContactSection />
    </div>
  );
}

export default App;
