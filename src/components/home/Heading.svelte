<script lang="ts">
	import SocialMedia from './SocialMedia.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<header class="max-w-[500px] space-y-3 self-end text-pretty" id="info">
	<h1 class="animate-fade-in-down animate-delay-700 text-3xl font-semibold tracking-widest">
		{m.heading_name()}
	</h1>
	<p class="animate-fade-in-down animate-delay-600 text-sm">{m.heading_position()}</p>
	<p class="animate-fade-in-down animate-delay-600 text-sm">
		{m.heading_description()}
	</p>
	<SocialMedia />
</header>
