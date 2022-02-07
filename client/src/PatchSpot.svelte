<script>
  import { Button, Form, FormGroup, Input, Label } from "sveltestrap"
  import { Icon } from "sveltestrap"
  import { ListGroupItem } from "sveltestrap"

  export let patchname
  //export let count
</script>

<div class="hotspotpoint">
  <ListGroupItem action>
    {patchname}
    <Icon name="download" />
  </ListGroupItem>
</div>

<style>
  .hotspotpoint {
    font: 18px Courier, sans-serif;
  }
</style>
