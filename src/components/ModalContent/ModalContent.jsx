import React, { useState } from 'react';
import InfoModal from 'shared/Modal/Modal';

const ModalContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   const style = {
  //     width: '62px',
  //     height: '62px',
  //     borderRadius: '50%',
  //     fontSize: '36px',
  //     lineHeight: '150%',
  //     textAlign: 'center',
  //     color: '#fff',
  //   };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <InfoModal open={isModalOpen} setOpen={closeModal} title=""></InfoModal>
  );
};

export default ModalContent;
