import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import styles from './Slider.module.scss';
import { Typography } from '@mui/material';
const IMAGE_BASE_URL = 'http://localhost:3001/';

function Slider(props) {
  const images = props.images;
  return (
    <>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Gallery
      </Typography>
      <Carousel
        sx={{ maxWidth: '900px', margin: '0 auto' }}
        navButtonsAlwaysVisible
        next={(next, active) => props.currentImg(images[active])}
        // prev={(prev, active) =>
        //   console.log(`we left ${active}, and are now at ${prev}`)
        // }
      >
        {images.map((item, i) => (
          <Item key={i} item={item} onDelete={props.onDelete} />
        ))}
      </Carousel>
    </>
  );
}

function Item(props) {
  return (
    <Paper>
      <img
        className={styles.img}
        src={`${IMAGE_BASE_URL}${props.item}`}
        alt="superman"
        width="600px"
      />
    </Paper>
  );
}

export default Slider;
