import React from 'react';
// import { Dropdown } from 'react-bootstrap';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';
import Dropdown from './components/Dropdown';

function App() {
  return (
<>
<GlobalStyle/>  
<Navbar/>
<Hero slides={SliderData}/>
</>
  );
}

export default App;