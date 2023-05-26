import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BoltIcon from '@mui/icons-material/Bolt';
import { Box, Typography } from '@mui/material';

export default function PowersList({ powers }) {
  return (
    <Box>
      <Typography>Super powers:</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {powers.map((power, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <BoltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={power} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
