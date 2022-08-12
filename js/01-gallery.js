import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeGalleryCard = ({ preview, original, description }) => {
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
const makeGalleryCardList = galleryItems.map(makeGalleryCard).join("");
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", makeGalleryCardList);

gallery.addEventListener("click", onOpenModal);
window.addEventListener("keydown", onCloseModal);

let modal;
function onOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const imageOriginalLink = event.target.dataset.source;
  modal = basicLightbox.create(
    `<img width="1400" height="900" src="${imageOriginalLink}"> `
  );
  modal.show();
}

function onCloseModal(event) {
  if (event.code === "Escape") {
    modal?.close();
  }
}

// ,
//     {
//       onShow: (modal) => {
//         window.addEventListener("keydown", () => {
//           if (event.code === "Escape") {
//             modal.close();
//           }
//         });
//       },
//     }
