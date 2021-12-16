<script>
	import Hotspot from "./Hotspot.svelte";
	import { onMount } from "svelte";

	let mbuto = [];

	onMount(async () => {
		fetch("http://127.0.0.1:3000/api/v1/wifi")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				//apiData.set(data);
				data.forEach((elem) => {
					mbuto.push(elem);
					mbuto = [...mbuto];
				});
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<main>
	<h1>Whiskey Drinks Menu</h1>
	<ul>
		{#each mbuto as singolo}
			<li><Hotspot hotname={singolo.SSID} /></li>
		{/each}
	</ul>
</main>

<style>
</style>
