export interface Photo {
    photo:{
        id: number;
        titre: string;
        file: string;
        descr: string;
        format: string;
        type: string;
        size: number;
        width: number;
        height: number;
        url: {
            href: string;
        }
    }
}

export interface Ressource {
    type: string;
    photo: Photo;
    links:{
        categorie:{
            href: string;
        }
        comments:{
            href: string;
        }
    }
}

export interface category {
    categorie:{
        id: number;
        nom: string;
        descr: string;
    }
}

export interface comment {
        id: number;
        titre: string;
        content:  string;
        pseudo: string;
        date: Date;
}

export interface gallery{
    links:{
        next: {
            href: string;
        },
        prev: {
            href: string;
        },
        last: {
            href: string;
        },
        first: {
            href: string;
        }
    },
    photos:{
        photo: ListGallery[];
    }
}

export interface ListGallery{
    photo: {
        id: number;
        titre: string;
        file: string;
        thumbnail: {
            href: string;
        },
        original: {
            href: string;
        }
    },
    links: {
        self: {
            href: string;
        }
    }
}