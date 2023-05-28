import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeHero, removeImgById } from 'redux/hero/hero-operations';
import InfoModal from 'shared/Modal/InfoModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroForm from 'components/HeroForm/HeroForm';
import { useSelector } from 'react-redux';
import { selectHeroById } from 'redux/hero/hero-selectors';

const HeroOptions = ({ selectedImage }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteImgModalOpen, setIsDeleteImgModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedHero = useSelector(state => selectHeroById(state, id));

  const navigate = useNavigate();

  const handleDeleteHero = async () => {
    await dispatch(removeHero(id));
    setIsDeleteModalOpen(false);
    navigate('/');
  };

  const handleDeleteImg = () => {
    const data = { id, selectedImage };
    dispatch(removeImgById(data));
    setIsDeleteImgModalOpen(false);
  };

  const handleSubmitEditHero = () => {
    setIsEditModalOpen(false);
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
          variant="contained"
          size="large"
          sx={{ width: '200px' }}
          startIcon={<DeleteIcon />}
          onClick={() => setIsDeleteModalOpen(true)}
        >
          Delete
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
          onClick={() => setIsDeleteImgModalOpen(true)}
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
        onClose={() => setIsEditModalOpen(false)}
      >
        <HeroForm
          selectedHero={selectedHero}
          handleSubmitEditHero={handleSubmitEditHero}
        />
      </InfoModal>
    </>
  );
};

export default HeroOptions;
