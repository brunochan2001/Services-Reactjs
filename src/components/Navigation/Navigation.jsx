import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GiteIcon from '@mui/icons-material/Gite';
import Divider from '@mui/material/Divider';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { Link } from 'react-router-dom';
import './index.css';

const Navigation = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = open => {
    setShowDrawer(open);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/" className="appbar-link">
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Inicio
                </Button>
              </Link>
              <Link to="/Salud" className="appbar-link">
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Salud
                </Button>
              </Link>
              <Link to="/Hogar" className="appbar-link">
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Hogar
                </Button>
              </Link>
              <Link to="/Auto" className="appbar-link">
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Auto
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        <Drawer
          left="left"
          open={showDrawer}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              <ListItem disablePadding>
                <Link to="/" className="drawer-link">
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon></HomeIcon>
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <Link to="/Salud" className="drawer-link">
                  <ListItemButton>
                    <ListItemIcon>
                      <LocalHospitalIcon></LocalHospitalIcon>
                    </ListItemIcon>
                    <ListItemText primary="Salud" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/Hogar" className="drawer-link">
                  <ListItemButton>
                    <ListItemIcon>
                      <GiteIcon></GiteIcon>
                    </ListItemIcon>
                    <ListItemText primary="Hogar" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to="/Auto" className="drawer-link">
                  <ListItemButton>
                    <ListItemIcon>
                      <DirectionsCarFilledIcon></DirectionsCarFilledIcon>
                    </ListItemIcon>
                    <ListItemText primary="Auto" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default Navigation;
