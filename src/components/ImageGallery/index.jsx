import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Modal } from '../Modal';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
//import { ModalStyled } from 'components/Modal/Modal.styled';
ReactModal.setAppElement('#root');

export class ImageGallery extends Component {
  state = {
    showModal: false,
    showImg: {},
  };

  handleOpenModal = (imgUrl, alt) => {
    document.body.style.overflow = 'hidden';
    this.setState({ showModal: true, showImg: { imgUrl, alt } });
  };

  handleCloseModal = () => {
    document.body.style.overflow = '';
    this.setState({ showModal: false });
  };

  render() {
    const { img } = this.props;
    const { imgUrl, alt } = this.props;
    const { showModal } = this.state;    
    return (
      <>
        <ImageGalleryStyled className="galleryWrapp">
          {img &&
            img.map(item => (
              <ImageGalleryItem
                key={item.id}
                itemImg={item}
                onOpenModal={this.handleOpenModal}
              />
            ))}
        </ImageGalleryStyled>
        {showModal && (
          <Modal
            imgUrl={imgUrl}
            alt={alt}
            hideModal={this.handleCloseModal}
            showModal={showModal}
          />
        )}
      </>
    );
  }
}