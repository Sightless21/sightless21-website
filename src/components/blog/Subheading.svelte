<script>
	const { metadata } = $props();
	const { author, excerpt, date } = metadata;
</script>

<section
	id="subtitle"
	class="animate-fade-in-up animate-delay-700 flex w-full flex-col items-center justify-between gap-2 px-5 md:flex-row md:gap-10"
>
	<strong class="flex-1">
		<a
			href={`https://www.linkedin.com/in/phanupong-poungbaidee-2a6a78322/`}
			target="_blank"
			class="transition duration-200 ease-out hover:text-gray-700 hover:underline"
			rel="nofollow noopener noreferrer">{author}</a
		>
	</strong>
	<span class="text-center text-3xl">
		{excerpt}
	</span>
	<strong class="flex-1">
		{date}
	</strong>
</section>
