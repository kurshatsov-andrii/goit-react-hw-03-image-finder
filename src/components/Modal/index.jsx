import React from 'react';
import ReactModal from 'react-modal';
import { ModalStyled, ModalBoxContent } from './Modal.styled';

export function Modal({   imgUrl, alt, showModal, hideModal }) {
  return (
  <ReactModal
          isOpen={showModal}
          contentLabel="Modal"
          onRequestClose={hideModal}
          style={ModalStyled}
        >
    <ModalBoxContent>
      <img src={imgUrl} alt={alt}/>
    </ModalBoxContent>
        </ReactModal>
  );
}