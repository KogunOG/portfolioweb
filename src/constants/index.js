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
    threejs,
    techlogo,
    earthmo,
    imgapp,
    earthmodemo
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
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
      title: "Research and Development Intern",
      company_name: "TechCryptors",
      icon: techlogo,
      iconBg: "#383E56",
      date: "Jul 2021 - Jan 2022",
      points: [
        "develop web applications in ASP.NET(MVC), DJANGO for students to learn.",
        "Create UI using HTML and CSS from images given by client.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Earthmo",
      icon: earthmo,
      iconBg: "#383E56",
      date: "May 2022 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I believe Kushal Panchal deserves strong consideration when it comes to get work done in limited amount of time.",
      name: "Yadnesh Mohan Zagade",
      designation: "CEO",
      company: "Tech Cryptors",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kushal does.",
      name: "Parag Shah",
      designation: "CEO",
      company: "Microcraft Engineers",
    }
  ];
  
  const projects = [
    {
      name: "AI Image Generation App",
      description:
        "Full-Stack MERN AI Image Generation App that can be used to generate images from just a few prompts and a wonderful community showcase for you to share it with the world!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imgapp,
      source_code_link: "https://github.com/KogunOG/recent_Projects",
    },
    {
      name: "Ecommerce App",
      description:
        "Web application that enables users to search for Earth mover parts all over India using customised search options with ease and along with other features like enquiry for operators, used machines, new machine.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "orange-text-gradient",
        },
      ],
      image: earthmodemo,
      source_code_link: "https://github.com/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };