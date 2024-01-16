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
    carrent,
    jobit,
    tripguide,
    threejs,
    tree,
    a_studio,
    android,
    bootstrap,
    express,
    flask, 
    laravel,
    mui,
    npm,
    php,
    python,
    sql,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "android",
      icon: android,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "python",
      icon: python,
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
      name: "Domain Prediction",
      description:
        "In this project, I implemented an advanced domain prediction system by leveraging feature engineering techniques to enhance the dataset's information. To address class imbalance, I applied the Synthetic Minority Over-sampling Technique (SMOTE) to achieve a balanced target distribution. Employing state-of-the-art machine learning models, including K-Nearest Neighbors (KNN), Decision Tree, and Random Forest, I conducted a comprehensive analysis to predict domains effectively. Furthermore, optimization was carried out using Random Search to fine-tune model parameters, ensuring optimal performance and robust predictive capabilities.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ML",
          color: "green-text-gradient",
        },
        {
          name: "smote",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sankar-666/Domain-Prediction-with-3-Different-Models.git",
    },
    {
      name: "YouTube Clone",
      description:
        "In this comprehensive YouTube clone project, I skillfully implemented a sophisticated platform using React.js and advanced CSS tools. The user interface is not only visually appealing but also highly functional, replicating key features of the original YouTube. To achieve optimal performance and a seamless user experience, I utilized state-of-the-art React.js libraries and incorporated innovative CSS techniques like for responsive design. This endeavor showcases my dedication to detail, ensuring that the clone is not just a surface-level imitation but a finely tuned application. The commitment to user satisfaction is evident in every aspect of the project.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sankar-666/React---Youtube-clone.git",
    },
    {
      name: "Weapon Detection",
      description:
        "In this forward-thinking weapon detection project, I crafted a sophisticated CCTV model employing advanced technologies like Convolutional Neural Networks (CNN), Haarcascade classifiers, and the powerful OpenCV library. The system boasts dual capabilities, excelling in both weapon and face detection. Through the adept application of cutting-edge computer vision techniques, I ensured the model's accuracy and efficiency in identifying potential threats. CNN was harnessed for intricate pattern recognition, while Haarcascade classifiers provided precision in face detection. The seamless integration resulted in a robust and comprehensive weapon detection system.",
      tags: [
        {
          name: "CNN",
          color: "blue-text-gradient",
        },
        {
          name: "haarcascade",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sankar-666",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };