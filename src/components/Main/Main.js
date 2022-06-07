import React from 'react';
import './Main.css';
import backgroundImage from '../../background.png';

export default function Main() {
  return <main className= 'background' style={{ backgroundImage: `url(${ backgroundImage })` }}></main>;
}
