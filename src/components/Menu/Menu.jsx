import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './Menu.module.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

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
    <div>
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
    </div>
  );
}
