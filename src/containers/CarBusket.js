import React from 'react';
import Card from '@mui/material/Card';
import { useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';

import CarInfo from './CarInfo';
import Bill from './Bill';

function CarBusket() {
  const carBusket = useSelector(({ myBusket: { myBuskets } }) => myBuskets);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '45%',
        justifyContent: 'space-between',
        textAlign: 'space-between',
      }}
    >
      <CardContent>
        {carBusket.map((item, index) => (
          <CarInfo key={'c' + index} data={item} type="cart" />
        ))}
      </CardContent>
      <Bill />
    </Card>
  );
}

export default CarBusket;
