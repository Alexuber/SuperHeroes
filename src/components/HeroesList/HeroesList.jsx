import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HeroCard from 'components/HeroCard/HeroCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllHeroes, selectIsLoading } from 'redux/hero/hero-selectors';
import { useEffect } from 'react';
import { getHeroes } from 'redux/hero/hero-operations';
import { Loader } from 'shared/Loader/Loader';

export default function HeroesList() {
  const heroes = useSelector(selectAllHeroes);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

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
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <HeroCard />
              <ListItemText />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <HeroCard />
              <ListItemText />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <HeroCard />
              <ListItemText />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <HeroCard />
              <ListItemText />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
              <HeroCard />
              <ListItemText />
            </ListItem>
          </List>
        </Grid> */}
      </Grid>
    </Box>
  );
}
