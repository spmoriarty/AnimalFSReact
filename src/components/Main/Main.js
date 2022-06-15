import React from 'react';
import './Main.css';
import backgroundImage from '../../background.png';
import Animal from '../Animal/Animal';



// whats up

export default function Main() {
  return ( 
    <main className= 'background' style={{ backgroundImage: `url(${ backgroundImage })` }}>;

      {Animal.map((animal, i) => <Animal key={animal.name + i} {...animal} />)}

    </main>

  );
}

