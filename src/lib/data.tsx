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
import ProjectMoneyApp from '/public/images/project-moneyApp.png';


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
    startDate: new Date(2024, 6),
    currentlyWorkHere: true,
    summary: [
      `Developed and modified robust security measures to safeguard applications 
      against cyber attacks, including intrusion detection, data encryption, 
      and secure authentication protocols, ensuring comprehensive protection and 
      compliance with industry standards.`,
      'Worked with a variety of technologies, including Angular, ASP.NET, .NET Core, SQL Server, Git, and others.',
    ],
  },
  {
    logo: LogoBancoSantaCruz,
    logoAlt: 'Banco Santa Cruz logo',
    position: 'Senior Software Developer',
    startDate: new Date(2023, 8),
    endDate: new Date(2024, 6),
    summary: [
      `Led development of an app to automatically send fiscal receipt numbers to 
      the Junta Central Electoral via scheduled jobs.`,
      `Improved the algorithm that send to the api of 'Qualtrics',
      reducing 95% of the processing time.`     
    ],
    secondaryPosition: 'Senior Software Developer',
    startDateSecondary: new Date(2022, 7),
    endDateSecondary: new Date(2023, 4),
    summarySecondary: [
      `Developed a .NET Core 6 API for secure SMS-based customer access to product info, 
      enabling operational deployment and account queries via messages to 272.`,
      `Developed a .NET Core 6 API for Visa payments incorporating 3D Secure, enhancing transaction security and authentication 
        through tailored internal business logic aligned with Visa specifications.`
    ]
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
    previewImage: projectFoodCraft,
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
    previewImage: ProjectRestaurant,
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
    previewImage: ProjectRestaurantApi,
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
    previewImage: ProjectFinancialSystem,
    technologies: [
      'Asp.Net MVC',
      'Jquery',
      'Html',
      'Css',
      'Boostrap',
      'SQL Server',
    ],
  },
  {
    name: 'Money app',
    description:
      'This project is the copy to Cash app light.',
    url: 'https://github.com/livingston12/MoneyApp',
    previewImage: ProjectMoneyApp,
    technologies: [
      'Vue Native', 
      'Expo'
    ],
  },
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
