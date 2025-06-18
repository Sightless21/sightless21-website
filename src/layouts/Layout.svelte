<script>
	import SideNavbar from '../components/layout/SideNavbar.svelte';
	import SideNavbarMobile from '../components/layout/SideNavbarMobile.svelte';
	const { title, className, link, label, description, image, ld, children } = $props();
</script>

<svelte:head>
	<meta name='title' content={title} />
	<meta name='description' content={description} />
</svelte:head>
<SideNavbar {className} {link} {label} />
<SideNavbarMobile {className} {link} {label} />
{@render children()}
