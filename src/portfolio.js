/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Saly Moubarak's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Saly Moubarak Portfolio",
    type: "website",
    url: "http://salymoubarak.dev/",
  },
};

//Home Page
const greeting = {
  title: "Saly Moubarak",
  logo_name: "SalyMoubarak",
  nickname: "B5Happy",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1_tmUVGroWdN7RH45EFdvFq2vtP5-lt3-",
  portfolio_repository: "https://github.com/B5Happy",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/B5Happy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/saly-moubarak-6b7b77b5/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:saly.moubarak@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in .Net & Node",
        "⚡ Building resposive website front end React & Angular",
        "⚡ Developing mobile applications using Flutter & Xamarin",
        "⚡ Developing voice applications for Google assitant & Alexa",
        "⚡ Developing games in Unity",
      ],
      softwareSkills: [
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: ".Net",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512cd4",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#512cd4",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Xamarin",
          fontAwesomeClassname: "simple-icons:xamarin",
          style: {
            color: "#512cd4",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Cloud Developer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating visit card design",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
     // siteName: "HackerRank",
     // iconifyClassname: "simple-icons:hackerrank",
     // style: {
     //   color: "#2EC866",
     // },
     // profileLink: "https://www.hackerrank.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Supinfo Paris",
      subtitle: "Licence",
      logo_path: "supinfo_logo.png",
      alt_name: "Supinfo Paris",
      duration: "2016 - 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects.",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.supinfo.com/",
    },
    {
      title: "Lycée de l'Hautil",
      subtitle: "BTS - SIO",
      logo_path: "lycee_logo.png",
      alt_name: "Lycée de l'Hautil",
      duration: "2014 - 2016",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Web, Algorithms,Programing.",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
      ],
      website_link: "http://www.lyc-hautil-jouy.ac-versailles.fr/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud ",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/0eecb949-465b-4e01-90cd-456f0e4d221c",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, Volunteership & Prize",
  description:
    "I have worked with startups as Designer and Software Architect. I like to read blogs about latest tech and try to build app.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Developer",
          company: "Synas",
          company_url: "",
          logo_path: "synas_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Grigny, France",
          description:
            "I was working on mobile and web app. The projects involve e-commerce that sell Indian spices and uber like mobile app.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "OKIT",
          company_url: "http://v2.okit.in/",
          logo_path: "okit_logo.png",
          duration: "June 2018 - Feb 2020",
          location: "Pondicherry, Inde",
          description:
            "As part of an agile method development(Jira) I had implemented the new features and successfully fixed the bugs. Developed under .Net MVC Framework in C # and SQL Server. Web page design on Figma and implement with HTML CSS JS (JQuery).",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer",
          company: "Juke4me",
          company_url: "https://www.juke4me.com/",
          logo_path: "juke4me.png",
          duration: "July 2017 - December 2017",
          location: "Saint-Germain-En-Laye, France",
          description:
            "I have worked on mobile app on Xamarin Froms(C#), that take control of the sound of the place where you are by interacting on playlists via your smartphone . I redesign the architecture of the app to reduce crashes by 80% and double the speed of the application. And Implemented Push Notification on Android and IOS which increased customer engagement with Azure.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Knowledge Sharing",
          company: "3Espoir",
          company_url: "",
          logo_path: "3esp_logo.png",
          duration: "June 2019 - April 2020",
          location: "Pondicherry, India",
          description:
            "It's a community that will share the knowledge with IT professionals of latest technologies.",
          color: "#4285F4",
        }
      ],
    },
    {
      title: "Prize",
      experiences: [
        {
          title: "Google goodies",
          company: "Google",
          company_url: "https://www.delhivery.com/",
          logo_path: "google_logo.png",
          duration: "2019",
          location: "Pondicherry, India",
          description:
            "After a google cloud meetup, we get one month access to QuickLabs.To the first 10 people who finish 3 quests get the goodies.",
          color: "#aa00ff",
        },
        {
          title: "Alexa T-Shirt",
          company: "Amazon",
          company_url: "",
          logo_path: "alexa_logo.png",
          duration: "2019",
          location: "Pondicherry, India",
          description:
            "We have to submit a good alexa skill.",
          color: "#4287f5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "saly_min.png",
    description:
      "You can message me, I will reply within 24 hours. I can help you for any query.",
  },
  blogSection: {
    title: "Blog",
    subtitle:
      "Coming soon...",
    //link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Grigny - 91350",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Grigny/@48.6583332,2.3688297,14z",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+33 7 73 27 57 50",
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
  contactPageData,
};
