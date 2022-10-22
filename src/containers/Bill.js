import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import CardContent from '@mui/material/CardContent';
import { fetchDiscountsdata } from '../stores/DiscountSlice';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Bill() {
  const [discount, setDiscount] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [discountPrice, setDiscountPrice] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiscountsdata());
  }, [dispatch]);
  const carBusket = useSelector(({ myBusket: { myBuskets } }) => myBuskets);
  const discounts = useSelector(({ discount: { discounts } }) => discounts);
  const totalPrice = carBusket.reduce((p, c) => p + c.price * c.amount, 0);

  const handleSubmitDiscountCode = async (e) => {
    e.preventDefault();
    try {
      setDiscount(discountCode);
    } catch (err) {
      console.log(err);
    } finally {
      setDiscountCode('');
    }
  };

  useEffect(() => {
    getDisCountCode();
  }, [discount]);

  useEffect(() => {
    const total = totalPrice - discountPrice;
    total < 0 ? setGrandTotal(0) : setGrandTotal(total);
  }, [discountPrice, totalPrice]);

  const getDisCountCode = async () => {
    console.log(discount);
    const getDiscountPrice = await discounts.find((i) => {
      console.log(i.fields.code);
      return i.fields.code === discount;
    });

    if (getDiscountPrice) {
      setDiscountPrice(getDiscountPrice?.fields.amount);
    }
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="div" variant="h5">
          Total
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {totalPrice} Bath
        </Typography>
      </CardContent>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="div" variant="h5">
          Discount
        </Typography>

        {discount === '' || discount.trim() === '' ? (
          <FormControl>
            <div style={{ display: 'flex' }}>
              <TextField
                id="filled-basic"
                label="Discount code"
                variant="filled"
                value={discountCode}
                onChange={(e) => {
                  setDiscountCode(e.target.value);
                }}
              />
              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleSubmitDiscountCode}
              >
                <ArrowUpwardIcon fontSize="inherit" style={{ fill: 'green' }} />
              </IconButton>
            </div>
          </FormControl>
        ) : (
          <div style={{ display: 'flex' }}>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => {
                setDiscount('');
                setDiscountPrice(0);
              }}
            >
              <CancelIcon fontSize="inherit" style={{ fill: 'red' }} />
            </IconButton>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {discountPrice} Bath
            </Typography>
          </div>
        )}
      </CardContent>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="div" variant="h5">
          Grand Total
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {grandTotal} Bath
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Bill;
