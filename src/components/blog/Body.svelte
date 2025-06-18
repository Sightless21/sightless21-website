<script>
	// @ts-nocheck

	import Subheading from './Subheading.svelte';
	import Content from '../shared/Content.svelte';
	const { Content: content, lang, metadata } = $props();
</script>

<Subheading {metadata} />
<Content {content} />
