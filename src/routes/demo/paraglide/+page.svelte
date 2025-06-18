<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
</script>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
	<button onclick={() => setLocale('en')}>en</button>
	<button onclick={() => setLocale('ja')}>ja</button>
</div>
<p>
	If you use VSCode, install the <a
		href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension"
		target="_blank">Sherlock i18n extension</a
	> for a better i18n experience.
</p>
<p>
	To use <code>paraglide.js</code> for localization, import the <code>m</code> object from <code>$lib/paraglide/messages.js</code>. 
	You can call its methods to retrieve localized strings, passing parameters as needed. For example:
	<code>{m.hello_world({ name: 'Your Name' })}</code>.
</p>
