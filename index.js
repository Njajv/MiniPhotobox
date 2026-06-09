import { loadPicture, loadResource } from "./js/Photoloader.js";
import { displayPicture, displayCategory, displayComments } from "./js/ui.js";
export async function getPicture(pictureID) {
    await loadPicture(pictureID)
        .then(photoData => {
        displayPicture(photoData);
            getCategory(photoData)
                .then(category => {
                    displayCategory(category);
                });

            getComments(photoData)
                .then(comments => {
                    displayComments(comments.comments);
                });
    })
        .catch(error => {
        console.error(error);
    });

}
function getCategory(photoData) {
    const uri = photoData.links.categorie.href;
    return loadResource(uri);
}

function getComments(photoData) {
    const uri = photoData.links.comments.href;
    return loadResource(uri);
}
getPicture(window.location.hash ? Number(window.location.hash.substring(1)) : 105);
