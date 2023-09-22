import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';
import PowersList from 'components/PowersList/PowersList';
import styles from './HeroInfo.module.scss';
import noImage from 'assets/img/noImage.jpg';

const IMAGE_BASE_URL =
  'https://super-heroes-backend-c2hflesyw-alexuber.vercel.app/';

const HeroInfo = ({ hero }) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = hero;

  const theme = useTheme();
  const isScreenWidthLessThan800 = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ marginBottom: '60px' }}>
      <Typography
        sx={{ textAlign: 'center', marginBottom: '60px' }}
        variant="h3"
      >
        About
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
          gap: '80px',
          padding: '0 50px',
          flexDirection: isScreenWidthLessThan800 ? 'column' : 'row',
        }}
      >
        <img
          src={images.length !== 0 ? `${IMAGE_BASE_URL}${images[0]}` : noImage}
          alt="main hero avatar"
          width="320px"
          height="480px"
          className={styles.mainAvatar}
        />
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ marginBottom: '10px' }} variant="h5">
            <span className={styles.subTitle}>Nickname:</span>
            <span className={styles.desc}> {nickname}</span>
          </Typography>
          <Typography sx={{ marginBottom: '10px' }} variant="h5">
            <span className={styles.subTitle}>Real name:</span>
            <span className={styles.desc}>{real_name}</span>
          </Typography>
          <Typography sx={{ marginBottom: '10px' }} variant="h5">
            <span className={styles.subTitle}>Description:</span>
            <span className={styles.desc}>{origin_description}</span>
          </Typography>
          <Typography sx={{ marginTop: '20px' }} variant="h5">
            <span className={styles.subTitle}>Catch phrase:</span>
            <span className={styles.desc}>{catch_phrase}</span>
          </Typography>
        </Box>
      </Box>
      <PowersList powers={superpowers} />
    </Box>
  );
};

export default HeroInfo;
