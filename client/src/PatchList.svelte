<script>
  import { onMount } from "svelte"
  import { Accordion } from "sveltestrap"

  let mbuto = []

  onMount(async () => {
    fetch("http://127.0.0.1:3000/api/v1/patch")
      .then((response) => {
        //console.log(response)
        response.json()
      })
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
</script>

<main>
  <h2>Patches inside</h2>
  <Accordion>
    {#each mbuto as singolo}
      {#if singolo.inUseBoolean}
        ciao
      {:else}
        ciao
      {/if}
    {/each}
  </Accordion>
</main>

<style>
</style>
