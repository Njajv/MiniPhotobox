import { config } from "./config.js";
import Handlebars from 'handlebars';
export function displayPicture(photoInfo) {
    const Template = document.querySelector("#photoTemplate").innerHTML;
    const TemplateCompile = Handlebars.compile(Template);
    const photo = document.querySelector("#la_photo");
    if (photo) {
        photo.innerHTML = TemplateCompile({ id: photoInfo.photo.id, file: config.photoboxHost + photoInfo.photo.url.href, titre: photoInfo.photo.titre, type: photoInfo.photo.type, width: photoInfo.photo.width, height: photoInfo.photo.height });
    }
}
export function displayCategory(category) {
    const cat = document.querySelector("#la_categorie");
    if (cat) {
        cat.textContent = `categorie : ${category.categorie.nom}`;
    }
}
export function displayComments(comments) {
    const com = document.querySelector("#les_commentaires");
    if (com) {
        com.innerHTML = "";
        comments.forEach(comment => {
            const ligneCommentaire = document.createElement("li");
            ligneCommentaire.textContent = comment.pseudo + ": " + comment.content;
            com.appendChild(ligneCommentaire);
        });
    }
}
