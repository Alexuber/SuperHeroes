import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import BasicMenu from 'components/Menu/Menu';

const UserBar = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <BasicMenu />
          </Box>
          <Typography variant="h6" color="inherit" noWrap>
            Welcome, User!
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default UserBar;
