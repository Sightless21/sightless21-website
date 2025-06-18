<script>
	import ProjectTechStackCard from './ProjectTechStackCard.svelte';
	import Subheading from './Subheading.svelte';
	import UrlWidget from './UrlWidget.svelte';

	const { project , lang} = $props();
</script>

<section class="w-full space-y-5 px-5 md:space-y-10 md:px-0">
	<Subheading {project} />

	<div class="flex flex-col gap-4 md:flex-row">
		<div class="flex-1">
			<h2 class="font-prata text-2xl font-bold uppercase">Challenge</h2>
			<p class="mt-2">{project.challenge}</p>
		</div>
		<div class="flex-1">
			<h2 class="font-prata text-2xl font-bold uppercase">Solution</h2>
			<p class="mt-2">{project.solution}</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<img
			src={project.images?.[0].src}
			alt={project.images?.[0].alt}
			class="aspect-square w-full rounded object-cover"
			loading="lazy"
		/>
		<img
			src={project.images?.[1].src}
			alt={project.images?.[1].alt}
			class="aspect-square w-full rounded object-cover"
			loading="lazy"
		/>
	</div>

	<ul class="my-8 mb-20 flex flex-col justify-center gap-4 md:flex-row">
		{#each project.techStack as techStack}
			<ProjectTechStackCard {techStack} {lang} />
		{/each}
	</ul>
</section>

<UrlWidget {project} />
