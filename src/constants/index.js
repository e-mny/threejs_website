import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  {
    name: "About",
    subMenu: [
      { title: "TL;DR", description: "Full-Stack Data Scientist with experience in \n- Database Management\n- Software Development\n- Machine Learning" },
      { title: "Education", description: "Nanyang Technological University - Computer Science Bachelor's Degree" },
      { title: "Work", description: "Currently at SingHealth as a Data Analyst!" },
      { title: "After-Hours", description: "Little bit of everything, but more on:\n\n🐱 MeowMeow (yes, that's my cat's name)\n🥏 175g plastic\n🎸 Music Prosumer \n☕️ Give me that cuppa kofey!" },
    ],
  },
  {
    name: "Projects",
    subMenu: [
      { title: "Data Science", description: "Projects related to data analysis and statistical models." },
      { title: "Machine Learning", description: "Projects focused on building and deploying ML models." },
      { title: "Software Development", description: "Projects that involve software architecture and development." },
      { title: "GitHub", description: "My stash of imperfect repositories", link: "https://github.com/e-mny" },
    ],
  },
  {
    name: "Technologies",
    subMenu: [
      { title: "Programming", description: "Besides English and Chinese, I speak Python and JavaScript.\nPlanning to learn Go soon!" },
      { title: "Libraries", description: "Frameworks and libraries I utilize in projects (e.g., React, TensorFlow)." },
      { title: "Tools", description: "Development tools and platforms I use (e.g., Docker, AWS)." },
    ],
  },
  {
    name: "Contact",
    subMenu: [
      { title: "Email", description: "I am only 20 characters away!", link: "mailto:enochmokny@gmail.com" },
      { title: "LinkedIn", description: "The Facebook for working adults!", link: "https://www.linkedin.com/in/enochmok/" },
      { title: "Resume", description: "Is it pronounced 'Resume' or 'Resume'?", link: "/EnochMok_Resume.pdf" },
    ],
  },
];


export const searchLists = [
  { id: 1, name: "About", description: "A little teaser of myself", tags: "hello world, bio, introduction, personal" },
  { id: 2, name: "Projects", description: "Projects I've done", tags: "portfolio, work, showcase" },
  { id: 3, name: "Technologies", description: "My experience using tech", tags: "programming, coding, react, typescript, javascript, python, pytorch, tensorflow, keras, scikit-learn, numpy, pandas, apis, sql, nosql, mongodb, postgresql, mysql, tailwindcss, next.js, electron, jupyter notebooks, opencv, git, machine learning, deep learning, neural networks, ai, cloud storage, cloud computing, data analysis, data engineering, data wrangling"},
  { id: 4, name: "Contact", description: "Slide into my DMs", tags: "contact, communication, social, reach out, linkedin, github" },
  { id: 5, name: "Resume", description: "(or CV as some might call it...)", tags: "resume, CV, career, qualifications, professional" },
]

export const HeroAdjectives = [
    "Enoch",
    "a Data Scientist",
    "an Animal Lover",
    "a Runner",
    "an Athlete",
    "a Guitarist",
    "a Foodie",
    "a Techie",
    "a Gamer",
    "a Bassist"
  ];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];