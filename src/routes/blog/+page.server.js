//src/routes/blog/+page.server.js
import { getLocale } from "$lib/paraglide/runtime";
import { getContents } from "$lib/utils/content";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const locale = getLocale() || 'en'

    const contentType = 'blog';

    const blogs = await getContents(locale,contentType);

    if(blogs.length === 0){
        console.warn(`[blog +page.server.js] No blogs found for locale: ${locale}`);
    }

    return {
        blogs : blogs,
        locale: locale
    }
}