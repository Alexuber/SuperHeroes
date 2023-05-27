import { Box, Button } from '@mui/material';
// import { Link, useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeHero } from 'redux/hero/hero-operations';
import InfoModal from 'shared/Modal/InfoModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroForm from 'components/HeroForm/HeroForm';

const HeroOptions = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteHero = async () => {
    await dispatch(removeHero(id));
    setIsDeleteModalOpen(false);
    navigate('/');
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Button
          // component={Link}
          // to={{
          //   pathname: "/quiz/games",
          //   state: { from: "/quiz" },
          // }}
          variant="contained"
          // color="button"
          size="large"
          sx={{ width: '200px' }}
          startIcon={<DeleteIcon />}
          onClick={() => setIsDeleteModalOpen(true)}
        >
          Delete
        </Button>
        <Button
          // component={Link}
          // to={{
          //   pathname: "/quiz/new-game",
          //   state: { from: "/quiz" },
          // }}
          variant="contained"
          // color="button"
          size="large"
          sx={{ width: '190px' }}
          startIcon={<EditIcon />}
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit
        </Button>
      </Box>
      <InfoModal title="Delete SuperHero?" open={isDeleteModalOpen}>
        <Button
          // component={Link}
          // to={{
          //   pathname: "/quiz/games",
          //   state: { from: "/quiz" },
          // }}
          variant="contained"
          // color="button"
          size="large"
          sx={{ width: '150px', marginRight: '30px' }}
          onClick={handleDeleteHero}
        >
          Delete
        </Button>
        <Button
          // component={Link}
          // to={{
          //   pathname: "/quiz/new-game",
          //   state: { from: "/quiz" },
          // }}
          variant="contained"
          // color="button"
          size="large"
          sx={{ width: '150px' }}
          onClick={() => setIsDeleteModalOpen(false)}
        >
          Cancel
        </Button>
      </InfoModal>
      <InfoModal open={isEditModalOpen}>
        <HeroForm />
      </InfoModal>
    </>
  );
};

export default HeroOptions;
