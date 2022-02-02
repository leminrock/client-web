<script>
  import Hotspot from "./Hotspot.svelte"
  import { onMount } from "svelte"
  import { Accordion, AccordionItem } from "sveltestrap"
  import { config } from "./config.js"
  let mbuto = []

  onMount(async () => {
    fetch(`${config.domainaddress}/api/v1/wifi`)
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
  <AccordionItem>
    <h2 slot="header" class="grey">Available Hotspots</h2>
    <Accordion>
      {#each mbuto as singolo}
        {#if singolo.inUseBoolean}
          <Hotspot
            ssid={singolo.SSID}
            chan={singolo.CHAN}
            security={singolo.SECURITY}
            bars={singolo.BARS}
          />
        {:else}
          <Hotspot
            ssid={singolo.SSID}
            chan={singolo.CHAN}
            security={singolo.SECURITY}
            bars={singolo.BARS}
          />
        {/if}
      {/each}
    </Accordion>
  </AccordionItem>
</main>

<style>
</style>
