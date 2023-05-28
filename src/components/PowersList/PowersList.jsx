import BoltIcon from '@mui/icons-material/Bolt';
import {
  Box,
  Typography,
  ListItemText,
  ListItemAvatar,
  ListItem,
  List,
  Avatar,
} from '@mui/material';

export default function PowersList({ powers }) {
  return (
    <Box>
      <Typography sx={{ marginTop: '35px', textAlign: 'center' }} variant="h5">
        Super powers:
      </Typography>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          margin: '0 auto',
        }}
      >
        {powers.map((power, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar sx={{ width: '25px', height: '25px' }}>
                <BoltIcon sx={{ fill: 'yellow' }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={power} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
