import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: 'path/to/preview1.jpg',
    original: 'path/to/original1.jpg',
    description: 'Image 1 description'
  },
  {
    preview: 'path/to/preview2.jpg',
    original: 'path/to/original2.jpg',
    description: 'Image 2 description'
  },
  
];

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = images.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
}).join('');

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});