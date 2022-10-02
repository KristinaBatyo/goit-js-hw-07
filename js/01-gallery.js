import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = renderGalleryMarkup(galleryItems);
function renderGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<div class="gallery__item>
        a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
        })
        .join("");
    }
    gallery.insertAdjacentHTML("beforeend", galleryMarkup);
    gallery.addEventListener("click", onGalleryClick);
    function onGalleryClick(evt) {
        evt.preventDefault();
        if (evt.target.nodeName !== "IMG") {
            return;
        }
        const instance = basicLightbox.create (
            `<img src="${evt.target.dataset.source}" width="800" height="600"/>`
        );
        instance.show();
    }

