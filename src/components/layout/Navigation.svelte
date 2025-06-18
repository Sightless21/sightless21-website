<script>
	import { goto } from '$app/navigation';
	import { cn, getBorderColor, getHoverBorderColor } from '$lib';
	import { setLocale } from '$lib/paraglide/runtime';
	const { link, label, className } = $props();
	const border = getBorderColor(className);
	const hoverAnimation = getHoverBorderColor(className);
</script>

<div
	class={cn('flex h-full items-center justify-center space-x-5 pl-12 text-sm md:-rotate-90 md:space-x-10 2xl:pl-5',className)}
>
	<hr class={cn('border-px w-10 md:w-20', border)} />
	{#if link === undefined}
		<button class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-700 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-100 cursor-pointer" onclick={() => setLocale('en')}
			>English</button
		>
		<button class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-700 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-100 cursor-pointer" onclick={() => setLocale('ja')}
			>Japanese</button
		>
	{:else}
		<a href={link} class={cn(hoverAnimation, 'capitalize')} onclick={() => goto(link)}>
			{label}
		</a>
	{/if}
</div>
