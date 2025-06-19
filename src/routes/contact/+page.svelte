<script>
	// @ts-nocheck
	import PageLayout from '../../layouts/PageLayout.svelte';
	import Body from '../../components/contact/Body.svelte';
	import { m } from '$lib/paraglide/messages';
	export let data;
	const { locale } = data;
</script>

<svelte:head>
	<title>Sightless21: {m['contact']()}</title>
</svelte:head>
<PageLayout
	description="Contact page for my online web development business portfolio with my contact information"
	title="Phanupong - Contact"
	className="text-foreground font-montserrat"
	label="Home"
	link={`/${locale}`}
>
	<Body lang={locale} />
</PageLayout>
