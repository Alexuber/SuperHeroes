import { useLocation } from 'react-router-dom';
import BackLink from 'shared/BackLink/BackLink';
import { Container } from '@mui/material';

const AddSuperHeroPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Container maxWidth="xl">
      <main>
        <BackLink to={backLinkHref}>Back</BackLink>
      </main>
    </Container>
  );
};

export default AddSuperHeroPage;
