import Handlebars from 'handlebars';
export function displayPicture(photo) {
    const Template = document.querySelector("#photoTemplate").innerHTML;
    const TemplateCompile = Handlebars.compile(Template);
    document.querySelector("section.main").innerHTML = TemplateCompile({ id: 42 });
}
/*export function displayCategory(photo: PhotoDescription): void {
    const laCategorie = document.querySelector("#la_categorie");

    if (laCategorie) {
        laCategorie.innerHTML = la_photo({titre: photo.titre});
    }
}*/ 
