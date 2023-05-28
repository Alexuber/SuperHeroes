import React, { useState } from 'react';
import InfoModal from 'shared/components/Modal/InfoModal';

const ModalContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <InfoModal open={isModalOpen} setOpen={closeModal} title=""></InfoModal>
  );
};

export default ModalContent;
