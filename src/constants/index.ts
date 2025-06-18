import { Github, Linkedin } from '../assets/svg/index.js';

export const socialMedia = [
	{
		href: 'https://github.com/Sightless21',
		icon: Github,
		label: 'GitHub'
	},
	{
		href: 'https://www.linkedin.com/in/phanupong-poungbaidee-2a6a78322/',
		icon: Linkedin,
		label: 'LinkedIn'
	}
];

export const navlists = {
	en: [
		{
			label: 'Project',
			route: '/en/projects'
		},
		{
			label: 'About',
			route: '/en/about'
		},
		{
			label: 'Contact',
			route: '/en/contact'
		},
		{
			label: 'Blog',
			route: '/en/blog'
		}
	],
	ja: [
		{
			label: 'プロジェクト',
			route: '/ja/projects'
		},
		{
			label: 'について',
			route: '/ja/about'
		},
		{
			label: '接触',
			route: '/ja/contact'
		},
		{
			label: 'ブログ',
			route: '/ja/blog'
		}
	]
};

export const contactItems = [
	{
	  label: 'Email:',
	  subLabel: 'pou.phanupong@gmail.com',
	  link: 'pou.phanupong@gmail.com'
	},
	{
	  label: 'Telephone:',
	  subLabel: '+66 91 719 8228',
	  link: 'tel:091-710-8228'
	},
	{
	  label: 'Github:',
	  subLabel: 'github.com/Sightless21',
	  link: 'https://github.com/Sightless21'
	}
  ]
