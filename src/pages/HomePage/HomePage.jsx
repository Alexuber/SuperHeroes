import HeroesList from 'components/HeroesList/HeroesList';
import Container from '@mui/material/Container';
import BasicPagination from 'components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllHeroes } from 'redux/hero/hero-selectors';
import { Typography, Box } from '@mui/material';
import banner from 'assets/img/banner.webp';

const HomePage = () => {
  const allHeroes = useSelector(selectAllHeroes);
  const [currentPageHeroes, setCurrentPageHeroes] = useState([]);
  const heroesPerPage = 5;
  const countOfPages = allHeroes.length
    ? Math.ceil(allHeroes.length / heroesPerPage)
    : 1;
  const handleChange = (_, value) => {
    const startIndex = (value - 1) * heroesPerPage;
    const endIndex = startIndex + heroesPerPage;
    setCurrentPageHeroes(allHeroes.slice(startIndex, endIndex));
  };

  useEffect(() => {
    setCurrentPageHeroes(allHeroes.slice(0, heroesPerPage));
  }, [allHeroes, heroesPerPage]);

  return (
    <Container
      maxWidth="lg"
      sx={{ position: 'relative', minHeight: '100vh', marginBottom: '60px' }}
    >
      <main>
        <img src={banner} alt="banner superheroes" width="100%" />
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            margin: '30px 0',
            textTransform: 'uppercase',
            display: 'block',
            height: '50px',
            color: 'white',
            background: 'rgb(25,33,251)',
            background:
              'linear-gradient(90deg, rgba(25,33,251,1) 0%, rgba(255,0,168,1) 100%)',
          }}
        >
          All your favorite heroes here!
        </Typography>
        <HeroesList heroes={currentPageHeroes} />
      </main>
      <Box
        sx={{
          position: 'absolute',
          bottom: -30,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <BasicPagination
          handleChange={handleChange}
          countOfPages={countOfPages}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
