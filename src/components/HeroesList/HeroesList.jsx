import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HeroCard from 'components/HeroCard/HeroCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/hero/hero-selectors';
import { Loader } from 'shared/Loader/Loader';

export default function HeroesList({ heroes }) {
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
