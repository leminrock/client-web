<script>
  import Hotspot from "./Hotspot.svelte"
  import { onMount } from "svelte"
  import { Accordion } from "sveltestrap"

  let mbuto = []

  onMount(async () => {
    fetch("http://127.0.0.1:3000/api/v1/wifi")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        //apiData.set(data);
        data.forEach((elem) => {
          mbuto.push(elem)
        })
      })
      .then(() => (mbuto = [...mbuto]))
      .catch((error) => {
        console.log(error)
        return []
      })
  })
</script>

<main>
  <h2>Available Hotspots</h2>
  <Accordion>
    {#each mbuto as singolo}
      {#if singolo.inUseBoolean}
        <Hotspot
          ssid={singolo.SSID}
          chan={singolo.CHAN}
          security={singolo.SECURITY}
        />
      {:else}
        <Hotspot
          ssid={singolo.SSID}
          chan={singolo.CHAN}
          security={singolo.SECURITY}
        />
      {/if}
    {/each}
  </Accordion>
</main>

<style>
</style>
