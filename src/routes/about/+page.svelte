<script>
	// @ts-nocheck
	import PageLayout from '../../layouts/PageLayout.svelte';
	import BoxReveal from '../../components/BoxReveal.svelte';
	import GradualSpacing from '../../components/GradualSpacing.svelte';
	import TextReveal from '../../components/TextReveal.svelte';
	import BlurIn from '../../components/BlurIn.svelte';

	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const options = [
		{ title: 'Eat', time: '09:30 am' },
		{ title: 'Sleep', time: '10:00 am' },
		{ title: 'Code', time: '11:00 am' },
		{ title: 'Eat', time: '01:00 pm' }
	];

	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { fade } from 'svelte/transition';
	import { dynamicFont } from '$lib';

	const locale = getLocale() || 'en';
</script>

<PageLayout
	description="Contact page for my online web development business portfolio with my contact information"
	title="Phanupong - About"
	className="text-foreground font-montserrat"
	label="Home"
	link={`/${locale}`}
>
	<main
		class="text-foreground relative z-10 min-h-screen w-screen items-center justify-around gap-16 md:gap-32"
	>
		<BlurIn word={m['about']()} class={`text-backbround dark:text-foreground text-[10vw] md:text-[6vw] font-prata font-bold mt-20 ${dynamicFont(locale)}`} />
		<div class="max-w-auto h-full w-full justify-center overflow-hidden pt-8">
			<GradualSpacing
				class={`text-foreground dark:text-foreground font-bold tracking-[-0.1em] md:text-7xl md:leading-[5rem] ${dynamicFont(locale)}`}
				words={`${m.heading_name()}`}
			/>

			<BoxReveal>
				<h2 class="text-foreground mt-[.5rem] text-[1rem]">
					<span class="text-2xl">{m.heading_position()}</span>
				</h2>
			</BoxReveal>

			<p class="font-prata mt-5">{m['heading_description']()}</p>

			<div class="mt-20 flex justify-center">
				<img src="/image/getstudentimage.jpeg" alt="" width="200" height="200" />
			</div>
		</div>
	</main>
</PageLayout>
