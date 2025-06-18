// src/routes/blog/[slug]/+page.js
import { goto } from '$app/navigation';
import { getLocale } from '$lib/paraglide/runtime.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug } = params;
	const locale = getLocale() || 'en';
	try {
		const post = await import(`../../../content/${locale}/blog/${slug}.svx`);

		if (post.length === 0) {
			goto('/')
		}
		return {
			content: post.default,
			metadata: post.metadata,
			locale: locale
		};
	} catch (e) {
		error(404, {
			message: `This is ${e}`,
		});
	}
}
