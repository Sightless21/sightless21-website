<script>
	const { techStack, lang } = $props();
</script>

<li class="flex-1 space-y-2">
	<h3 class="font-prata text-2xl font-bold uppercase">{techStack.title}</h3>
	<p class="text-sm md:text-base">
		{techStack.info}
	</p>
	<a href={techStack.link} target="_blank" class="hover-underline-animation-reverse text-sm font-bold">
		{lang === 'ja' ? '詳細情報' : 'More Info'}
	</a>
</li>
