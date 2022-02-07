<script>
  import { onMount } from "svelte"
  import { Accordion, AccordionItem, ListGroup } from "sveltestrap"

  import PatchSpot from "./PatchSpot.svelte"
  import { patch_list } from "./store.js"
  import { patch_list_fetch } from "./fetch_patch_list.js"

  /*
  let patchList

  let unsubscribe = patch_list.subscribe((value) => {
    patchList = value
  })
  */

  /*
  function addTodo() {
		const newTodo = { text: "Hey now", id: 6 }
		todos.update(oldTodos => [...oldTodos, newTodo])
	}
  */

  onMount(patch_list_fetch())
</script>

<main>
  <AccordionItem>
    <h2 slot="header" class="grey">Patches inside</h2>
    <ListGroup numbered flush>
      {#each $patch_list as singolo}
        <PatchSpot patchname={singolo} />
      {/each}
    </ListGroup>
  </AccordionItem>
</main>

<style>
</style>
