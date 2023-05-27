import HeroesList from 'components/HeroesList/HeroesList';
import Container from '@mui/material/Container';
import BasicPagination from 'components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllHeroes } from 'redux/hero/hero-selectors';
import { Typography } from '@mui/material';

const HomePage = () => {
  const [currentPageHeroes, setCurrentPageHeroes] = useState([]);
  const allHeroes = useSelector(selectAllHeroes);
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
      maxWidth="xl"
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <main>
        <Typography>All your favorite heroes here!</Typography>
        <HeroesList heroes={currentPageHeroes} />
      </main>
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <BasicPagination
          handleChange={handleChange}
          countOfPages={countOfPages}
        />
      </div>
    </Container>
  );
};

export default HomePage;
