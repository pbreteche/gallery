import { Gallery } from "./gallery.js";

document.addEventListener('DOMContentLoaded', function () {
    const galleryElt = document.querySelector('.gallery');
    const gallery = new Gallery(galleryElt);
    gallery.init();
});
