import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <div
    style={{
      backgroundColor: '#9f7357',
    }}
  >
    <Grid
      container
      style={{
        minHeight: '100px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#838383d5',
      }}
    >
      <InstagramIcon />
      <FacebookIcon />
      <Typography variant="caption">
        For more information please contact us through Tel: 8888888888
      </Typography>
    </Grid>
    <AppBar position="static" elevation={0} component="footer" color="default">
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="caption">©2022</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Footer;
