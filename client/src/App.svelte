<script>
  import Welcome from "./Welcome.svelte"
  import PatchList from "./PatchList.svelte"
  import UpdatePatch from "./UpdatePatch.svelte"
  import { Accordion } from "sveltestrap"

  export let name
</script>

<svelte:head>
  <link rel="stylesheet" href="bootstrap5/css/bootstrap.min.css" />
  <link rel="stylesheet" href="bootstrap-icons-1.7.2/bootstrap-icons.css" />
</svelte:head>

<div class="container">
  <div class="row"><Welcome {name} /></div>
  <div class="row justify-content-evenly">
    <div class="col-5">
      <Accordion>
        <div class="row"><PatchList /></div>
        <div class="row"><UpdatePatch /></div>
      </Accordion>
    </div>
  </div>
</div>

<style>
  :global(main) {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  :global(h1) {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em !important;
    font-weight: 100 !important;
    background-color: lightgray;
  }

  :global(h2) {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 1em !important;
    font-weight: 100 !important;
    background-color: lightgray;
  }

  :global(.grey) {
    width: 500px;
    padding-right: 250px;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
    background-color: lightgray;
  }

  @media (min-width: 640px) {
    :global(main) {
      max-width: none;
    }
  }
</style>
