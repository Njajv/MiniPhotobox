var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { config } from "./config.js";
export function loadPicture(idPicture) {
    return __awaiter(this, void 0, void 0, function* () {
        let photos = "/photos";
        return yield fetch(config.photoboxHost + config.photoboxApiRootUri + photos + "/" + idPicture, {
            credentials: "include"
        })
            .then((response) => __awaiter(this, void 0, void 0, function* () {
            if (response.ok) {
                return yield response.json();
            }
            console.log('response error : ' + response.status);
            return Promise.reject(new Error(response.statusText));
        }))
            .catch(error => {
            console.error(error);
        });
    });
}
export function loadResource(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(config.photoboxHost + uri, {
            credentials: "include"
        })
            .then((response) => __awaiter(this, void 0, void 0, function* () {
            if (response.ok) {
                return yield response.json();
            }
            console.log('response error : ' + response.status);
            return Promise.reject(new Error(response.statusText));
        }))
            .catch(error => {
            console.error(error);
        });
    });
}
