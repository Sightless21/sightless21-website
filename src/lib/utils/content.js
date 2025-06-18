/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
//src/lib/utils/content.js
import { error } from '@sveltejs/kit';

// Types
/**
 * @typedef {Object} BaseContent
 * @property {string} title
 * @property {string} date
 * @property {string} excerpt
 * @property {string} href
 */

/**
 * @typedef {BaseContent} ProjectContent
 * @property {string[]} images
 * @property {string} thumbnail
 * @property {string} liveLink
 * @property {string} repoLink
 * @property {string[]} colors
 * @property {string[]} techStack
 * @property {string} challenge
 * @property {string} solution
 * @property {boolean} comingSoon
 */

/**
 * @typedef {BaseContent} BlogContent
 * @property {string} author
 * @property {string} image
 * @property {string} imageAlt
 * @property {string} language
 */

// แยก glob สำหรับไฟล์ประเภทต่างๆ
const allJsonFiles = import.meta.glob('/src/content/**/*.json', { eager: true });
const allSvxFiles = import.meta.glob('/src/content/**/*.svx', { eager: true });

// console.log('[Debug] Found JSON files:', Object.keys(allJsonFiles));
// console.log('[Debug] Found SVX files:', Object.keys(allSvxFiles));

const transformProjectContent = (originalContent, locale, slug) => {
	// console.log('[Debug] Transforming project:', { locale, slug });
	return {
		title: originalContent.title,
		date: originalContent.date,
		excerpt: originalContent.excerpt,
		images: originalContent.images || [],
		thumbnail: originalContent.thumbnail,
		liveLink: originalContent.liveLink,
		repoLink: originalContent.repoLink,
		colors: originalContent.colors || [],
		techStack: originalContent.techStack || [],
		challenge: originalContent.challenge,
		solution: originalContent.solution,
		comingSoon: originalContent.comingSoon || false,
		href: `/${locale}/projects/${slug}`
	};
};

const transformBlogContent = (originalContent, locale, slug) => {
	// console.log('[Debug] Transforming blog:', { locale, slug });
	return {
		title: originalContent.title,
		date: originalContent.date,
		excerpt: originalContent.excerpt,
		author: originalContent.author,
		thumbnail: originalContent.thumbnail,
		image: originalContent.image,
		imageAlt: originalContent.imageAlt,
		language: originalContent.language,
		href: `/${locale}/blog/${slug}`
	};
};

export async function getContents(locale, contentType) {
	// console.log('[Debug] Getting contents for:', { locale, contentType });
	try {
		const contents = [];
		const expectedPathPrefix = `/src/content/${locale}/${contentType}/`;
		// console.log('[Debug] Looking for files with prefix:', expectedPathPrefix);

		if (contentType === 'project') {
			for (const path in allJsonFiles) {
				// console.log('[Debug] Processing JSON file:', path);

				const module = allJsonFiles[path];
				if (!module?.default) {
					console.warn(`No default export in ${path}`);
					continue;
				}

				if (path.startsWith(expectedPathPrefix) && path.endsWith('.json')) {
					const originalContent = module.default;
					const slug = path
						.split('/')
						.pop()
						.replace(/\.json$/, '');
					// console.log('[Debug] Adding project content, slug:', slug);
					contents.push(transformProjectContent(originalContent, locale, slug));
				}
			}
		}

		if (contentType === 'blog') {
			for (const path in allSvxFiles) {
				// console.log('[Debug] Processing SVX file:', path);

				const module = allSvxFiles[path];
				if (!module?.metadata) {
					console.warn(`No metadata in ${path}`);
					continue;
				}

				if (path.startsWith(expectedPathPrefix) && path.endsWith('.svx')) {
					const originalContent = module.metadata;
					const slug = path
						.split('/')
						.pop()
						.replace(/\.svx$/, '');
					// console.log('[Debug] Adding blog content, slug:', slug);
					contents.push(transformBlogContent(originalContent, locale, slug));
				}
			}
		}

		// console.log('[Debug] Pre-sort contents:', contents);
		const sortedContents = contents.sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
		// console.log('[Debug] Post-sort contents:', sortedContents);

		return sortedContents;
	} catch (err) {
		console.error('[Debug] Error details:', {
			error: err,
			stack: err.stack,
			locale,
			contentType
		});
		throw error(500, `Could not load ${contentType} data.`);
	}
}