import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'path/to/your/image-preview1.jpg',
    original: 'path/to/your/image1.jpg',
    description: 'Image 1 Description'
  },
  {
    preview: 'path/to/your/image-preview2.jpg',
    original: 'path/to/your/image2.jpg',
    description: 'Image 2 Description'
  },
  // додайте більше об'єктів зображень за необхідності
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img 
        class="gallery-image" 
        src="${preview}" 
        alt="${description}" 
      />
    </a>
  </li>
`).join('');

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});