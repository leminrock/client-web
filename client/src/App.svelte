<script>
  import Welcome from "./Welcome.svelte"
  import Network from "./Network.svelte"
  import WifiList from "./WifiList.svelte"
</script>

<svelte:head>
  <link rel="stylesheet" href="bootstrap5/css/bootstrap.min.css" />
</svelte:head>

<Welcome name="LEM" />
<Network name="lem" />
<WifiList />
