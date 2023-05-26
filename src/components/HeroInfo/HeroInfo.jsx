import { Box, Typography } from '@mui/material';
import styles from './HeroInfo.module.scss';
import PowersList from 'components/PowersList/PowersList';

const HeroInfo = ({ hero }) => {
  const {
    // id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    // images,
  } = hero;
  return (
    <Box>
      <Typography>{nickname}</Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <img
          className={styles.mainImg}
          src={require('assets/img/superman.jpg')} // images[0]
          alt="main hero avatar"
        />
        <Box>
          <Typography>Nickname: {nickname}</Typography>
          <Typography>Real name: {real_name}</Typography>
          <Typography>Description: {origin_description}</Typography>
          <PowersList powers={superpowers}></PowersList>
        </Box>
      </Box>
      <Typography>Catch phrase: {catch_phrase}</Typography>
    </Box>
  );
};

export default HeroInfo;
