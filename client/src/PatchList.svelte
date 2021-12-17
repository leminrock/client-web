<script>
  import { onMount } from "svelte"
  import { Table } from "sveltestrap"
  import PatchSpot from "./PatchSpot.svelte"

  let mbuto = []
  let counter = 0

  function incrementCount() {
    counter += 1
  }

  onMount(async () => {
    fetch("http://127.0.0.1:3000/api/v1/patch")
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
</script>

<main>
  <h2>Patches inside</h2>
  <Table>
    {#each mbuto as singolo, index}
      <PatchSpot count={index + 1} patchname={singolo} />
    {/each}
  </Table>
</main>

<style>
</style>
