import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import BackLink from 'shared/BackLink/BackLink';
import Slider from 'components/Slider/Slider';
import HeroInfo from 'components/HeroInfo/HeroInfo';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectHeroById } from 'redux/hero/hero-selectors';
import HeroOptions from 'components/HeroOptions/HeroOptions';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const HeroPage = () => {
  const [selectedImage, SetSelectedImage] = useState('');
  const { id } = useParams();
  const superHero = useSelector(state => selectHeroById(state, id));

  useEffect(() => {
    SetSelectedImage(superHero.images[0]);
  }, [superHero.images]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const handleSelectImage = img => {
    SetSelectedImage(img);
  };

  if (!superHero) {
    return <Typography>Hero not found</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <main>
        <BackLink to={backLinkHref}>Back</BackLink>
        <HeroInfo hero={superHero} />
        <Slider images={superHero.images} currentImg={handleSelectImage} />
        <HeroOptions
          sx={{ position: 'relative' }}
          selectedImage={selectedImage}
        />
      </main>
    </Container>
  );
};

export default HeroPage;
