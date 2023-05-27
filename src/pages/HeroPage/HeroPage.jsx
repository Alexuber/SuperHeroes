import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import BackLink from 'shared/BackLink/BackLink';
import Slider from 'components/Slider/Slider';
import HeroInfo from 'components/HeroInfo/HeroInfo';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectHeroById } from 'redux/hero/hero-selectors';

// const superman = {
//   id: 'super',
//   nickname: 'Superman',
//   real_name: 'Clark Kent',
//   origin_description:
//     'he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton destruction',
//   superpowers: [
//     'solar energy absorption and healing factor',
//     'solar flare and heat vision,solar invulnerability',
//     'flight',
//   ],
//   catch_phrase: '“Look, up in the sky, its a bird, its a plane, its Superman!”',
//   images: [
//     'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.cnn.com%2Fapi%2Fv1%2Fimages%2Fstellar%2Fprod%2F221024162135-man-of-steel-cavill.jpg%3Fc%3D16x9&tbnid=tL2OhalnPBeuSM&vet=12ahUKEwi8-6rF4pL_AhXYsCoKHaSLD0EQMygEegUIARDIAQ..i&imgrefurl=https%3A%2F%2Fwww.cnn.com%2F2022%2F12%2F14%2Fentertainment%2Fhenry-cavill-superman-no-more%2Findex.html&docid=Q-gPBSgie18ekM&w=2021&h=1137&q=superman&ved=2ahUKEwi8-6rF4pL_AhXYsCoKHaSLD0EQMygEegUIARDIAQ',
//     'https://www.google.com/imgres?imgurl=https%3A%2F%2Fphantom-marca.unidadeditorial.es%2F154bdb0390eaed07cbe1b39c11988456%2Fresize%2F1320%2Ff%2Fjpg%2Fassets%2Fmultimedia%2Fimagenes%2F2022%2F10%2F20%2F16662224157675.jpg&tbnid=7Tuxrsvh8J1m6M&vet=12ahUKEwi8-6rF4pL_AhXYsCoKHaSLD0EQMygVegUIARDsAQ..i&imgrefurl=https%3A%2F%2Fwww.marca.com%2Fen%2Flifestyle%2Fmovies%2F2022%2F10%2F20%2F635089e722601dc52d8b459b.html&docid=E2BcknebZzxeVM&w=1320&h=880&q=superman&ved=2ahUKEwi8-6rF4pL_AhXYsCoKHaSLD0EQMygVegUIARDsAQ',
//     'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.economictimes.com%2Fthumb%2Fheight-450%2Cwidth-600%2Cimgsize-52582%2Cmsid-96243591%2Fsuperman.jpg&tbnid=LmXFCtGYLL0XSM&vet=12ahUKEwi8-6rF4pL_AhXYsCoKHaSLD0EQMygJegUIARDSAQ..i&imgrefurl=https%3A%2F%2Feconomictimes.indiatimes.com%2Fmagazines%2Fpanache%2Fhenry-cavill-will-not-be-returning-as-superman-actor-reveals-he-has-been-dropped-as-clark-kent%2Farticleshow%2F96243407.cms&docid=GBdepmbXwwHiZM&w=600&h=450&q=superman&ved=2ahUKEwi8-6rF4pL_AhXYsCoKHaSLD0EQMygJegUIARDSAQ',
//     'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimageio.forbes.com%2Fspecials-images%2Fimageserve%2F63781539192e7eae592d6c1f%2F0x0.jpg%3Fformat%3Djpg%26width%3D1200&tbnid=wk3XoERI4FKw9M&vet=12ahUKEwi8-6rF4pL_AhXYsCoKHaSLD0EQMygMegUIARDaAQ..i&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fmarkhughes%2F2022%2F11%2F18%2Freport-superman-plans-up-in-the-air-for-henry-cavill-and-dc-studios%2F&docid=8L43wK7B68eDeM&w=1200&h=900&q=superman&ved=2ahUKEwi8-6rF4pL_AhXYsCoKHaSLD0EQMygMegUIARDaAQ',
//   ],
// };

const HeroPage = () => {
  const { id } = useParams();
  const superHero = useSelector(state => selectHeroById(state, id));

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <Container maxWidth="xl">
      <main>
        <BackLink to={backLinkHref}>Back</BackLink>
        <HeroInfo hero={superHero} />
        <Slider images={superHero.images} />
      </main>
    </Container>
  );
};

export default HeroPage;
