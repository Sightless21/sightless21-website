<script lang="ts">
	import { cn } from '$lib';
	import { ArrowLeft } from 'lucide-svelte';
	let _class: string = '';
	export { _class as class };
	export let text: string = 'Button';
</script>

<button
	class={cn(
		'group bg-foreground relative w-32 cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold',
		_class
	)}
	{...$$restProps}
>
	<span
		class="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0"
	>
		{text}
	</span>
	<div
		class="text-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
	>
		<span>{text}</span>
		<ArrowLeft />
	</div>
	<div
		class="bg-background group-hover:bg-background absolute top-[40%] left-[20%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
	></div>
</button>
