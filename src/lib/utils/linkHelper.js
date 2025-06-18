// src/lib/utils/linkHelper.js
import { getLocale } from '$lib/paraglide/runtime';

/**
 * สร้าง link ที่รวม locale ปัจจุบัน
 * @param {string} path - path ที่ต้องการ เช่น '/projects'
 * @returns {string} - localized link
 */
export function localizedLink(path) {
	const locale = getLocale();
	
	// ถ้าเป็นภาษา default (en) ให้ใช้ path ตรงๆ
	if (locale === 'en') {
		return path;
	}
	
	// ถ้าไม่ใช่ ให้เพิ่ม locale prefix
	return `/${locale}${path}`;
}

/**
 * สร้าง back link สำหรับหน้า individual page
 * @param {string} section - section name เช่น 'projects', 'blog'
 * @returns {string} - localized back link
 */
export function getBackLink(section) {
	return localizedLink(`/${section}`);
}