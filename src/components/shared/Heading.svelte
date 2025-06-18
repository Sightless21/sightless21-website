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

<header
	class="sticky bottom-4 z-10 flex w-full flex-col items-center px-4 sm:bottom-10 md:max-w-[650px] md:self-end md:px-0 lg:place-self-center"
>
	{#if hoveredCollectionThumbnail}
		<img
			width={500}
			height={500}
			src={hoveredCollectionThumbnail}
			alt={hoveredCollectionTitle || 'Project thumbnail'}
			class="fade-in mb-4 hidden aspect-square w-full object-cover opacity-0 sm:block md:hidden"
		/>
	{:else}
		<div class="bg-background flex w-full items-center justify-center md:hidden"></div>
	{/if}
	<div class="space-y-2 text-center md:text-left">
		<h1
			class="animate-fade-in-down text-foreground animate-delay-500 text-4xl font-semibold tracking-widest uppercase sm:text-5xl md:text-6xl"
		>
			{m[`${page}.h1`]()}
		</h1>
		<p class="animate-fade-in-down text-foreground animate-delay-600 text-sm sm:text-base">
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
