import React from 'react';
import './Main.css';
import backgroundImage from '../../background.png';
import animals from '../Animal.js';


export default function Main() {
  return <main className= 'background' style={{ backgroundImage: `url(${ backgroundImage })` }}></main>;
}

