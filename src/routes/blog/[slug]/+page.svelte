<script>
// @ts-nocheck
	import IndividualPageLayout from '../../../layouts/IndividualPageLayout.svelte';
    import { getBackLink } from '$lib/utils/linkHelper';
    import Body from '../../../components/blog/Body.svelte';
    import { m } from '$lib/paraglide/messages';

	export let data;
	const { content: Content, metadata, locale } = data;

    const backLink = getBackLink('blog');
</script>

<svelte:head>
	<title>{metadata.title} - {m['blog']()}</title>
    <meta name="description" content={metadata.excerpt} />
</svelte:head>

<IndividualPageLayout label="blog" link={backLink} data={metadata} className="" ld="">
    <Body {Content} {metadata} lang={locale}/>
</IndividualPageLayout>
