import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import BackLink from 'shared/components/BackLink/BackLink';
import Slider from 'components/Slider/Slider';
import HeroInfo from 'components/HeroInfo/HeroInfo';
import HeroOptions from 'components/HeroOptions/HeroOptions';
import { selectHeroById } from 'redux/hero/hero-selectors';
import noImage from 'assets/img/noImage.jpg';
import styles from './HeroPage.module.scss';

const HeroPage = () => {
  const [selectedImage, SetSelectedImage] = useState('');
  const { id } = useParams();
  const superHero = useSelector(state => selectHeroById(state, id));

  useEffect(() => {
    if (superHero && superHero.images && superHero.images.length > 0) {
      SetSelectedImage(superHero.images[0]);
    }
  }, [superHero]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const handleSelectImage = img => {
    SetSelectedImage(img);
  };

  if (!superHero) {
    return <Typography>Hero not found</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <main>
        <BackLink to={backLinkHref}>Back</BackLink>
        <HeroInfo hero={superHero} />
        {superHero.images !== 'undefined' ? (
          <Slider
            images={
              superHero.images !== 'undefined' ? superHero.images : [noImage]
            }
            currentImg={handleSelectImage}
          />
        ) : (
          <img
            src={noImage}
            alt="backdrop no img"
            width="600px"
            className={styles.img}
          />
        )}
        <HeroOptions
          sx={{ position: 'relative' }}
          selectedImage={selectedImage}
        />
      </main>
    </Container>
  );
};

export default HeroPage;
