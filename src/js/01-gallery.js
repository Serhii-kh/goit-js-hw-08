import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryDivRef = document.querySelector('.gallery');
const createGalleryMarkup = items => {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
`;
    })
    .join('');
};

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryDivRef.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

// console.log(galleryDivRef);
