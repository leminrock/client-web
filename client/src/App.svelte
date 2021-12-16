<script>
  import Welcome from "./Welcome.svelte"
  import WifiList from "./WifiList.svelte"
  import PatchList from "./PatchList.svelte"
  export let name
</script>

<svelte:head>
  <link rel="stylesheet" href="bootstrap5/css/bootstrap.min.css" />
</svelte:head>

<div class="container-flex">
  <div class="row">
    <div class="col-6"><Welcome {name} /></div>
    <div class="col-6"><WifiList /></div>
  </div>
  <div class="row">
    <div class="col-6">
      <PatchList />
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
    font-size: 2em !important;
    font-weight: 25 !important;
    background-color: lightgray;
  }

  @media (min-width: 640px) {
    :global(main) {
      max-width: none;
    }
  }
</style>
