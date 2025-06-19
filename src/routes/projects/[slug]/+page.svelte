<script lang="ts">
	import IndividualPageLayout from '../../../layouts/IndividualPageLayout.svelte';
	import Body from '../../../components/project/Body.svelte';
	import { getBackLink } from '$lib/utils/linkHelper';
	import { m } from '$lib/paraglide/messages';

	/**
	 * @type {import('./$types').PageData} data - Data passed from +page.js.
	 * Expected to contain a single project object and the current locale.
	 */
	interface ProjectData {
		title: string;
		date: string;
		excerpt: string;
		thumbnail: string;
		images: Image[];
		liveLink: string;
		repoLink: string;
		colors: string[];
		techStack: TechStack[];
		challenge: string;
		solution: string;
		comingSoon: boolean; // นี่คือ boolean
	}

	interface Image {
		src: string;
		alt: string;
	}

	interface TechStack {
		title: string; // ใช้ property นี้ในการแสดงผล
		info: string;
		link: string;
	}

	export let data: { project: ProjectData; locale: string };

	const { project, locale } = data;

	const backLink = getBackLink('projects');
</script>

<svelte:head>
	<title>{project.title} - {m['project.h1']()}</title>
	<meta name="description" content={project.excerpt} />
</svelte:head>
<IndividualPageLayout label="projects" link={backLink} data={project} className="" ld="">
	<Body {project} lang={locale} />
</IndividualPageLayout>

<style>
	/* No custom <style> block needed if using Tailwind CSS exclusively for responsive design */
</style>
