<script>
	import Layout from './Layout.svelte';
	const { title, className, link, label, description, image, ld, children } = $props();
</script>

<Layout
	{description}
	{title}
	className={`${className}`}
	{link}
	{label}
	{image}
	{ld}
>
	<main
		id="page-main"
		class="text-background bg-background relative z-10 flex w-screen flex-col min-h-screen items-start justify-start gap-10 px-10 md:mt-0 md:flex-row md:gap-32 md:px-24"
	>
		{@render children()}
	</main>
</Layout>
