<script>
	// @ts-nocheck
	import PageLayout from '../../layouts/PageLayout.svelte';
	import Body from '../../components/contact/Body.svelte';
	export let data;
	const { locale } = data;
</script>

<PageLayout
	description="Contact page for my online web development business portfolio with my contact information"
	title="Phanupong - Contact"
	className="text-foreground font-montserrat"
	label="Home"
	link={`/${locale}`}
>
	<Body lang={locale} />
</PageLayout>
