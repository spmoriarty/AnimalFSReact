import React from 'react';
import { animals } from './data';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';





function App() {
  return (
    <div className="App">
      <Header />
      
      <Main animals={ animals }/>
      <Footer />
    </div>
  );
}

export default App;
