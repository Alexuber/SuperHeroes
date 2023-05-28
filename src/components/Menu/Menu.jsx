import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Menu.module.scss';

export default function BasicMenu() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <MenuIcon
        sx={{ mr: 2, cursor: 'pointer' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {location.pathname !== '/' && (
          <MenuItem onClick={handleClose}>
            <NavLink to="/" className={styles.link}>
              Home
            </NavLink>
          </MenuItem>
        )}
        {location.pathname !== '/addSuperHero' && (
          <MenuItem onClick={handleClose}>
            <NavLink to="/addSuperHero" className={styles.link}>
              Add SuperHero
            </NavLink>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
}
