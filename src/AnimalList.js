import React from 'react';
import Animal from './components/Animal/Animal';
import backgroundImage from './background.png';

export default function animalList({ animals }) {
  return (
    <main className= 'background' style={{ backgroundImage: `url(${ backgroundImage })` }}>;
  
      {animals.map((animal, i) => <Animal key={animal.name + i} {...animal} />)}

    </main>
  );
}



