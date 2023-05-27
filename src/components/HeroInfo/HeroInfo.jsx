import { Box, Typography } from '@mui/material';
import styles from './HeroInfo.module.scss';
import PowersList from 'components/PowersList/PowersList';

const IMAGE_BASE_URL = 'http://localhost:3001/';

const HeroInfo = ({ hero }) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = hero;
  return (
    <Box>
      <Typography className={styles.heroNickname}>{nickname}</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          className={styles.mainImg}
          src={`${IMAGE_BASE_URL}${images[0]}`}
          alt="main hero avatar"
          width="320px"
          height="480px"
        />
        <Box>
          <Typography className={styles.heroInfoItem}>
            Nickname: {nickname}
          </Typography>
          <Typography className={styles.heroInfoItem}>
            Real name: {real_name}
          </Typography>
          <Typography className={styles.heroInfoItem}>
            Description: {origin_description}
          </Typography>
          <PowersList powers={superpowers} />
        </Box>
      </Box>
      <Typography className={styles.catchPhrase}>
        Catch phrase: {catch_phrase}
      </Typography>
    </Box>
  );
};

export default HeroInfo;
