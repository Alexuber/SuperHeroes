import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import styles from './Slider.module.scss';

function Slider(props) {
  const images = props.images;

  return (
    <Carousel
      sx={{ maxWidth: '900px', margin: '0 auto' }}
      navButtonsProps={{
        style: {
          opacity: '1',
        },
      }}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <img
        className={styles.img}
        src={require('assets/img/superman.jpg')}
        alt="superman"
        width="600px"
      />
    </Paper>
  );
}

export default Slider;
