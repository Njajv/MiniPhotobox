export interface PhotoDescription {
    id: number;
    titre: string;
    file: string;
    descr: string;
    format: string;
    type: string;
    size: number,
    width: number,
    height: number,
    url: {
        href: string;
    }
}

export interface Ressource {
    type: string;
    photo: PhotoDescription;
    links:{
        categorie:{
            href: string;
        }
        comments:{
            href: string;
        }
    }
}

export interface categorie {
    id: number;
    nom: string;
    descr: string;
}