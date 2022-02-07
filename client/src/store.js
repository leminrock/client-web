import { onMount } from 'svelte/internal'
import { writable } from 'svelte/store'

/*
let mbuto = []

onMount(async() => {
    fetch(`http://${config.hostname}:8000/api/v1/patch`)
        .then((response) => response.json())
        .then((data) => {
            console.log("le patch sono:", data.patches)
            data.patches.forEach((elem) => {
                mbuto.push(elem)
            })
        })
        .then(() => (mbuto = [...mbuto]))
        .catch((error) => {
            console.log(error)
            return []
        })
})
*/

export const patch_list = writable([])