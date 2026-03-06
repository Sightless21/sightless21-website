<script>
	import Subheading from './Subheading.svelte';
	import Content from '../shared/Content.svelte';
	const { Content: content, metadata } = $props();
</script>

<Subheading {metadata} />
<Content {content} />
