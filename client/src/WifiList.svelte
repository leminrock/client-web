<script>
  import Hotspot from "./Hotspot.svelte"
  import { onMount } from "svelte"

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
  <h1>Available Hotspots</h1>
  <ul class="list-group">
    {#each mbuto as singolo}
      {#if singolo.inUseBoolean}
        <li class="list-group-item active">
          <Hotspot hotname={singolo.SSID} />
        </li>
      {:else}
        <li class="list-group-item">
          <Hotspot hotname={singolo.SSID} />
        </li>
      {/if}
    {/each}
  </ul>
</main>

<style>
</style>
