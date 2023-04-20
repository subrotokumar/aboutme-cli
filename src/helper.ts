type SkillSet = {
    category: String
    skills: string[]
}

type EducationHistory = {
    name: string;
    location: string;
    degree: string;
    duration: string;
    grade: string;
}

const help: string[][] = [
    ['about', 'About Subroto?'],
    // ['experience', 'View background background'],
    ['education', 'View educational background'],
    ['projects', 'View coding projects'],
    ['skills', 'Display my current skillset'],
    ['social', 'Display social networks'],
    // ['secret', 'Find the password'],
    ['history', 'View command history'],
    ['help', 'You obviously already know what this does'],
    ['email', 'Do not email me'],
    ['clear', 'Clear terminal'],
    ['banner', 'Display the header'],
    ['resume', 'Download Subroto\'s resume']
];

const social: string[][] = [
    ['Website', 'https://subrotokumar.com'],
    ['Github', 'https://github.com/subrotokumar'],
    ['Linkedin', 'https://www.linkedin.com/in/kumarsubroto'],
    ['Twitter', 'https://twitter.com/isubroto'],
    ['Blog', 'https://subrotokumar.me'],
];

const skills: SkillSet[] = [
    {
        category: 'Programming',
        skills: ['Java', 'JavaScript', 'Dart', 'Solidity', 'SQL']
    },
    {
        category: 'Mobile',
        skills: []
    },
    {
        category: '├── Flutter',
        skills: [
            'Dart', 'Flutter', 'Riverpod', 'Provider'
        ],
    },
    {
        category: '├── Tools',
        skills: [
            'Appwrite', 'Firebase', 'Android Studio'
        ],
    },
    {
        category: 'Web Dev',
        skills: ['']
    },
    {
        category: '├── Frontend',
        skills: ['HTML5', 'CSS3', 'REACT', 'Next.js']
    },
    {
        category: '└── Beckend',
        skills: ['Node', 'Express', 'MongoDB', 'REST API', 'GraphQL']
    }, {
        category: 'Blockchain',
        skills: ['Solidity', 'Hardhat', 'Wagmi']
    }, {
        category: 'Other',
        skills: ['Git/GitHub', 'Postgres', 'Linux']
    }, {
        category: 'Soft Skills',
        skills: ['Problem Solving', 'Collaboration']
    }
]

const education: EducationHistory[] = [
    {
        name: 'Haldia Institute of Technology',
        location: 'Haldia, WB',
        degree: 'BTech in Electronics and Communication Enginering',
        duration: 'August, 2019 - July, 2023',
        grade: '9.0 GPA'
    },
    {
        name: 'De Nobili School - CMRI',
        location: 'Dhanbad, JH',
        degree: '12th ISC - PCM with Computer Science',
        duration: 'April, 2016 - March, 2018',
        grade: '88%'
    },
]

const about = ["Engineering student With a strong background in defining requirements and implementing complex applications using various programming languages and technologies, I am eager to take on new challenges and expand my skillset.",
    "My expertise includes building smart contracts and decentralized applications for Ethereum and other EVM- compatible chains, as well as developing cross - platform apps for mobile platforms using Flutter.I am highly skilled in Java, Javascript, Mobile Application Development (Android / iOS), Blockchain, Smart Contracts, and Database with Postgres.",
    "In addition to my technical abilities, I am always exploring new technologies and staying up - to - date on the latest trends in the tech industry.I am also an avid reader of light novels, which helps me stay creative and imaginative."]

export {
    help,
    social, skills, education,
    about
};
export type { SkillSet, EducationHistory };
