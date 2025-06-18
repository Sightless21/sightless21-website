<script lang="ts">
	import { cn, getHoverBorderColor, getBorderColor, theme } from '$lib';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { setLocale } from '$lib/paraglide/runtime';
	let visible = $state(false);
	onMount(() => {
		visible = true;

		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme) {
			theme.set(savedTheme);
		} else {
			theme.set(systemPrefersDark ? 'dark' : 'light');
		}

		theme.subscribe((value) => {
			const html = document.documentElement;
			html.classList.remove('light', 'dark');
			html.classList.add(value);
			localStorage.setItem('theme', value);
		});
	});

	function toggleTheme() {
		theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
	}
	const { link, label, className } = $props();
	const border = getBorderColor(className);
	const hover = getHoverBorderColor(className);
</script>

{#if visible}
	<aside
		in:fly={{
			x: -30,
			duration: 800,
			opacity: 0,
			easing: (t) => t * t * t
		}}
		class={cn(
			'animate-fade-in-down bg-background animate-delay-700 z-50 flex h-14 w-full items-center justify-between gap-5 px-10 text-sm md:hidden sticky top-0',
			className
		)}
		id="nav"
	>
		<button
			id="theme-toggle"
			onclick={toggleTheme}
			class={cn('pointer-events-auto cursor-pointer', hover)}
		>
			<span id="theme-pantone" title="Pantone Scheme - Color of Year">Pantone</span>
		</button>
		<hr class={cn('border-px w-10 flex-1 md:w-20', border)} />
		<div class="flex items-center gap-3">
			{#if link === undefined}
				<button
					onclick={() => setLocale('en')}
					class="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-left after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-700 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-100"
				>
					English
				</button>
				<button
					onclick={() => setLocale('ja')}
					class="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-left after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-700 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-100"
				>
					Japanese
				</button>
			{:else}
				<a href={link} class={hover}>
					{label}
				</a>
			{/if}
		</div>
	</aside>
{/if}
