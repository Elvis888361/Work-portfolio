import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ce`jada Hooks',
  title: "Hi all, I'm Ce`jada Hooks",
  description:
    "I feel this program will obtain a positive career in my life. Choosing this path, should showcase my skills and abilities to work well with people. I am honored for this opportunity and thrilled to see what the future holds. ",
  resumeLink:
    'https://drive.google.com/file/d/1p2Bg8OwrazMEhCwXWg8m4eWho42VEajR/view?usp=drive_link',
};

export const openSource = {
  githubUserName: '',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://kangetheelvis.netlify.app/',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com',
  instagram: 'https://www.instagram.com',
  facebook: 'https://www.facebook.com',
  twitter: 'https://twitter.com',
};

export const skillsSection: SkillsSectionType = {
  title: 'Skills',
  subTitle: '',
  data: [
    {
      title: 'Soft Skills',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Teamworking Skills'
        ),
        emoji('⚡ Leadership skills'),
        emoji('⚡ Critical Thinking and problem-solving'),
        emoji('⚡ People Skills'),
        emoji('⚡ Professionalism and strong work ethics'),
      ],
      softwareSkills: [

      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Hard skills', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Soft skills',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Alabama State University, Montgomery, AL ',
    subHeader: 'Working on Batchelor’s Degree  ',
    duration: 'August 2020- Current ',
    desc: '',
    grade: '',
    descBullets: [
    ],
  },
  {
    schoolName: 'Moss Point High School, Moss Point, MS',
    subHeader: 'High school Diploma',
    duration: 'August 2017 to may 2020',
    desc: '',
    grade: 'Graduated with a 3.7 GPA ',
    descBullets: [
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Stocker/Cashier',
    company: 'Walmart Montegomery,Al',
    companyLogo: '/img/icons/common/wal.png',
    date: 'Agust 2022-current',
    desc: 'Put items in their correct place, make sure every area in the home department is fully stocked ',
  },
  {
    role: 'Package Handler',
    company: 'Fedex, Montgomery, AL',
    companyLogo: '/img/icons/common/t.png',
    date: 'April  2021– January',
    desc: 'Unload trucks, label boxes, and move packages from one place to another ',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Cashier',
    company: 'One Stop Wings And Po’boys, Moss Point, MS',
    companyLogo: '/img/icons/common/r.png',
    date: 'AUGUST 2017-JULY 2020',
    desc: 'Greet Customers, Bag items, and make sure everything is as the customer asked for  ',
    // descBullets: [
    //  "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: '',
    desc: 'I enjoy giving back to the community in any way possible, I love being able to be a helping hand and helping people in need. I spend my free time doing things with the community and a lot of volunteer work to gain my knowledge on certain activities. ',
    github: '',
    link: '',
  },
  // {
  //   name: 'AI Development using Apis',
  //   desc: 'Has a conversation Ai,code generation Ai .Image generator video generator',
  //   github: 'https://github.com/Elvis888361/AI-API-SAAS',
  // },
  // {
  //   name: 'cbigdl limited website',
  //   desc: 'build a react website for cbigdl limited',
  //   github: 'https://github.com/Elvis888361/CBIGDL',
  //   link:'http://cbigdl.com',
  // },
  // {
  //   name: 'DekutAirDuka (Ecommerce)',
  //   desc: 'Created an easier way for sellers and Buyers to connect and make purchase and sales',
  //   github: 'https://github.com/Elvis888361/Dekutr-AirDuka',
  // },
];



// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ce`jada Hooks',
  description:
    'A passionate Full Stack Web Developer and Android Developer.',
  author: 'I feel this program will obtain a positive career in my life.',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: '',
  keywords: [
    'Ce`jada',
    'Ce`jada Hooks',
  ],
};
