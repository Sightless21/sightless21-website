<script>
	const { project } = $props();
	const { colors, repoLink, liveLink } = project;
</script>

{#if repoLink || liveLink}
	<div
		id="widget"
		class="animate-fade-in-down animate-delay-900 fixed right-7 bottom-7 flex flex-col gap-1 space-y-2 p-3 text-left md:right-10 md:bottom-10 md:p-5"
		style={`--bg-color: ${colors[0]}; --text-color: ${colors[1]}; background-color: var(--bg-color); color: var(--text-color);`}
	>
		{#if repoLink}
			<a href={repoLink} target="_blank" class="hover-underline-animation-widget text-sm md:text-base">
				CODE
			</a>
		{/if}
		
		{#if liveLink}
			<a href={liveLink} target="_blank" class="hover-underline-animation-widget text-sm md:text-base">
				LIVE
			</a>
		{/if}
	</div>
{/if}

<style is:inline>
	.hover-underline-animation-widget {
		display: inline-block;
		position: relative;
	}

	.hover-underline-animation-widget::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--text-color);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation-widget:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
