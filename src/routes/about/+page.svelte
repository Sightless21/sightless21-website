<script>
	// @ts-nocheck
	import PageLayout from '../../layouts/PageLayout.svelte';
	import BoxReveal from '../../components/BoxReveal.svelte';
	import GradualSpacing from '../../components/GradualSpacing.svelte';
	import TextReveal from '../../components/TextReveal.svelte'; // Not used in this snippet, but kept for context.
	import BlurIn from '../../components/BlurIn.svelte';

	// Assuming svelte-vertical-timeline is not directly impacting the layout in this section
	// but its imports are kept for completeness if used elsewhere in PageLayout.
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
	import { fade } from 'svelte/transition'; // Not used in this snippet, but kept for context.
	import { dynamicFont, dynamicFontSize } from '$lib';

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
		class="text-foreground relative z-10 mb-20 flex w-full flex-col items-center justify-around gap-8 px-4 md:gap-8 md:px-0 lg:gap-20"
	>
		<BlurIn
			word={m['about']()}
			class={`text-background dark:text-foreground 
                   font-prata mt-10 text-[10vw] font-bold sm:text-[12vw] md:mt-20 md:text-[7vw] 
                   lg:text-[6vw]
                   ${dynamicFont(locale)}`}
		/>

		<div
			class="flex w-full max-w-2xl flex-col items-center justify-center overflow-hidden pt-2 text-center md:pt-4 md:text-left"
		>
			<GradualSpacing
				class={`text-foreground dark:text-foreground leading-tight 
           font-bold tracking-[-0.08em] ${dynamicFontSize(locale, 'name')}
           font-mont`}
				words={`${m.heading_name()}`}
			/>

			<BoxReveal>
				<h2 class="text-foreground mt-2 text-lg sm:mt-4 sm:text-xl md:text-2xl">
					<span>{m.heading_position()}</span>
				</h2>
			</BoxReveal>

			<p class="font-mont mt-4 max-w-xl px-2 text-sm sm:px-0 sm:text-base md:text-lg">
				{m['heading_description']()}
			</p>
			
			<div class="mt-10 flex justify-center sm:mt-16 md:mt-20">
				<img
					src="/image/getstudentimage.jpeg"
					alt="Phanupong"
					width="160"
					height="160"
					class="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-56 md:w-56"
				/>
			</div>
		</div>
	</main>
</PageLayout>
