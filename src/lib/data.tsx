import { Github, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNet from '/public/images/logos/icon-net.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoSQL from '/public/images/logos/icon-sql.svg';
import LogoEFCore from '/public/images/logos/icon-efcore.svg';
import LogoEFCoreLight from '/public/images/logos/icon-efcore-light.svg';
import LogoVuejs from '/public/images/logos/icon-vuejs.svg';
import LogoDocker from '/public/images/logos/icon-docker.svg';
import LogoDockerLight from '/public/images/logos/icon-docker-light.svg';
import LogoAzureDevops from '/public/images/logos/icon-azure-devops.svg';

import LogoThreatLocker from '/public/images/logos/logo-threatlocker.svg';
import LogoThreatLockerLight from '/public/images/logos/logo-threatlocker-light.svg';
import LogoBancoSantaCruz from '/public/images/logos/logo-bancosantacruz.svg';
import LogoCerveceriaDominicanaLight from '/public/images/logos/logo-cervecerianacional-light.svg';

import projectFoodCraft from '/public/images/project-food-craft.png';
import ProjectRestaurant from '/public/images/project-restaurant-system.png';
import ProjectRestaurantApi from '/public/images/project-restaurant-systemAPI.png';
import ProjectFinancialSystem from '/public/images/project-sistema-Financiera.png';
import projectReynovaFBA1 from '/public/images/project-reynova-fba-1.png';
import projectReynovaFBA2 from '/public/images/project-reynova-fba-2.png';
import projectReynovaFBA3 from '/public/images/project-reynova-fba-3.png';


import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/livingston12',
  GITHUB_REPO: 'https://github.com/livingston12/livingston12.github.io',
  LINKEDIN: 'https://www.linkedin.com/in/livingston-lyttle-reynoso-7b7092108/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/livingston12',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/livingston-lyttle-reynoso-7b7092108/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: '.Net Core',
    logo: LogoNet,
    url: 'https://learn.microsoft.com/en-us/dotnet/core/introduction',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'EF Core',
    logo: LogoEFCore,
    darkModeLogo: LogoEFCoreLight,
    url: 'https://learn.microsoft.com/en-us/ef/core/',
  },
  {
    label: 'Vue.js',
    logo: LogoVuejs,
    url: 'https://vuejs.org/guide/quick-start',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    darkModeLogo: LogoDockerLight,
    url: 'https://docs.docker.com/',
  },
  {
    label: 'Sql Server',
    logo: LogoSQL,
    url: 'https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Azure DevOps',
    logo: LogoAzureDevops,
    url: 'https://azure.microsoft.com/en-us/products/devops',
  },

];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoThreatLocker,
    darkModeLogo: LogoThreatLockerLight,
    logoAlt: 'Logo ThreatLocker',
    position: 'Full Stack Developer',
    startDate: new Date(2024, 7),
    currentlyWorkHere: true,
    summary: [
      `Implemented automated approval processing system for machine policy requests, using dynamic rules (e.g., geo-location, category,
        organization-level policies) and flag-based control logic for critical decisioning.`,
      `Designed a robust retry mechanism with minimal failure tolerance to handle sensitive approval workflows, including enum-based
        flag tracking and staged updates across multiple tables.`,
      `Built an auto-increment patching system to update outdated applications across organizations based on policy mapping, application
      versions, and expiration logic—similar to OS-level patch management systems.`
    ],
  },
  {
    logo: LogoBancoSantaCruz,
    logoAlt: 'Banco Santa Cruz logo',
    position: 'Senior Software Developer',
    startDate: new Date(2022, 7),
    endDate: new Date(2024, 7),
    summary: [
      `Led the architecture and implementation of a fiscal receipt automation system using .NET background jobs, boosting compliance
        reporting efficiency by over 80%.`,
      `Developed secure, scalable APIs including Visa 3D Secure payments and SMS-based authentication, aligned with PCI-DSS standards.`,
      `Modernized the CI/CD pipeline through Docker containerization and optimized legacy integrations (e.g., Qualtrics API), reducing la-
        tency by 95%.`
    ],
  },
  {
    logo: LogoCerveceriaDominicanaLight,
    logoAlt: 'Cerveceria Nacional Dominicana logo',
    position: 'Integration Developer',
    startDate: new Date(2021, 3),
    endDate: new Date(2022, 7),
    summary: [
      `Led development of a critical .NET Core 3.1 API providing comprehensive product
       information, including beverages, with essential business logic processes.`,
      `Integrated warehouse data into the company’s microservice, updating production 
        information for beverages and ensuring seamless customer transactions.`
    ],
    secondaryPosition: 'Web Developer (BI)',
    startDateSecondary: new Date(2021, 3),
    endDateSecondary: new Date(2019, 3),
    summarySecondary: [
      `Developed two websites using .Net Core, Vue Js, HTML, CSS, JavaScript and SQL Server`,
      `Managed diverse data sources to consolidate into a unified system, enhancing data accessibility.`
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: `Reynova FBA – Automated Amazon FBA Business
      Platform `,
    description:
      `I founded Reynova LLC to build a fully automated and data-driven Amazon FBA operation focused on Wholesale and Private Label strategies.
       I designed and developed an end-to-end system that leverages AI, machine learning, and real-time analytics to identify profitable products, 
       optimize sourcing decisions, and scale operations with minimal manual intervention.
      `,
    url: '',
    website: 'https://dashboard.reynovas.com',
    previewImages: [
      { light: projectReynovaFBA1 }
      , { light: projectReynovaFBA2 }
      , { light: projectReynovaFBA3 }],
    technologies: [
      'Node.js'
      , 'TypeScript'
      , 'MongoDB'
      , 'FastAPI'
      , 'Python'
      , 'n8n'
      , 'Docker'
      , 'Ollama'
      , 'RabbitMQ'
    ],
  },
  {
    name: 'FoodCraft AI',
    description:
      `FoodCraft AI is a smart culinary assistant that helps you craft delicious 
       meals effortlessly. Create food groups, input the ingredients you have 
       on hand, and let our AI-powered engine suggest a variety of dishes you can 
       prepare. Perfect for home cooks looking for inspiration or to make the most
       out of their pantry!
      `,
    url: 'https://github.com/livingston12/IngredientsTasks',
    website: 'https://livingston12.github.io/IngredientsTasks/',
    previewImages: [{ light: projectFoodCraft }],
    technologies: [
      'React',
      'Tailwindcss',
      'Html',
      'Css',
    ],
  },
  {
    name: 'Restaurant System',
    description:
      `Optimized for efficiency, this application empowers administrators to
      seamlessly input and manage their menu offerings for swift sales transactions.
      Designed to cater to both take-out and dine-in orders, it streamlines the process
      for delivering exceptional service and convenience
      `,
    url: 'https://github.com/livingston12/Restaurant-system',
    previewImages: [{ light: ProjectRestaurant }],
    technologies: [
      'Vue Js',
      'Vuetify',
      'Router'
    ],
  },
  {
    name: 'Restaurant System (API)',
    description:
      `This application serves as the backend for restaurant systems, 
       efficiently managing data responses and facilitating seamless operations.
       Designed to enhance the restaurant experience, it ensures smooth communication
       and functionality within the system’s infrastructure.
      `,
    url: 'https://github.com/livingston12/PANDORA',
    previewImages: [{ light: ProjectRestaurantApi }],
    technologies: [
      '.NET Core',
      'SQL Server'
    ],
  },
  {
    name: 'Financial system',
    description:
      `This versatile loan management system allows individuals and businesses 
      to efficiently handle loan operations. With features like customizable payment 
      schedules, fee management, and financial account integration, it provides a comprehensive solution for loan origination and
      management.`,
    url: 'https://github.com/livingston12/sistema-financiera',
    previewImages: [{ light: ProjectFinancialSystem }],
    technologies: [
      'Asp.Net MVC',
      'Jquery',
      'Html',
      'Css',
      'Boostrap',
      'SQL Server',
    ],
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: '',
    personAvatar: AvatarDummy,
    title: '',
    testimonial: '',
  },
  {
    personName: '',
    personAvatar: AvatarDummy,
    title: '',
    testimonial: '',
  },
  {
    personName: '',
    personAvatar: AvatarDummy,
    title: '',
    testimonial: '',
  },
];
