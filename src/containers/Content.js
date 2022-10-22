import React from 'react';
import CarBusket from './CarBusket';
import CarInventory from './CarInventory';

function Content() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '70vh',

        justifyContent: 'space-evenly',
        padding: '20px',
        backgroundColor: '#565656',
      }}
    >
      <CarInventory />
      <CarBusket />
    </div>
  );
}

export default Content;
