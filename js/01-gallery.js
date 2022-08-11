import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const makeGalleryCardsMakeup = ({ preview, original, description }) => {
  return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`;
};

const makeGalleryList = galleryItems.map(makeGalleryCardsMakeup).join("");

gallery.insertAdjacentHTML("beforeend", makeGalleryList);

gallery.addEventListener("click", onImageClick);

let imageOriginalLink;

function onImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  imageOriginalLink = event.target.dataset.source;
  openModal();
}

function openModal() {
  document.querySelector(".gallery__link").onclick = () => {
    basicLightbox
      .create(`<img width="1400" height="900" src="${imageOriginalLink}"> `)
      .show();
    console.log(basicLightbox.create);
  };
}
