/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Leandro's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Leandro Pereira Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "LeandroPereira",
  logo_name: "LeandroPereira",
  nickname: "n0t",
  subTitle:
    "A highly motivated individual, always eager to take on new challenges and enthusiastic about collaborating with teams to build impactful, sustainable, and scalable social and technical solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1RVxWYZdCgAEdeq5WOOj8DhbCUpTlT2EI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/n0t666",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/n0t666",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/leandro-alves-pereira/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:leandrpra870@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "• Building responsive front-end applications using React, HTML, CSS, and frameworks like Bootstrap and Tailwind CSS.",
        "• Developing robust back-end applications with PHP, focusing on frameworks like Laravel and Yii2.",
        "• Creating and managing relational databases for dynamic applications.",
        "• Working with C# for developing desktop.",
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Yii2",
          fontAwesomeClassname: "simple-icons:yii",
          style: {
            color: "#D85626",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38B2AC",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Instituto Politécnico de Leiria",
      subtitle: "CTeSP in Programming and Information Systems (PSI)",
      logo_path: "ipleiria.png",
      alt_name: "IPLeiria",
      duration: "2023 - Present",
      descriptions: [
        "• Currently studying advanced programming, software development, and database management.",
        "• Engaging in projects focused on programming for information systems, network architecture, and web applications.",
        "• Participating in hands-on activities involving system analysis and development using modern technologies.",
      ],
      website_link: "https://www.ipleiria.pt",
    },
    {
      title: "Escola Básica e Secundária da Batalha",
      subtitle:
        "Technical Management and Programming of Information Systems (TGPSI)",
      logo_path: "aeb(1).png",
      alt_name: "ESB Batalha",
      duration: "2020 - 2023",
      descriptions: [
        "• I studied key software engineering topics such as Data Structures, Algorithms, Databases, Operating Systems, and Web Programming.",
        "• I completed courses and projects on software development, network management, and web-based applications.",
        "• I participated in practical projects, developing management systems and software applications as part of the technical curriculum.",
      ],
      website_link: "https://www.agbatalha.pt/aeb/index.php",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Arduino Day",
      subtitle: "- Event Participation",
      logo_path: "arduino.png",
      certificate_link:
        "https://drive.google.com/file/d/1qwIxR1ZPO_zRiboI_xDNMGDbbaUzmbQf/view?usp=drive_link",
      alt_name: "Arduino Community",
      color_code: "#009C94",
    },
    {
      title: "CCNAv7 Introdução às Redes",
      subtitle: "- Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1BK_Xc0MTFbdQNQdHQWP-QX1_73YwYDO7/view?usp=sharing",
      alt_name: "Cisco Networking Academy",
      color_code: "#1C8E64",
    },
    {
      title: "Cisco Get Connected",
      subtitle: "- Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1cw_JJVigr9zGauYASx86CEhaYCDvGCYk/view?usp=sharing",
      alt_name: "Cisco Networking Academy",
      color_code: "#1C8E64",
    },
    {
      title: "ALL WE NEED IS A NEW SY(STEM) HOST STUDENT",
      subtitle: "- Erasmus KA229 C5 Program",
      logo_path: "erasmus.png",
      certificate_link:
        "https://drive.google.com/file/d/1-Tmn7-SpmqXdbS3gUr5r7oPFbSdcvt4Z/view?usp=sharing",
      alt_name: "Erasmus KA229 C5",
      color_code: "#F4B400",
    },
    {
      title: "SELFIE EUROPE",
      subtitle: "- Event Participation",
      logo_path: "selfie.png",
      certificate_link:
        "https://drive.google.com/file/d/1cV8vz6w5UOHDhJnYwAT7xWGEgwmciSb6/view?usp=sharing",
      alt_name: "SELFIE Europe",
      color_code: "#3C70D4",
    },
    {
      title: "Mind & Bytes Week",
      subtitle: "- Event Participation",
      logo_path: "anpri.png",
      certificate_link:
        "https://drive.google.com/file/d/1aps59ZXBQOGOP1pztHvjC6r8s937KNGz/view?usp=sharing",
      alt_name: "Mind & Bytes",
      color_code: "#FF6A00",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Although I have not yet had a full-time job, I have completed several internships and am continuously striving to improve my skills. I am focused on finishing my major to ensure I have enough experience and knowledge to make an impact in the industry. I am passionate about learning and growing in my field.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical Support Intern",
          company: "Inforabreu",
          company_url: "https://www.inforabreu.pt/",
          logo_path: "inforabreu.png",
          duration: "May 2022 - June 2022",
          location: "Leiria, Portugal",
          description:
            "Worked on hardware maintenance for schools, including cleaning and repairing PCs, soldering card readers, organizing stock, and providing technical support to clients.",
          color: "#000000",
        },
        {
          title: "Software Development Intern",
          company: "Centro de Competência Entre Mar e Serra",
          company_url: "https://www.ccems.pt/",
          logo_path: "ccems.jpg",
          duration: "Feb 2023 - April 2023",
          location: "Leiria, Portugal",
          description:
            "Developed a project using Laravel for backend management, focusing on creating dynamic routes with integrated front-end functionality. Managed database connections and routes.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Most of my projects are within an academic context, but I am eager to start working on more projects to develop new solutions. My main focus is on building web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I aim to respond promptly and am always open to exploring new topics or providing assistance in areas like Web Development or Desktop Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
