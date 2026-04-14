<script lang="ts">
	import { navlists } from '../../constants/index.js';
	import { dynamicFont, dynamicFontSize, dynamicLeading } from '$lib';
	import { resolve } from '$app/paths';
	import type { Locale } from '../i18n/ui.js';

	const { lang }: { lang: Locale } = $props();

	let lists = $derived(navlists[lang]);

	const delays = [
		'animate-delay-300',
		'animate-delay-400',
		'animate-delay-500',
		'animate-delay-600'
	];
</script>

<ul class={`uppercase ${dynamicFont(lang)}`}>
	{#each lists as item , index (item.route)}
		<li
			class={`animate-fade-in-up ${delays[index] ?? ''} [&>a]:block [&>a]:cursor-pointer ${dynamicFontSize(lang,"nav")}`}
		>
			<a
				href={resolve(item.route)}
				aria-label={item.label}
				class={`${dynamicLeading(lang)} transition-all duration-500 ease-out hover:translate-x-10 hover:-skew-x-12`}
			>
				{item.label}
			</a>
		</li>
	{/each}
</ul>
