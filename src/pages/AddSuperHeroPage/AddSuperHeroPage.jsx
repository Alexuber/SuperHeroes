import { useLocation } from 'react-router-dom';
import BackLink from 'shared/components/BackLink/BackLink';
import { Container } from '@mui/material';
import HeroForm from 'components/HeroForm/HeroForm';

const AddSuperHeroPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Container maxWidth="lg">
      <main>
        <BackLink to={backLinkHref}>Back</BackLink>
        <HeroForm />
      </main>
    </Container>
  );
};

export default AddSuperHeroPage;
