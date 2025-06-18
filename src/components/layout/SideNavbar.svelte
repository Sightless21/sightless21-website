<script lang="ts">
	import { cn } from '$lib';
	import Navigation from './Navigation.svelte';
	import SchemeSwitcher from './SchemeSwitcher.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let visible = $state(false);
	onMount(() => {
		visible = true;
	});
	const { link, label, className } = $props();
</script>

{#if visible}
	<aside
		in:fly={{
			x: -30,
			duration: 800,
			opacity: 0,
			easing: (t) => t * t * t
		}}
		class={cn(
			'animate-fade-in-right animate-delay-700 fixed top-0 bottom-0 left-0 z-50 hidden h-full w-10 flex-col items-center justify-between px-10 md:flex',
			className
		)}
		id="nav"
	>
		<Navigation {link} {label} {className} />
		<SchemeSwitcher {className} />
	</aside>
{/if}
