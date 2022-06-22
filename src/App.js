import React from 'react';
import { animals } from './data';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';





function App() {
  return (
    <div className="App">
      <Header greeting='Welcome to Not Orwell Farm' />
      <Main animals={ animals }/>
      <Footer email='spmoriarty1@gmail.com'/>
    </div>
  );
}

export default App;
