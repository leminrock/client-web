<script>
  import { onMount } from "svelte"
  import { Table } from "sveltestrap"
  import PatchSpot from "./PatchSpot.svelte"

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

    fetch("http://127.0.0.1:3000/api/v1/patch/upload", {
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
  <h2>Update Patch</h2>
  <div>
    <form on:submit|preventDefault={submitForm}>
      <input type="file" bind:files={fileVar} />
      <br />
      <input type="submit" />
    </form>
  </div>
</main>

<style>
</style>
