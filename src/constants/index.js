import {
  mobile,
  backend,
  covid19,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  HR,
  tesla,
  netflix,
  carrent,
  jobit,
  tripguide,
  threejs,
  bulk,
  za2,
  deviceFinance,
  myZamtelscreenshot,
  michael,
  nkandu,
  patrick
} from "../assets";
import ZamtelLogo from '../assets/ZamtelLogo.png'
import myLogo from '../assets/myLogo.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    rating: '9/10'
  },
  {
    title: "React Native Developer",
    icon: mobile,
    rating: '9/10'
  },
  {
    title: "Backend Developer",
    icon: backend,
    rating: '6/10'
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Zamtel",
    icon: ZamtelLogo,
    iconBg: "#383E56",
    date: "May 2022 - April 2024",
    points: [
      'Lead front end developer at Zambia Telecommunications Company Limited (Zamtel) one of the largest Telecoms companies in Zambia',
      "Developing and maintaining in house and external web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Zamtel",
    icon: ZamtelLogo,
    iconBg: "#E6DEDD",
    date: "May 2022 - April 2024",
    points: [
      "Mobile App Development: primarily focused on developing mobile applications using the React Native framework leveraging my knowledge of JavaScript and React to create cross-platform apps that work on both iOS and Android.",
      "Worked closely with UI/UX designers and backend developers to integrate the frontend with the backend services.",
      "Integrated mobile apps with various APIs and backend services. This involved making API calls, handling responses, and ensuring smooth communication between the frontend and backend components of the application.",
      "Used state management libraries like Redux to manage the state of the applications.",
      "Identifying and fixing bugs. Utilising unit tests to ensure the reliability and stability of the codebase.",
      "Performance Optimization: optimized the performance of the mobile applications. This involved addressing issues related to speed, responsiveness, and memory usage to ensure a smooth user experience.",
      "Deployment: I was responsible for deploying the applications to app stores (such as the Apple App Store and Google Play Store) and ensuring that the app meets the necessary requirements for distribution",
    ],
  },
  {
    title: "Freelance Developer/Designer",
    company_name: "",
    icon: myLogo,
    iconBg: "#383E56",
    date: "Jan 2020 to date",
    points: [
      "Client Communication: Understanding client requirements and expectations, Communicating project timelines, milestones, and progress, Addressing client feedback and making necessary revisions.",
      "Web Design: Creating visually appealing and user-friendly designs, Designing website layouts, user interfaces, and graphics, Selecting color schemes, fonts, and other design elements using WordPress.",
      "Front-End Development: Writing HTML, CSS, and JavaScript code for the client-side of the website, Implementing responsive design to ensure compatibility across various devices and screen sizes, Integrating design elements into web pages and ensuring a seamless user experience.",
      "Security: Implementing security measures to protect websites from common threats, Regularly updating software and plugins to patch security vulnerabilities.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nahshon proved me wrong.",
    name: "Patrick Musonda",
    designation: "CEO",
    company: " Ecoworks Construction",
    image: patrick,
  },
  {
    testimonial:
      "Great team player. Delivers projects on time. Has gone beyond what we expected.",
    name: "Nkandu Kashimilo",
    designation: "Team lead Development",
    company: "Zamtel",
    image: nkandu,
  },
  {
    testimonial:
      "I love how this guy makes me look good to my superiors. The quality of our work increased when we hired him.",
    name: "Michael Syamalala",
    designation: "Manager Development and Integrations",
    company: "Zamtel",
    image: michael,
  },
];

const projects = [
  {
    name: "MyZamtel App",
    description:
      "An all round mobile app for Zambia Telecommunications Company Limited (Zamtel) that allows users to recharge, buy bundle packages, manage their mobile money account, send money, create custom numbers and access Value added services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
    ],
    image: myZamtelscreenshot,
    source_code_link: "https://apps.zamtel.co.zm/myZamtel/#/app",
  },
  {
    name: "HR Portal",
    description:
      "A portal designed to increase the organizations efficiency by automating the HR processes such as Employee onboarding and off boarding, records management for Temporal casual and contract based employees and general employee management. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nest Js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: HR,
    source_code_link: "#",
  },
  {
    name: "Device Finance Portal",
    description:
      "A lead generating portal made for a partnership between Zamtel and a third party for the sales of smartphones on lay-by.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nest Js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "Postgress",
        color: "blue-text-gradient",
      },
    ],
    image: deviceFinance,
    source_code_link: "https://apps.zamtel.co.zm/device-finance/",
  },
  {
    name: "Netflix Clone",
    description:
      "A recreation of the netflix UI, movie trailers, authentication and simulated subscription packages.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "RESTAPI",
        color: "pink-text-gradient",
      },
      
    ],
    image: netflix,
    source_code_link: "https://netflix-2-point-0.web.app/",
  },
  {
    name: "Tesla Clone",
    description:
      "A recreation of the Tesla UI listing different car models with great scroll effect.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
      
    ],
    image: tesla,
    source_code_link: "https://tesla-clone-4ca3a.web.app/",
  },
  {
    name: "Covid 19 Tracker",
    description:
      "A portal for viewing covid active cases, recoveries and deaths for each country worldwide fetching data from API provided by world health organizations.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "REST APIs",
        color: "pink-text-gradient",
      },
      
    ],
    image: covid19,
    source_code_link: "https://covid-19-tracker-6e11e.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
