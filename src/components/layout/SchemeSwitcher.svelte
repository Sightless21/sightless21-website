<script lang="ts">
	import { cn, getBorderColor, getHoverBorderColor, theme } from '$lib';
	import { onMount } from 'svelte';
	const { className } = $props();
	const border = getBorderColor(className);
	const hover = getHoverBorderColor(className);

	onMount(() => {
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
</script>

<div
	class="pointer-events-none flex h-full items-center space-x-5 pr-32 text-sm md:-rotate-90 md:space-x-10"
>
	<button id="theme-toggle" onclick={toggleTheme} class={cn('pointer-events-auto cursor-pointer', hover)}>
		<span id="theme-pantone" title="Pantone Scheme - Color of Year">Pantone</span>
	</button>
	<hr class={cn('border-px w-10 md:w-20', border)} />
</div>
