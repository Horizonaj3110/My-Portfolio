import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
  },
  {
    title: "Unity 3D Developer",
    icon: mobile,
  },
  {
    title: "React Js Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Wipro",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Unity 3D",
    company_name: "Wipro",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using Unity 3D and Blender.",
      "Developed and tailored over 50 different metaverse experiences for diverse applications in retail and manufacturing sectors, enhancing digital training capabilities through Unity 3D",
      "Developed and deployed augmented reality (AR) solutions for the manufacturing sector, enabling real-time data visualization, efficient maintenance workflows, and immersive training for repair operations.",
    ],
  },
  {
    title: "Scholar Trainee",
    company_name: "Dana Anand India Pvt Ltd",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - June 2021",
    points: [
      "Spearheaded the installation and commissioning of a manufacturing machinery setup on the shop floor, achieving production readiness within an accelerated timeline of under 20 days.",
      "Executed cost and time optimization initiatives across multiple production lines and revamped standard operating procedures (SOPs) to enhance production speed and efficiency.",
      "Redesigned and optimized the shop floor layout to accommodate a new production line, achieving full operational readiness in under 15 days.",
      "Volunteered to design and lead workshops on Autodesk Fusion 360 and SolidWorks, delivering hands-on training sessions to enhance participants' CAD proficiency.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "Built a scalable e-commerce platform using React.js and Redux, incorporating Firebase for user authentication and data storage. Integrated Stripe API for secure payment processing and implemented responsive design with Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Stripe API",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Real-Time Chat Application",
    description:
      "Designed and developed a real-time chat application using React.js and Socket.IO for WebSocket communication. Implemented secure user authentication with Node.js and JWT, ensuring data integrity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.Js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blogging Platform",
    description:
      "Developed a blogging platform using React.js and GraphQL, integrating a custom rich text editor and user profile management. Ensured seamless user experience with Apollo Client and responsive design using Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "Node.Js",
        color: "green-text-gradient",
      },
      {
        name: "Apollo Client",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
