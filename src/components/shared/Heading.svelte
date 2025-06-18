<script lang="ts">
	// @ts-nocheck
	import { m } from '$lib/paraglide/messages.js';
	const {
		page = '',
		collections,
		hoveredCollectionThumbnail = null,
		hoveredCollectionTitle = null
	} = $props();
</script>

<header class="3xl:bottom-10 sticky bottom-10 z-10 flex max-w-[650px] flex-1 flex-col self-end">
	{#if hoveredCollectionThumbnail}
		<img
			width={500}
			height={500}
			src={hoveredCollectionThumbnail}
			alt={hoveredCollectionTitle || 'Project thumbnail'}
			class="fade-in w-fullobject-cover hidden aspect-square p-2 opacity-0 md:block rounded-2xl shadow mb-7"
		/>
	{:else}
		<div></div>
	{/if}
	<div class="space-y-2">
		<h1
			class="uppercase animate-fade-in-down text-foreground animate-delay-500 text-6xl font-semibold tracking-widest"
		>
			{m[`${page}.h1`]()}
		</h1>
		<p class="animate-fade-in-down text-foreground animate-delay-600 text-sm">
			{m[`${page}.description`]()}
		</p>
	</div>
</header>

<style>
	.fade-in {
		animation: fadeIn 0.8s forwards;
		opacity: 0;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
