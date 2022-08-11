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

gallery.addEventListener("click", onModalOnClick);
let modal;
function onModalOnClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const imageOriginalLink = event.target.dataset.source;

  // openModal
  openModal(imageOriginalLink);
}
function openModal(imageOriginalLink) {
  modal = basicLightbox.create(
    `<img width="1400" height="900" src="${imageOriginalLink}"> `,
    {
      onShow: (modal) => {
        window.addEventListener("keydown", () => {
          if (event.code === "Escape") {
            modal.close();
          }
        });
      },
    }
  );
  modal.show();
}
// const modal = openModal(imageOriginalLink);

// window.addEventListener("keydown", openModal(imageOriginalLink));
