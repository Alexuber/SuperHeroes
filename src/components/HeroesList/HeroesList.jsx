import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HeroCard from 'components/HeroCard/HeroCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function HeroesList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
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
      </Grid>
    </Box>
  );
}
