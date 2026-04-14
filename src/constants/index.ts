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
			route: '/projects'
		},
		{
			label: 'About',
			route: '/about'
		},
		{
			label: 'Contact',
			route: '/contact'
		},
		{
			label: 'Blog',
			route: '/blog'
		}
	],
	ja: [
		{
			label: 'プロジェクト',
			route: '/projects'
		},
		{
			label: 'について',
			route: '/about'
		},
		{
			label: '接触',
			route: '/contact'
		},
		{
			label: 'ブログ',
			route: '/blog'
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
