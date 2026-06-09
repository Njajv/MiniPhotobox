import { loadResource } from "./Photoloader.js";
import  {config} from "./config.js"

export async function load() {
    return await loadResource(config.photoboxApiRootUri+'/photos');
}