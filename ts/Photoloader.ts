import {config} from "./config.js";
import {Photo, Ressource} from "./types.js";


export async function loadPicture(idPicture: number): Promise<Ressource> {
    let photos = "/photos";
    return await fetch(config.photoboxHost+config.photoboxApiRootUri+photos+"/"+idPicture, {
        credentials: "include"
    })
        .then(async response => {
            if (response.ok){
                return await response.json();
            }
            console.log('response error : ' + response.status);
            return Promise.reject(new Error(response.statusText));
        })
        .catch (error => {
            console.error(error);
        });

}

export async function loadResource(uri: string): Promise<Photo>{
    return await fetch(config.photoboxHost+uri, {
        credentials: "include"
    })
        .then(async response => {
            if (response.ok){
                return await response.json();
            }
            console.log('response error : ' + response.status);
            return Promise.reject(new Error(response.statusText));
        })
        .catch (error => {
            console.error(error);
        });
}