// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
setGalleryHtml("beforeend", galleryElCreateMarkup(galleryItems));

function galleryElCreateMarkup(galleryItems){
    return galleryItems
    .map(({ preview,original,description}) => {
       return `<li class = "gallery__item">
              <a class ="gallery__link" href="${original}">
              <img
              class ="gallery__image"
              src="${preview}"
              alt="${description}"
              />
              </a>
       </li>`;
    })
    .join("");
}

function setGalleryHtml(position, gallery) {
  galleryList.insertAdjacentHTML(position, gallery);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: "bottom",
  download: "Download",

});

