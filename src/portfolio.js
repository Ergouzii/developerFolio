/* Change this file to get personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const greeting = {
  /* Summary And Greeting Section */
  username: 'Xiaohui Liu',
  title: "Hey, I'm Xiaohui (Jay)",
  subTitle: emoji(
    'A passionate Software Developer 🚀 who loves building web applications with React.js / Nodejs / Django and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://docs.google.com/document/d/13fL4IivGrph-55tWBT6soskozCSgFeqSehdf6drKYFk/export?format=pdf',
};

// Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/Ergouzii',
  linkedin: 'https://www.linkedin.com/in/xiaohui-liu/',
  medium: 'https://medium.com/@jayliu925',
  gmail: 'xiaohui.j.liu@gmail.com',
};

// Skills Section

const skillsSection = {
  title: 'What i do',
  subTitle: emoji(
    '⚡ FULL STACK DEVELOPER WHO LOVES EXPLORING EVERY TECH STACK'
  ),
  skills: [
    // emoji("⚡ Develop highly interactive Front end & User Interfaces for web applications"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'React.js',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'Node.js',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'NPM',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'Django',
      fontAwesomeClassname: 'fab fa-dochub',
    },
    {
      skillName: 'HTML5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'LESS',
      fontAwesomeClassname: 'fab fa-less',
    },
    {
      skillName: 'SQL-Database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'AWS',
      fontAwesomeClassname: 'fab fa-aws',
    },
  ],
};

// Top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  // Insert stack or technology you have experience in
      progressPercentage: "90%"  // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

// Top 3 work experiences

const workExperiences = {
  viewExperiences: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Developer, Co-op',
      company: 'Alberta Investment Management Corporation (AIMCo)',
      companylogo: require('./assets/images/aimco_logo.jpeg'),
      date: 'January 2020 – Present',
      desc:
        'Responsible for full-cycle web / software development, from requirement gathering to data model design, coding, testing, documentation, deployment and presentation.',
      descBullets: [
        'Worked directly with stakeholders and managers to develop requirements and prioritize feedback.',
        'Coordinated with developers on database normalization and improvements in logic.',
        'Refactored code for legacy production applications to improve modularity and maintainability, resulting in increased usability and reduced run time.',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'University of Alberta',
      companylogo: require('./assets/images/ua_logo.png'),
      date: 'October 2019 – December 2019',
      desc:
        'Performed research in the area of Information Retrieval and Web Archiving.',
      descBullets: [
        'Developed Python programs to create, explore, and analyze web archives.',
        'Accelerated data analysis process by performing data cleaning and extraction, reducing final dataset by over 40%.',
        'Improved ​Python​ programs efficiency by utilizing ​cloud computing​ resources, saving 30% of average execution time.',
        'Co-authored 2 published papers about information retrieval and web archiving.',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  viewOpenSource: true, // Set it to true to show openSource section
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Ergouzii', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  viewBigProjects: false, // Set it to true to show Big Projects
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  viewAchievement: true, // Set it to true to show Achievements
  title: emoji('Achievements 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',
  achivementsCards: [
    {
      title: 'Server-side Development with NodeJS, Express and MongoDB',
      subtitle:
        'An online course authorized by The Hong Kong University of Science and Technology and offered through Coursera',
      image: require('./assets/images/nodejs_logo.svg.png'),
      footerLink: [
        {
          name: 'Certification',
          url: 'https://coursera.org/share/201751be8cb289d117b2da39e5aaa874',
        },
        {
          name: 'Details',
          url: 'https://www.coursera.org/learn/server-side-nodejs',
        },
      ],
    },
    {
      title: 'AWS Fundamentals: Going Cloud-Native',
      subtitle:
        'An online course authorized by Amazon and offered through Coursera',
      image: require('./assets/images/aws_logo.svg.png'),
      footerLink: [
        {
          name: 'Certification',
          url: 'https://coursera.org/share/be169a1510ac19597eeb4677a2f14a48',
        },
        {
          name: 'Details',
          url:
            'https://www.coursera.org/learn/aws-fundamentals-going-cloud-native',
        },
      ],
    },
    {
      title: 'AWS Fundamentals: Addressing Security Risk',
      subtitle:
        'An online course authorized by Amazon and offered through Coursera',
      image: require('./assets/images/aws_logo.svg.png'),
      footerLink: [
        {
          name: 'Certification',
          url: 'https://coursera.org/share/b0524b463c0b7c0c2bed2e0adadab434',
        },
        {
          name: 'Details',
          url:
            'https://www.coursera.org/learn/aws-fundamentals-addressing-security-risk',
        },
      ],
    },
    {
      title: 'Responsive Web Design',
      subtitle:
        'Developer Certification, representing approximately 300 hours of coursework',
      image: require('./assets/images/fcc_logo.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://www.freecodecamp.org/certification/fcc58c4c591-73a8-4bbe-8c75-eb92b5bb7fb3/responsive-web-design',
        },
        { name: 'Details', url: 'https://www.freecodecamp.org/learn/' },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  viewBlogs: true, // Set it to true to view Blogs section
  title: 'Blogs',
  subtitle:
    'With love for developing cool stuff, I love to share with people what I have learnt.',

  blogs: [
    {
      url: 'https://medium.com/@jayliu925/intro-b8b037916e11',
      title: 'A JavaScript quiz that will hurt your feelings.',
      description: '20 tricky questions about JavaScript, can you solve them?',
    },
    {
      url:
        'https://medium.com/@jayliu925/double-equals-vs-triple-equals-in-javascript-d23a0ec80270',
      title: 'Double Equal vs. Triple Equal - JavaScript',
      description:
        '== and === is always confusing to people who are new to JavaScript. How are they different exactly?',
    },
    {
      url: 'https://medium.com/@jayliu925/prototype-in-javascript-b6b47f3dd47d',
      title: 'Everything about JavaScript Prototypes',
      description:
        'Objects extremely important in the language of JavaScript. If you don’t use objects, you are not a JavaScript programmer. In order to create objects, you have to know prototype.',
    },
  ],
};

// Talks Section

const talkSection = {
  viewTalks: false, // Set it to true to see Talks section

  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
};

// Podcast Section

const podcastSection = {
  viewPodcast: false, // Set it to true to see Podcast section

  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle: 'Wanna say hi? My inbox is always open for you!',
  number: '+1 780-716-6858',
  email_address: 'xiaohui.j.liu@gmail.com',
};

// Twitter Section

const twitterDetails = {
  /* Replace "twitter" with your twitter username without @.
    This section will not be shown if no username is given. */
  userName : null
};

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails};
