import { writable } from 'svelte/store'

let hostname = window.location.hostname

export const HOSTNAME = writable(hostname)