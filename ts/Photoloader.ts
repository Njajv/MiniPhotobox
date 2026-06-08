import {config} from "./config.js";
import {PhotoDescription} from "./types.js";


export function loadPicture(idPicture: number): Promise<PhotoDescription> {
    let photos = "/photos";
    return fetch(config.photoboxHost+config.photoboxApiRootUri+photos+"/"+idPicture, {
        credentials: "include"
    })
        .then(response => {
            if (response.ok){
                return response.json();
            }
            console.log('response error : ' + response.status);
            return Promise.reject(new Error(response.statusText));
        })
        .catch (error => {
            console.error(error);
        });

}

export function loadResource(uri: string): Promise<PhotoDescription>{
    return fetch(uri, {
        credentials: "include"
    })
        .then(response => {
            if (response.ok){
                return response.json();
            }
            console.log('response error : ' + response.status);
            return Promise.reject(new Error(response.statusText));
        })
        .catch (error => {
            console.error(error);
        });
}