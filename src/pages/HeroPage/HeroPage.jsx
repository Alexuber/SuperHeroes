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

const HeroPage = () => {
  const { id } = useParams();
  const superHero = useSelector(state => selectHeroById(state, id));

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  if (!superHero) {
    return <Typography>Hero not found</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <main>
        <BackLink to={backLinkHref}>Back</BackLink>
        <HeroInfo hero={superHero} />
        <Slider images={superHero.images} />
        <HeroOptions />
      </main>
    </Container>
  );
};

export default HeroPage;
