import React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#282c34' }}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          <span style={{ color: 'white' }}>Drive</span>

          <span
            style={{
              padding: '5px',
              backgroundColor: '#fc7d22',
              color: 'black',
              borderRadius: '4px',
            }}
          >
            Hub
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
