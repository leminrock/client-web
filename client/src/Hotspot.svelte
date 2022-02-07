<script>
  import { AccordionItem, Button } from "sveltestrap";
  import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap";
  import { Form, FormGroup, Input, Label } from "sveltestrap";
  export let ssid;
  export let chan;
  export let security;
  export let bars;

  const ssidbars = () => {
    return `<div class="row"><div class="col">{ssid}</div><div class="col">{bars}</div></div>`;
  };
</script>

<div class="hotspotpoint">
  <AccordionItem>
    <div class="row" slot="header">
      <div class="col-auto">{bars}</div>
      <div class="col-auto">{ssid}</div>
    </div>

    SECURITY: {security} CHANNEL: {chan}
    <Form>
      <FormGroup>
        <div class="row">
          <div class="col-3">
            <Label for="examplePassword">Password</Label>
          </div>
          <div class="col-3">
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
            />
          </div>
          <div class="col-3">
            <Button primary>Connect</Button>
          </div>
          <div class="col-3" />
        </div>
      </FormGroup>
    </Form>
  </AccordionItem>
</div>

<style>
  .hotspotpoint {
    font: 15px Courier, sans-serif;
  }
</style>
