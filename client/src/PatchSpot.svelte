<script>
  import { Button, Form, FormGroup, Input, Label } from "sveltestrap"
  export let patchname
  export let count
</script>

<tr class="hotspotpoint">
  <th scope="row">{count}</th>
  <td>{patchname}</td>
</tr>

<style>
  .hotspotpoint {
    font: 15px Courier, sans-serif;
  }
</style>
