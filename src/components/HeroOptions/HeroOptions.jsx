import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import InfoModal from 'shared/components/Modal/InfoModal';
import HeroForm from 'components/HeroForm/HeroForm';
import { Box, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { removeHero, removeImgById } from 'redux/hero/hero-operations';
import { selectHeroById, selectIsLoading } from 'redux/hero/hero-selectors';
import notify from 'utils/notify';

const HeroOptions = ({ selectedImage }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteImgModalOpen, setIsDeleteImgModalOpen] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedHero = useSelector(state => selectHeroById(state, id));

  const navigate = useNavigate();

  const handleDeleteHero = async () => {
    dispatch(removeHero(id));

    setIsDeleteModalOpen(false);
    navigate('/');
  };

  const handleDeleteImg = async () => {
    if (selectedHero.images.length === 0) {
      setIsDeleteImgModalOpen(false);
      return notify('error', 'Please add images!');
    }
    const data = { id, selectedImage };
    dispatch(removeImgById(data));

    setIsDeleteImgModalOpen(false);
  };

  const handleSubmitEditHero = () => {
    setIsEditModalOpen(false);
  };
  return (
    <Box sx={{ padding: '60px' }}>
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        Options
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '60px',
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ width: '200px' }}
          startIcon={<DeleteIcon />}
          onClick={() => setIsDeleteModalOpen(true)}
        >
          Hero
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: '190px' }}
          startIcon={<EditIcon />}
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: '190px' }}
          startIcon={<DeleteIcon />}
          onClick={() => {
            setIsDeleteImgModalOpen(true);
          }}
        >
          Picture
        </Button>
      </Box>
      <InfoModal
        title="Delete SuperHero?"
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        sx={{ marginTop: '50px' }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ width: '150px', marginRight: '30px' }}
          onClick={handleDeleteHero}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: '150px' }}
          onClick={() => setIsDeleteModalOpen(false)}
        >
          Cancel
        </Button>
      </InfoModal>
      <InfoModal
        title="Delete this image from collection?"
        open={isDeleteImgModalOpen}
        onClose={() => setIsDeleteImgModalOpen(false)}
        sx={{ marginTop: '50px' }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ width: '150px', marginRight: '30px' }}
          onClick={handleDeleteImg}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: '150px' }}
          onClick={() => setIsDeleteImgModalOpen(false)}
        >
          Cancel
        </Button>
      </InfoModal>

      <InfoModal
        open={isEditModalOpen}
        title="Edit your SuperHero"
        onClose={() => {
          if (!isLoading) {
            setIsEditModalOpen(false);
          }
        }}
      >
        <HeroForm
          selectedHero={selectedHero}
          handleSubmitEditHero={handleSubmitEditHero}
        />
      </InfoModal>
    </Box>
  );
};

export default HeroOptions;
