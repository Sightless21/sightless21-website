<script lang="ts">
	// @ts-nocheck
	import Heading from '../../components/shared/Heading.svelte';
	import ItemList from '../../components/shared/ItemList.svelte';
	import PageLayout from '../../layouts/PageLayout.svelte';
	import SpinningText from '../../components/SpinningText.svelte';
	import InteractiveHoverBt from '../../components/InteractiveHoverBT.svelte';
	import { browser } from '$app/environment';
	import { m } from '$lib/paraglide/messages';
	import { dynamicFont } from '$lib';
	export let data;
	const { blogs, locale } = data;

	// State สำหรับเก็บข้อมูลโปรเจกต์ที่กำลังถูก Hover
	let hoveredCollectionThumbnail: string | null = null;
	let hoveredCollectionTitle: string | null = null;

	// Handler function สำหรับรับ custom event จาก ItemList
	function handleCollectionHover(
		event: CustomEvent<{ thumbnail: string | null; title: string | null }>
	) {
		hoveredCollectionThumbnail = event.detail.thumbnail;
		hoveredCollectionTitle = event.detail.title;
	}

	function nav_back() {
		if (browser) window.history.back();
	}
</script>

<svelte:head>
	<title>Sightless21: {m['blog.h1']()}</title>
</svelte:head>

<PageLayout
	description="Explore una recopilación de mis mejores esfuerzos en Diseño y Desarrollo Web. En un panorama digital dinámico"
	title="Phanupong - Blog"
	className="text-foreground font-montserrat"
	label="Home"
	link={`/${locale}`}
>
	{#if blogs.length != 0}
		<Heading
			page="blog"
			collections={blogs}
			{hoveredCollectionThumbnail}
			{hoveredCollectionTitle}
		/>
		<ItemList
			collections={blogs}
			lang={locale}
			on:ColloctionHover={handleCollectionHover}
			collectionName="blog"
		/>
	{:else}
		<div class="flex h-screen w-full flex-col items-center justify-center p-4 text-center">
			<SpinningText class="text-foreground mb-20" children="Ora! • Ora! • ORA! • Ora!"
			></SpinningText>
			<h1
				class="text-foreground text-[15vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw]"
			>
				204
			</h1>
			<p
				class="mb-8 text-[10vw] font-medium tracking-tighter whitespace-pre-wrap text-black uppercase sm:text-[8vw] md:text-[7vw] lg:text-[4vw] xl:text-[3vw] dark:text-white"
			>
				{m['sorry']()}
			</p>
			<InteractiveHoverBt text="Back" onclick={() => nav_back()}></InteractiveHoverBt>
		</div>
	{/if}
</PageLayout>
