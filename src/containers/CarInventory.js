import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { useDispatch, useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import { fetchCarsInventory, setCars } from '../stores/CarSlice';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CarInfo from './CarInfo';
import { IconButton, TextField } from '@mui/material';

function CarInventory() {
  const [filterTitle, setfilterTitle] = useState('');
  const carInventories = useSelector(({ cars: { cars } }) => cars);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsInventory());
  }, []);

  let filteredCarInvetory = carInventories.filter((i) =>
    i?.fields.title.toLowerCase().includes(filterTitle.toLowerCase())
  );

  const handleSortDown = () => {
    const filteredCarInvetoryUp = filteredCarInvetory.sort((a, b) => {
      return a.fields.price - b.fields.price;
    });
    dispatch(setCars(filteredCarInvetoryUp));
  };
  const handleSortUp = () => {
    const filteredCarInvetoryDown = filteredCarInvetory.sort((a, b) => {
      console.log(b.fields.price - a.fields.price);
      return b.fields.price - a.fields.price;
    });
    dispatch(setCars(filteredCarInvetoryDown));
  };

  return (
    <Card sx={{ width: '45%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          id="filled-basic"
          label="Search by title"
          variant="filled"
          value={filterTitle}
          onChange={(e) => setfilterTitle(e.target.value)}
        />
        <div style={{ display: 'flex' }}>
          <IconButton aria-label="delete" size="medium" onClick={handleSortUp}>
            <ArrowUpwardIcon fontSize="inherit" style={{ fill: 'green' }} />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="medium"
            onClick={handleSortDown}
          >
            <ArrowDownwardIcon fontSize="inherit" style={{ fill: 'red' }} />
          </IconButton>
        </div>
      </div>

      <CardContent>
        {filteredCarInvetory.map((item, index) => (
          <CarInfo key={'i' + index} data={item.fields} type="inventory" />
        ))}
      </CardContent>
    </Card>
  );
}

export default CarInventory;
