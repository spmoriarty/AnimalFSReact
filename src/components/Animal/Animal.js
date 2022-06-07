import React from 'react';

export default function Animal(name, type, says) {
  return <div className='animal-card'>
    <h1>{name}</h1>
    <p>{type}</p>
    <p>{says}</p>
    {/* <img src = {`/images/${name}.png`} /> */}
  </div>;

}
