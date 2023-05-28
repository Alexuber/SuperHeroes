import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/hero/hero-selectors';
import { Loader } from 'shared/components/Loader/Loader';
import HeroCard from 'components/HeroCard/HeroCard';
import { List, ListItem, ListItemText, Box, Grid } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

export default function HeroesList({ heroes = [] }) {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoading && <Loader />}
      <Grid container spacing={2}>
        {heroes.map((hero, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <HeroCard hero={hero} />
                <ListItemText />
              </ListItem>
            </List>
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <NavLink to="/addSuperHero">
              <LibraryAddIcon
                sx={{
                  width: '180px',
                  height: '180px',
                  '&:hover': { color: 'red' },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.2)',
                  },
                }}
              />
            </NavLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
