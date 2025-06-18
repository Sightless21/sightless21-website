<script>
	import { createEventDispatcher } from 'svelte';
	import { dynamicFont, dynamicFontSize, dynamicLeading } from '$lib';
	// @ts-ignore
	const { collections, lang , collectionName } = $props();

	// สร้าง event dispatcher
	const dispatch = createEventDispatcher();

	// ฟังก์ชันเมื่อเมาส์เข้าสู่ element
	// @ts-ignore
	function handleMouseEnter(project) {
		dispatch('ColloctionHover', {
			thumbnail: project.thumbnail, // ส่ง thumbnail ของโปรเจกต์ที่ hover
			title: project.title // ส่ง title ของโปรเจกต์ที่ hover
		});
	}

	// ฟังก์ชันเมื่อเมาส์ออกจาก element
	function handleMouseLeave() {
		dispatch('ColloctionHover', {
			thumbnail: null, // ส่ง null เพื่อซ่อนรูปภาพ
			title: null
		});
	}
</script>

<section class={`${dynamicFont(lang)} flex-1 text-balance md:py-16 mb-10`}>
	<ul role="navigation" class="space-y-10">
		{#each collections as collection, index}
			<li
				class={`animate-fade-in-down text-foreground [&>a]:block [&>a]:cursor-pointer ${dynamicFontSize(lang, collectionName )}`}
				style="animation-delay: {index * 100}ms"
			>
				<a
					href={`${collection.href}`}
					class={`block leading-[0.95em] text-balance uppercase transition-all duration-500 ease-out hover:translate-x-10 hover:-skew-x-12 `}
					onmouseenter={() => handleMouseEnter(collection)}
					onmouseleave={handleMouseLeave}
				>
					<h2>{collection.title}</h2>
				</a>
				<h3 class="inline pl-5 font-sans text-xs md:text-base">{collection.excerpt}</h3>
				{#if collection.comingSoon === true}
					<span class="bg-background text-foreground inline-block rounded-full px-2 py-1 border border-foreground">
						Coming Soon
					</span>
				{/if}
			</li>
		{/each}
	</ul>
</section>
