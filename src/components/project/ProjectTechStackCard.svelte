<script>
	const { techStack, lang } = $props();
	const { link, title, info } = techStack;
</script>

<li class="flex-1 space-y-2">
	<h3 class="font-prata text-2xl font-bold uppercase">{title}</h3>
	<p class="text-sm md:text-base">
		{info}
	</p>
	<a href={link} target="_blank" class="hover-underline-animation-reverse text-sm font-bold">
		{lang === 'es' ? 'Mas Info' : 'More Info'}
	</a>
</li>
