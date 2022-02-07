import { patch_list } from "./store.js"
import { config } from "./config.js"

export const patch_list_fetch = async() => {
    fetch(`http://${config.hostname}:8000/api/v1/patch`)
        .then((response) => response.json())
        .then((data) => {
            console.log("le patch sono:", data.patches)
            patch_list.update(() => [])

            for (let i = 0; i < data.patches.length; i++) {
                patch_list.update((lista) => [...lista, data.patches[i]])
            }
        })
        .catch((error) => {
            console.log(error)
            return []
        })
}