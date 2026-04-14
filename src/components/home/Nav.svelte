<script lang="ts">
	import { navlists } from '../../constants/index.js';
	import { dynamicFont, dynamicFontSize, dynamicLeading } from '$lib';
	import { resolve } from '$app/paths';
	
	type Route = '/' | '/about' | '/blog' | '/contact' | '/projects';
	
	const { lang }: { lang: 'en' | 'ja' } = $props();
	let lists = $derived(navlists[lang] || navlists.en);

	// Define animation delay classes
	const delays = [
		'animate-delay-300',
		'animate-delay-400',
		'animate-delay-500',
		'animate-delay-600'
	];
</script>

<ul class={`uppercase ${dynamicFont(lang)}`}>
	{#each lists as item, index (index)}
		<li
			class={`animate-fade-in-up ${delays[index]} [&>a]:block [&>a]:cursor-pointer ${dynamicFontSize(lang,"nav")}`}
		>
			<a
				href={resolve(item.route as Route)}
				aria-label={item.label}
				class={`${dynamicLeading(lang)} transition-all duration-500 ease-out hover:translate-x-10 hover:-skew-x-12`}
			>
				{item.label}
			</a>
		</li>
	{/each}
</ul>
