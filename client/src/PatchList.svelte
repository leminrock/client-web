<script>
  import { onMount } from "svelte"
  //import { Table } from "sveltestrap"

  import { Accordion, AccordionItem, ListGroup } from "sveltestrap"

  import PatchSpot from "./PatchSpot.svelte"
  import { config } from "./config"

  let mbuto = []
  let counter = 0

  function incrementCount() {
    counter += 1
  }

  onMount(async () => {
    fetch(`${config.domainaddress}/api/v1/patch`)
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
  <AccordionItem>
    <h2 slot="header" class="grey">Patches inside</h2>
    <ListGroup numbered flush>
      {#each mbuto as singolo, index}
        <PatchSpot count={index + 1} patchname={singolo} />
      {/each}
    </ListGroup>
  </AccordionItem>
</main>

<style>
</style>
