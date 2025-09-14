/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohammad Elias Jaber",
  title: "Hi all, I'm Elias",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with a B.Sc. from American International University-Bangladesh, skilled in building scalable web applications using JavaScript, React.js, Node.js, and system design. Experienced in developing distributed systems like Google Docs, Zomato, Spotify, and Tinder clones, leveraging microservices, caching, and real-time technologies."
  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=1qu3ziahRFAye0btE5UKnie5JSveZMno3", // Placeholder; update with your CV link (e.g., Google Drive or Overleaf PDF)
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shafinsan",
  linkedin: "https://www.linkedin.com/in/elias-jaber-4074312b6/",
  gmail: "eliasjabershafin599@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/ej.shafin",
  medium: "",
  stackoverflow: "",
  twitter: "", // optional
  instagram: "", // optional
  kaggle: "https://www.kaggle.com/eliasjaber", // optional
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER | ASP.NET Core & React.js Enthusiast",
  skills: [
    emoji("⚡ Build scalable full-stack applications using ASP.NET Core and React.js"),
    emoji("⚡ Develop microservices with Node.js, Express.js, and distributed systems"),
    emoji("⚡ Optimize performance with caching, load balancing, and message queues"),
    emoji("⚡ Design and integrate relational & NoSQL databases (SQL Server, MongoDB, PostgreSQL)"),
    emoji("⚡ Implement real-time features with WebSocket, Kafka, and Redis"),
    emoji("⚡ Explore deep learning integration with practical applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ASP.NET Core",
      fontAwesomeClassname: "fas fa-code"
    },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "SQL Server", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Kafka", fontAwesomeClassname: "fas fa-stream" },
    { skillName: "Elasticsearch", fontAwesomeClassname: "fas fa-search" },
    { skillName: "Git/GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Feni Pilot High School",
      logo: require("./assets/images/pilot.png"), // Add your logo
      subHeader: "Secondary School Certificate – Feni",
      duration: "01/2015 – 03/2017",
      desc: "Completed Secondary School Certificate with outstanding academic performance.",
      descBullets: [
        "GPA: 5.0/5.0",
        "Participated in science and math competitions",
        "Active member of debate club"
      ]
    },
    {
      schoolName: "Feni Government College",
      logo: require("./assets/images/feni.png"), // Add your logo
      subHeader: "Higher Secondary Certificate – Feni",
      duration: "08/2017 – 07/2019",
      desc: "Completed Higher Secondary Certificate in Science stream with distinction.",
      descBullets: [
        "GPA: 5.0/5.0",
        "Focused on Physics, Chemistry, and Mathematics",
        "Engaged in extracurricular activities including coding club"
      ]
    },
    {
      schoolName: "American International University-Bangladesh (AIUB)",
      logo: require("./assets/images/aiub.png"), // Add your logo
      subHeader: "Bachelor of Science in Computer Science and Engineering – Dhaka",
      duration: "09/2019 – 05/2023",
      desc: "Graduated with a strong academic record and hands-on experience in software development.",
      descBullets: [
        "CGPA: 3.8/4.0",
        "Achieved Dean’s List recognition for academic excellence",
        "Built several web and mobile projects using modern technologies",
        "Active member of AIUB programming club and tech community"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React.js, HTML, CSS, JavaScript)",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend (ASP.NET Core, Node.js, Express.js)",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases (SQL Server, MongoDB, PostgreSQL, Redis, Elasticsearch)",
      progressPercentage: "75%"
    },
    {
      Stack: "System Design & Distributed Systems",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming (C++, Java, Python, JavaScript)",
      progressPercentage: "65%"
    },
    {
      Stack: "DSA & Algorithms (LeetCode & Problem Solving)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // You can enable this if you want GitHub/CodersRank badges
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/authweb.png"), // replace with your logo or screenshot
      projectName: "NestJS Auth App",
      projectDesc: "🚀 Modern auth system with NestJS & Next.js — secure 🔒, fast ⚡, and sleek 💎. Handles login, registration, and user management effortlessly.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nestjs-authentication-frontend.netlify.app/"
        }
        // you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing insights on modern development, frameworks, AI, and the future of work in tech.",
  displayMediumBlogs: false, // Using custom blogs
  blogs: [
    {
      url: "https://docs.microsoft.com/en-us/dotnet/core/",
      title: "Why .NET Core is a Game-Changer for Developers",
      description:
        ".NET Core is a cross-platform, high-performance framework for building modern web applications, APIs, and cloud services. It’s fast, flexible, and backed by Microsoft’s ecosystem, making it ideal for enterprise and startups alike."
    },
    {
      url: "https://reactjs.org/",
      title: "Why React Remains the Best Choice for Frontend Development",
      description:
        "React is a declarative, component-based JavaScript library for building dynamic UIs. Its reusable components, large community, and efficient rendering make it a top choice for modern web applications."
    },
    {
      url: "https://www.weforum.org/agenda/2023/05/artificial-intelligence-jobs-future-work/",
      title: "Will AI Take Our Jobs?",
      description:
        "AI is transforming industries, automating repetitive tasks, and augmenting human capabilities. While some jobs may evolve or disappear, new opportunities emerge for professionals who adapt and leverage AI effectively."
    },
    {
      url: "https://www.freecodecamp.org/news/why-learn-python-in-2024/",
      title: "Why Python is Still the Most Popular Language",
      description:
        "Python’s simplicity, versatility, and extensive libraries make it perfect for web development, data science, machine learning, and automation. Its community support ensures continuous growth and learning opportunities."
    },
    {
      url: "https://www.smashingmagazine.com/2023/06/progressive-web-apps/",
      title: "The Rise of Progressive Web Apps (PWAs)",
      description:
        "PWAs combine the best of web and mobile apps, offering offline access, fast loading, and native-like experiences. They’re cost-effective and boost user engagement, making them essential for modern web strategy."
    },
    {
      url: "https://hbr.org/2023/03/how-to-adapt-to-ai-in-the-workplace",
      title: "Adapting to AI in the Workplace",
      description:
        "AI is reshaping how we work. Professionals who embrace AI tools can enhance productivity, creativity, and problem-solving. Continuous learning and adaptability are key to thriving in an AI-driven world."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "💬 Talks & Sessions",
  subtitle: emoji(
    "Sharing ideas, experiences, and a bit of laughter 😎✨"
  ),

  talks: [
    {
      title: "Building Actions for Google Assistant 🤖",
      subtitle: "uilding Google Assistant Actions with Code & Coffee ☕🤖",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/embed/PPs5lZ2syv4"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801670319232",
  email_address: "eliasjabershafin599@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
