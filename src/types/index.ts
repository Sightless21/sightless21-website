export type Language = 'en' | 'ja';
export type FontSizeVariant = 'default' | 'nav' | 'nameproject' | 'body' | 'blog' | 'name';

export interface ProjectMetadata {
	title?: string;
	description?: string;
	date: string;
	hero?: string;
	heroAlt?: string;
	href: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export interface Project extends ProjectMetadata {
	slug: string;
}

export interface ProjectWithContent extends Project {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
}

export type FileResolver = () => Promise<{ metadata: ProjectMetadata }>;
export type FileMap = Record<string, FileResolver>;
