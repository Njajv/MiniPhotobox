import {gallery, ListGallery} from "./types";

export function displayGallery(gallery: gallery) {
    const container = document.querySelector("#la_galerie");

    if (container){
        container.innerHTML = "";

        gallery.photos.forEach((photo: ListGallery) => {
            const article = document.createElement("article");

            article.dataset.photoId = photo.photo.id.toString();

            article.innerHTML = `<img src="${photo.photo.thumbnail.href}">
                                <p>${photo.photo.titre}</p>`;

            container.appendChild(article);
        });
    }


}