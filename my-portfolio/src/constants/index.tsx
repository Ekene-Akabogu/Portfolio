/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Github,
  Globe,
  Home,
  Linkedin,
  Layers,
  Mail,
  Phone,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  User,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', 
    link: '#resume',
     icon: FileText 
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/Ekene-Akabogu',
  },
  {
    icon: Mail,
    label: 'Email',
    link: 'mailto:akaboguekene104@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ekenedirichukwu-akabogu-4516bb203/',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    link: 'https://wa.me/08137123586',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.jpeg',
    title: 'Brand Identity',
    tags: ['UI/UX', 'Design & Branding'],
    projectLink: 'https://www.canva.com/design/DAG9Z0L2BFc/D90GkO5vTnuHGigOUwWGHg/view?utm_content=DAG9Z0L2BFc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he175af58f6',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Website Development',
    tags: ['Website', 'Development'],
    projectLink: 'https://dum.theneurobide.com',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'WarehouseX UI/UX Design',
    tags: ['UI/UX', 'Web Design'],
    projectLink: 'https://www.figma.com/design/UfyfUDqK5gaKhphUtvCtX6/WarehouseX---Web-Desktop?node-id=0-1&p=f&t=gZZESvRKdhVzxRx8-0',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2016 – 2022',
    title: 'High School',
    institute: 'Lagoon School',
  },
  {
    year: '2022 – Present',
    title: 'Bachelor in Computer Science (BSc)',
    institute: 'Pan-Atlantic University',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2022 – 2024',
    title: 'Information Technology Intern',
    institute: 'SheltaGroup',
  },
  {
    year: 'August – November 2024',
    title: 'Computer Science Intern',
    institute: 'Chevron Nigeria Limited (CNL)',
  },
  {
    year: 'July – September 2025',
    title: 'Tech and Media Intern',
    institute: 'The Neurobide',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Python',
    imgSrc: '/images/tools/python.svg',
  },
  {
    label: 'Java',
    imgSrc: '/images/tools/java.png',
  },
  {
    label: 'C++',
    imgSrc: '/images/tools/c++.png',
  },
  {
    label: 'MySql',
    imgSrc: '/images/tools/mysql.png',
  },
  {
    label: 'PostgreSQL',
    imgSrc: '/images/tools/postgresql.png',
  },
  {
    label: 'Wordpress',
    imgSrc: '/images/tools/wordpress.png',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'Canva',
    imgSrc: '/images/tools/canva.png',
  },
  {
    label: 'Rust',
    imgSrc: '/images/tools/rust.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand & Digital Identity',
    desc: 'Crafting modern digital identities through strong typography, refined color systems, and minimal visual design.',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience across web and mobile products.',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'MVP & Product Development',
    desc: 'Designing and structuring MVPs with essential features, scalable UI, and user-focused workflows.',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'SaaS & Product Interfaces',
    desc: 'Crafting refined, high-impact interfaces for SaaS platforms and product-driven teams',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];


const statsData: StatsType[] = [
  {
    number: '30+',
    label: 'Happy Clients',
  },
  {
    number: '05+',
    label: 'Years Of Experience',
  },
  {
    number: '50+',
    label: 'Projects Done',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
};