<script>
	const { content  } = $props();
</script>

<section id="content" class="custom-prose">
	<!-- svelte-ignore svelte_component_deprecated -->
	<svelte:component this={content} />
</section>
