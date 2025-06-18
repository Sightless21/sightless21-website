<script>
	// @ts-nocheck

	import Layout from './Layout.svelte';
	import Header from '../components/shared/Header.svelte';

	const { className, link, label, ld, data, children } = $props();

</script>

<Layout className={`${className} text-foreground`} {link} {label}>
	<main
		class="text-foreground bg-background relative flex w-screen flex-col items-center justify-center gap-10 md:gap-20 md:px-24"
	>
		<Header {data} variant={label}/>
		{@render children()}
	</main>
</Layout>
