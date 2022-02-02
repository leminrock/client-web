<script>
  import { onMount } from "svelte"
  import { AccordionItem } from "sveltestrap"
  import PatchSpot from "./PatchSpot.svelte"
  import { config } from "./config.js"
  let postVar
  let fileVar

  const posta = () => {
    //console.log("postvar", postVar)
    console.log("filevar", fileVar)
  }

  const submitForm = () => {
    posta()
    const dataArray = new FormData()
    //dataArray.append("hero", postVar)
    //dataArray.append("uploadFile", fileVar)
    dataArray.append("filename", fileVar[0])

    fetch(`${config.domainaddress}/api/v1/patch/upload`, {
      method: "POST",
      //headers: [["Content-Type", "multipart/form-data"]],
      body: dataArray,
    })
      .then((response) => {
        console.log(response.json())
      })
      .catch((error) => {
        // Upload failed
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
