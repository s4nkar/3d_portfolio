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
    tree,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: mobile,
    },
    {
      title: "AI/ML Researcher",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
      title: "Master in Artificial Intelligence",
      company_name: "University of East London",
      icon: tree,
      iconBg: "#383E56",
      date: "Oct 2023 - Present",
      points: [
        "Designing and implementing machine learning algorithms and models as part of my Master's in AI program.",
        "Collaborating with fellow AI enthusiasts, including professors and peers.",
        "Applying AI principles to enhance the functionality and intelligence of web applications, utilizing technologies.",
        "Fostering a collaborative learning environment focused on cutting-edge AI developments and applications.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "RISS Technologies Kerala, India",
      icon: tree,
      iconBg: "#E6DEDD",
      date: "May 2022 - June 2023",
      points: [
        "Developing and maintaining web applications using Python, Php and other related technologies.",
        "Collaborating with cross-functional teams  to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Illustrated continuous learning by mastering new technologies and methodologies, fostering personal and professional development.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Techise solutions",
      icon: tree,
      iconBg: "#383E56",
      date: "Feb 2023 - Oct 2023",
      points: [
        "Freelance Laravel developer, specializing in efficient and scalable web solutions.",
        "Diverse web design projects completed, collaborating with clients for tailored visual experiences.",
        "Expertise in Laravel for backend development, ensuring robust and seamless web applications.",
        "Adaptable to various web design tasks, delivering creative and user-friendly solutions on time.",
      ],
    },
    {
      title: "MERN Stack Internship",
      company_name: "Camerinfolks",
      icon: tree,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Jan 2023",
      points: [
        "Acquired foundational knowledge of React JS and Node JS during an intensive internship, gaining proficiency in core concepts and principles.",
        "Strengthened skills through hands-on experience, significantly impacting to the development of robust and scalable web applications. ",
        "Demonstrated adaptability and quick learning, enhancing the success of projects while continually expanding expertise in these technologies.",
        " Implemented and championed best practices, optimizing development workflows for increased efficiency.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };