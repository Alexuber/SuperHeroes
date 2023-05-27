import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
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
          <Box
          //   className={styles.box}
          >
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
