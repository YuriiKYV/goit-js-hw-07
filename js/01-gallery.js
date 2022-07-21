import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createItem(array) {
    return array.reduce((acc, item) => acc + `
    <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
    </div>`, ''); 
}

const list = createItem(galleryItems);
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', list);

function imgHandler(e) {
  e.preventDefault();
  const instance = basicLightbox.create(`
    <img 
    src="${e.target.dataset.source}" 
    width="800" height="600"
    alt="${e.target.alt}">
`);
  
  instance.show();
}
gallery.addEventListener('click', imgHandler);