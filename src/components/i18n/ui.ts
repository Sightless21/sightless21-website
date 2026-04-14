export const navlists = {
  en: [
    { label: 'Projects', route: '/en/projects' },
    { label: 'Services', route: '/en/services' },
    { label: 'Contact', route: '/en/contact' },
    { label: 'Blog', route: '/en/blog' }
  ],
  ja: [
    { label: 'プロジェクト', route: '/ja/projects' },
    { label: 'サービス', route: '/ja/services' },
    { label: 'お問い合わせ', route: '/ja/contact' },
    { label: 'ブログ', route: '/ja/blog' }
  ]
} as const;

export type Locale = keyof typeof navlists;
export type Route = (typeof navlists)[Locale][number];
