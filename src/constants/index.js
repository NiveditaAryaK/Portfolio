

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Year of Experience" },
  { value: 200, suffix: "+", label: "Questions Solved" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 98, suffix: "%", label: "Project Fulfillment Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Dev",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Programmer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Development",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "ValueLabs is a global technology company that provides data, design, product development, and consulting services. They also offer business solutions, including information technology services and outsourcing. ",
    imgPath: "/images/value.png",
    logoPath: "/images/value1.png",
    title: "Technical Consultant",
    date: "Feb 2025 - Present",
    responsibilities: [
      " Building a website that transforms ideas into live, working code instantly—like magic for developers and dreamers alike.",
    ],
  },
  {
    review: "Trusted technology partner to over 300 clients globally.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/value1.png",
    title: "Technical Consultant Intern",
    date: "Aug 2024 - Feb 2025",
    responsibilities: [
      "Developed a Generative AI-powered web search platform using React and FastAPI, to provide real-time updates and validated sources to bridge knowledge gaps in LLMs.",
      "Created Aide StartUp Kit using React, FastAPI, and RAG, automating business research and reducing manual effort for sales teams by 85%, with tailored elevator pitches improving client engagement success rates.",
      "Built the Aide-Sales App in Flutter to enable seamless communication and real-time Q&A for enterprise clients, showcasing ValueLabs products and services.",
    ],
  },
  {
    review: "King Faisal University was founded in 1975 (1395H) by royal decree with main campus in the city of Hofuf in Al-Ahsa, Saudi Arabia.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/RI.png",
    title: "Research Internship",
    date: "Sept 2023 - Aug 2024",
    responsibilities: [
      "Designed a custom CNN-LSTM model for classifying Diabetic Foot Ulcer and Ischemia, achieving a 33% accuracy improvement through Elephant Herding Optimization, resulting in 88% accuracy for infection and 94% for ischemia.",
      "Benchmarked pretrained models (DenseNet, ResNet, MobileNetV2, etc.) against the custom CNN-LSTM and enhanced performance using advanced optimization techniques, achieving improved precision, recall, and F1-score while reducing overfitting.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/Villainc.svg",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Rehyann",
    mentions: "@rey",
    review:
      "Nivedita’s exceptional ability to convert complex project requirements into elegant, functional solutions has been truly impressive. Her expertise with React and FastAPI has revolutionized our digital strategy.",
    imgPath: "/images/alch.png",
  },
  {
    name: "Alchemy",
    mentions: "@Alc",
    review:
      "Working with Nivedita was a fantastic experience. She reinvented our outdated platform into a modern, user-centric solution, demonstrating remarkable attention to detail and innovation throughout the process.",
    imgPath: "/images/alch.png",
  },
  {
    name: "Nivi",
    mentions: "@fe13",
    review:
      "Collaborating with Nivedita was an absolute pleasure. Her dedication to excellence was evident in her work on the Aide-Sales App, where she streamlined enterprise communications using Flutter. She is a consummate professional.",
    imgPath: "/images/alch.png",
  },
  {
    name: "Saini",
    mentions: "@Saini",
    review:
      "Nivedita’s creative vision and technical precision have redefined our online presence. Leveraging generative AI and modern development frameworks, she transformed our platform into one that’s both intuitive and engaging.",
    imgPath: "/images/alch.png",
  },
  {
    name: "Rehyann Saini",
    mentions: "@rey",
    review:
      "I am genuinely impressed by Nivedita’s technical prowess and innovative approach. Her work on scalable solutions, including a Generative AI-powered web search platform, has significantly boosted our digital performance.",
    imgPath: "/images/alch.png",
  },
  {
    name: "Rehyann Saini",
    mentions: "@rey",
    review:
      "Nivedita consistently goes above and beyond to deliver exceptional results. Her deep understanding of both frontend and backend technologies has elevated our projects and exceeded our expectations.",
    imgPath: "/images/alch.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/heexhee12/",
  },
  
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://twitter.com/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/nivedita-k-3469b727a/",
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
