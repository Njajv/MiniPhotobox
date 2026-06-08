import {PhotoDescription} from "./types.js";
import Handlebars from 'handlebars';

export function displayPicture(photo: PhotoDescription): void {
    const Template = document.querySelector("#photoTemplate")!.innerHTML;
    const TemplateCompile = Handlebars.compile(Template);

    document.querySelector("#la_photo")!.innerHTML = TemplateCompile( { id: 42} ) ;
}

/*export function displayCategory(photo: PhotoDescription): void {
    const laCategorie = document.querySelector("#la_categorie");

    if (laCategorie) {
        laCategorie.innerHTML = la_photo({titre: photo.titre});
    }
}*/