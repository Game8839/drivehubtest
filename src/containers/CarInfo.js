import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import RemoveIcon from '@mui/icons-material/Remove';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';
import { addMyBuskets, removeMyBuskets } from '../stores/MyBusketSlice';

function CarInfo({ data, type }) {
  const dispatch = useDispatch();

  const handleOnclickPlus = () => {
    dispatch(addMyBuskets(data));
  };
  const handleOnclickMinus = () => {
    dispatch(removeMyBuskets(data));
  };
  const handleOnclick = () => {
    if (type === 'inventory') {
      return dispatch(addMyBuskets(data));
    }
  };
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        ':hover': { backgroundColor: 'ButtonHighlight' },
      }}
      onClick={handleOnclick}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto', textAlign: 'start' }}>
          <Typography component="div" variant="h5">
            {data.title}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {data.price} Bath/Day
            </Typography>
            {type === 'inventory' ? (
              ''
            ) : (
              <div style={{ justifySelf: 'end' }}>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={handleOnclickPlus}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
                <Box component="div" sx={{ display: 'inline' }}>
                  {type === 'cart' ? data.amount : ''}
                </Box>

                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={handleOnclickMinus}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
              </div>
            )}
          </div>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={data.photo}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default CarInfo;
