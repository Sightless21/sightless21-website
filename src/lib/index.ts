// place files you want to import through the `$lib` alias in this folder.
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { writable } from 'svelte/store';
import { type Language, type FontSizeVariant } from '../types';

export const theme = writable<'light' | 'dark'>('light');
/**
 * Returns the correct border color for a given className.
 *
 * @param {string} [className] - The className to check.
 * @return {string} The correct border color.
 */
export function getBorderColor(className?: string): string {
	if (!className) return 'border-foreground';

	return className.includes('background') ? 'border-background' : 'border-foreground';
}
/**
 * Returns the correct border color for a given className.
 *
 * @param {string} [className] - The className to check.
 * @return {string} The correct border color.
 */
export function getHoverBorderColor(className?: string): string {
	if (!className) return 'hover-underline-animation';

	return className.includes('background')
		? 'hover-underline-animation'
		: 'hover-underline-animation-reverse';
}
/**
 * A utility function that merges and normalizes CSS class names using Tailwind CSS.
 *
 * @param {string | undefined | string[]} inputs - The CSS class names to merge.
 * @return {string | undefined} - The merged and normalized CSS class names.
 *
 * @example
 * cn('bg-red-500', 'text-white', 'rounded-full', 'p-2') // 'bg-red-500 text-white rounded-full p-2'
 * cn('bg-red-500', undefined, 'rounded-full', 'p-2') // 'bg-red-500 rounded-full p-2'
 * cn('bg-red-500', [], 'rounded-full', 'p-2') // 'bg-red-500 rounded-full p-2'
 */
export function cn(...inputs: Array<string | undefined>): string | undefined {
	return twMerge(clsx(inputs));
}

export function dynamicFont(lang: Language): string {
	const fonts: Record<Language, string> = {
		en: 'font-prata',
		ja: 'font-noto-jp'
	};

	return fonts[lang] || fonts.en;
}
export function dynamicFontSize(lang: Language, variant: FontSizeVariant = 'default'): string {
	const sizeMaps: Record<FontSizeVariant, Record<Language, string>> = {
		nav: {
			en: '[&>a]:text-[16vw] md:[&>a]:text-[10vw]',
			ja: '[&>a]:text-[14vw] md:[&>a]:text-[7vw]'
		},
		nameproject: {
			en: '[&>a]:text-[16vw] md:[&>a]:text-[7vw] ',
			ja: '[&>a]:text-[14vw] md:[&>a]:text-[7vw]'
		},
		blog: {
			en: '[&>a]:text-[16vw] md:[&>a]:text-[5vw] ',
			ja: '[&>a]:text-[14vw] md:[&>a]:text-[5vw]'
		},
		body: {
			en: 'text-base md:text-lg',
			ja: 'text-sm md:text-base'
		},
		default: {
			en: 'text-base',
			ja: 'text-base'
		}
	};

	return sizeMaps[variant][lang] || sizeMaps.default[lang];
}

export function dynamicLeading(lang: Language): string {
	const fonts: Record<Language, string> = {
		en: 'leading-[0.95em]',
		ja: 'leading-[1.2em]'
	};
	return fonts[lang] || fonts.en;
}
