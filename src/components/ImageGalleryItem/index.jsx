import React from 'react';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
  itemImg: { webformatURL, tags, largeImageURL },
  onOpenModal,  
}) {
  return (
    <ImageGalleryItemStyled onClick={() => onOpenModal(largeImageURL, tags)}>
      <img src={webformatURL} alt={tags} width={300} />
    </ImageGalleryItemStyled>
  );
}