<script lang="ts">
	import { cn } from '$lib';
	import { AnimatePresence, Motion } from 'svelte-motion';

	let className: any = 'Gradual Spacing';
	export { className as class };

	export let words = 'Gradual Spacing';
	export let duration = 0.5;
	export let delayMultiple = 0.04;
	export let framerProps = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 }
	};
	// เราจะแยกคำเหมือนเดิม เพื่อจัดการช่องว่างระหว่างคำ
	let wordsArray = words.split(' ');
</script>

<div class="flex flex-nowrap justify-center sm:justify-start">
	<AnimatePresence let:item list={[{ key: wordsArray }]}>
		{#each wordsArray as word, wordIndex}
			<div class="flex" style="display: inline-flex;">
				{#each word.split('') as char, charIndex}
					<Motion
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={framerProps}
						transition={{
							duration: duration,
							// คำนวณ delay โดยรวมจาก index ของคำและตัวอักษร
							delay: wordIndex * 0.1 + charIndex * delayMultiple
						}}
						let:motion
					>
						<span use:motion class={cn('drop-shadow-sm', className)}>
							{char}
						</span>
					</Motion>
				{/each}
			</div>
			{#if wordIndex < wordsArray.length - 1}
				<span class="inline-block" style="width: 0.5em;">&nbsp;</span>
			{/if}
		{/each}
	</AnimatePresence>
</div>
