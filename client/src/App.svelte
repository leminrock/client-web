<script>
  import Welcome from "./Welcome.svelte"
  import WifiList from "./WifiList.svelte"
  import PatchList from "./PatchList.svelte"
  import UpdatePatch from "./UpdatePatch.svelte"
  export let name
</script>

<svelte:head>
  <link rel="stylesheet" href="bootstrap5/css/bootstrap.min.css" />
  <link rel="stylesheet" href="bootstrap-icons-1.7.2/bootstrap-icons.css" />
</svelte:head>

<div class="container">
  <div class="row"><Welcome {name} /></div>
  <div class="row">
    <div class="col-6">
      <div class="row"><PatchList /></div>
      <div class="row"><UpdatePatch /></div>
    </div>
    <div class="col-6"><WifiList /></div>
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
    font-size: 2em !important;
    font-weight: 100 !important;
    background-color: lightgray;
  }

  @media (min-width: 640px) {
    :global(main) {
      max-width: none;
    }
  }
</style>
