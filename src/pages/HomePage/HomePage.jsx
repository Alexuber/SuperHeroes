import HeroesList from 'components/HeroesList/HeroesList';
import Container from '@mui/material/Container';
import BasicPagination from 'components/Pagination/Pagination';

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <main>
        <h1>All your favorites heroes here!</h1>
        <HeroesList />
        <BasicPagination />
      </main>
    </Container>
  );
};

export default HomePage;
