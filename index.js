import { loadPicture, loadResource } from "./js/Photoloader.js";
import { displayPicture } from "./js/ui.js";
export const getPicture = (pictureID) => {
    loadPicture(pictureID)
        .then(photoData => {
        displayPicture(photoData);
    })
        .catch(error => {
        console.error(error);
    });
};
const loadCategory = (photoData) => {
    const uri = photoData.links.categorie.href;
    return loadResource(uri);
};
getPicture(window.location.hash ? Number(window.location.hash.substring(1)) : 105);
