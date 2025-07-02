<script>
	import { json } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	const { data, variant = '' } = $props();

	onMount(() => {
		const title = document.getElementById('title');

		if (title) {
			const handleScroll = () => {
				title.classList.remove('animate-fade-in-down');
				const scrollPosition = window.scrollY;
				title.style.transform = `translateY(${scrollPosition * 0.3}px)`;
			};

			// Add scroll event listener
			window.addEventListener('scroll', handleScroll);

			// Clean up event listener when component is unmounted
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<section
	id="header"
	class={[
		'animate-delay-300 animate-fade-in relative flex h-[70vh] w-full justify-center mt-10 overflow-hidden text-center',
		{
			'md: h-[70vh]': variant === 'project',
			'h-[600px]': variant !== 'project'
		}
	]}
	style={`background-color: ${'colors' in data ? data.colors[0] : 'transparent'};`}
>
	<h1
		id="title"
		class={[
			'font-prata animate-fade-in-down animate-delay-400 z-20 self-end text-balance uppercase',
			{
				'text-[11vw]': variant === 'project',
				'text-[7vw] leading-[7vw]': variant !== 'project'
			}
		]}
		style={`color: ${'colors' in data ? data.colors[1] : 'inherit'};`}
	>
		{data.title}
	</h1>

	{#if variant !== 'project'}
		<div class="bg-background absolute inset-0 z-10 h-full w-full opacity-20"></div>
		<img
			src={data.image}
			alt={data.imageAlt || data.title}
			class="absolute inset-0 h-full w-full object-cover"
		/>
	{/if}
</section>
