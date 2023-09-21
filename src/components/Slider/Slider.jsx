import Carousel from 'react-material-ui-carousel';
import { Typography, Paper, Box } from '@mui/material';
import styles from './Slider.module.scss';
import noImage from 'assets/img/noImage.jpg';
const IMAGE_BASE_URL = 'https://sup-back.onrender.com';

function Slider(props) {
  const images = props.images;

  return (
    <Box>
      {images.length !== 0 ? (
        <Box>
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', marginBottom: '60px' }}
          >
            Gallery
          </Typography>
          <Carousel
            sx={{ maxWidth: '900px', margin: '0 auto' }}
            navButtonsAlwaysVisible
            next={(next, active) => props.currentImg(images[active])}
          >
            {images.map((item, i) => (
              <Item key={i} item={item} onDelete={props.onDelete} />
            ))}
          </Carousel>
        </Box>
      ) : (
        <img
          src={noImage}
          alt="backdrop no img"
          width="400px"
          className={styles.noImg}
        />
      )}
    </Box>
  );
}

function Item(props) {
  return (
    <Paper>
      <img
        className={styles.img}
        src={`${IMAGE_BASE_URL}${props.item}`}
        alt="hero avatar"
        width="600px"
      />
    </Paper>
  );
}

export default Slider;
