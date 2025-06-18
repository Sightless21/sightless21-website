<script>
	// @ts-nocheck
	export let data;
	const { locale } = data;

	import Layout from '../layouts/Layout.svelte';
	import Heading from '../components/home/Heading.svelte';
	import Nav from '../components/home/Nav.svelte';

</script>

<svelte:head>
	<title>Sightless21: HOME</title>
</svelte:head>
<Layout
	description="Cuban-born and self-taught, I bring a unique blend of passion and proficiency to web development and design"
	title="Phanupong Poungbaidee"
	className="text-foreground font-montserrat"
>
	<main
		class="text-foreground bg-background min-h-screen w-screen overflow-hidden p-10 md:mt-0 md:h-screen md:bg-gradient-to-b md:p-24"
	>
		<div
			class="font-montserrat flex h-full flex-col items-center gap-12 md:mt-0 md:flex-row md:justify-around md:gap-20"
		>
			<Heading />
			<Nav lang={locale} />
		</div>
	</main>
</Layout>
