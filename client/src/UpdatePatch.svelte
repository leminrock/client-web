<script>
  import { onMount } from "svelte"
  import { AccordionItem } from "sveltestrap"
  import PatchSpot from "./PatchSpot.svelte"
  import { config } from "./config"
  //import { patch_list } from "./store.js"
  import { patch_list_fetch } from "./fetch_patch_list.js"
  let postVar
  let fileVar

  const posta = () => {
    //console.log("postvar", postVar)
    console.log("filevar", fileVar)
  }

  const submitForm = () => {
    posta()
    const dataArray = new FormData()
    dataArray.append("filename", fileVar[0])

    fetch(`http://${config.hostname}:8000/api/v1/patch/upload`, {
      method: "POST",
      body: dataArray,
    })
      .then((response) => {
        console.log(response.json())
        patch_list_fetch()
      })
      .catch((error) => {
        console.log(error)
      })
  }
</script>

<main>
  <AccordionItem>
    <h2 slot="header" class="grey">Update Patch</h2>
    <form on:submit|preventDefault={submitForm}>
      <input type="file" bind:files={fileVar} />
      <br />
      <input type="submit" />
    </form>
  </AccordionItem>
</main>

<style>
</style>
