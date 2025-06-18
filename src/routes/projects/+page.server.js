// src/routes/projects/+page.server.js
import { getLocale } from '$lib/paraglide/runtime';
import { getContents } from '$lib/utils/content'; // ตรวจสอบ path ว่าถูกหรือไม่

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // Get the current locale. If not found, default to 'en'.
    const locale = getLocale() || 'en';
    // Define the content type to load, which corresponds to the folder name under src/content/{locale}/.
    const contentType = 'project';

    console.log(`[project +page.server.js] Calling getContents with locale: ${locale}, contentType: ${contentType}`);
    // Fetch contents using your utility function.
    const projects = await getContents(locale, contentType);
    console.log(`[project +page.server.js] Received ${projects.length} projects.`);

    // Optional: Handle case where no projects are found.
    if (projects.length === 0) {
        console.warn(`[project +page.server.js] No projects found for locale: ${locale}`);
        // Consider if you want to throw an error (e.g., error(404, 'Not Found'))
        // or just return an empty array and handle it gracefully in the Svelte component.
    }

    // Return the fetched projects and the current locale to the Svelte page.
    return {
        projects: projects,
        locale: locale
    };
}
