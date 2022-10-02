import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = renderGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener('click', onGalleryClick);
function renderGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}"/>
        </a>
    </li>`;
    })
    .join("");
    };
    function onGalleryClick(evt) {
        evt.preventDefault();
        if (evt.target.nodeName !== "IMG") {
            return;
        }
    }
    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionsDelay: 250,
      });
