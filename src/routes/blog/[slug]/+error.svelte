<script lang="ts">
	// @ts-nocheck
	import { page } from '$app/state';
	import { getLocale } from '$lib/paraglide/runtime';
	import PageLayout from '../../../layouts/PageLayout.svelte';
	import { m } from '$lib/paraglide/messages';
	import InteractiveHoverBt from '../../../components/InteractiveHoverBT.svelte';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import SpinningText from '../../../components/SpinningText.svelte';
	const locale = getLocale() || 'en';

	function nav_back() {
		if (browser) window.history.back();
	}
</script>

<svelte:head>
	<title>Error 404 - Page Not Found</title>
</svelte:head>

<PageLayout
	description="Explore a compilation of my finest endeavors spanning Web Design and Development. In a dynamic digital landscape"
	title="Phanupong - Project"
	className="text-foreground font-montserrat"
	label="Home"
	link={`/${locale}`}
>
	<div class="flex h-screen w-full flex-col items-center justify-center p-4 text-center">
		<SpinningText class="text-foreground mb-20" children="Ora! • Ora! • ORA! • Ora!"></SpinningText>
		<h1
			class="text-foreground text-[15vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw]"
		>
			404
		</h1>
		<p
			class="mb-8 text-[10vw] font-medium tracking-tighter whitespace-pre-wrap text-black uppercase sm:text-[8vw] md:text-[7vw] lg:text-[4vw] xl:text-[3vw] dark:text-white"
		>
			{m['error']()}
		</p>
		<InteractiveHoverBt text="Back" onclick={() => nav_back()}></InteractiveHoverBt>
	</div>
</PageLayout>
