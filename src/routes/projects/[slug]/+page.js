// src/routes/projects/[slug]/+page.js
import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/paraglide/runtime'; // Assuming ParaglideJS is set up
import { getContents } from '$lib/utils/content'; // Your content utility function

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { slug } = params; // Extract the slug from the URL parameters
    const locale = getLocale() || 'en'; // Get the current locale, default to 'en'

    // console.log(`[project slug page.js] Loading data for slug: ${slug}, locale: ${locale}`);

    try {
        // Fetch all projects for the current locale using your getContents utility.
        // The getContents function (from content-utils) now handles filtering and transformation.
        const allProjects = await getContents(locale, 'project');

        // Find the specific project that matches the slug.
        // We're comparing the slug from the URL with the generated 'href' (after removing the '/projects/')
        const project = allProjects.find(p => p.href.endsWith(`/${slug}`));

        if (!project) {
            console.warn(`[project slug page.js] Project with slug "${slug}" not found.`);
            // If no project is found, throw a 404 error.
            throw error(404, 'Project not found');
        }

        // console.log(`[project slug page.js] Found project: "${project.title}"`);
        // Return the found project data to the Svelte page.
        return {
            project: project,
            locale: locale // Also pass the locale if needed on the page
        };
    } catch (e) {
        error(404, {
			message: `This is ${e}`,
		});
    }
}
