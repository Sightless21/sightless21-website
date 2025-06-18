import { getLocale } from '$lib/paraglide/runtime';
export async function load() {
	const locale = getLocale() || 'en';

	return { locale: locale };
}
