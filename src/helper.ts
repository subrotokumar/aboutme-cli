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
    ['Website', 'https://subrotokumar.dev'],
    ['Github', 'https://github.com/subrotokumar'],
    ['Linkedin', 'https://www.linkedin.com/in/kumarsubroto'],
    ['Twitter', 'https://twitter.com/isubrotokumar'],
    ['Blog', 'https://blog.subrotokumar.dev'],
];

const skills: SkillSet[] = [
    {
        category: 'Programming',
        skills: ['Java', 'Go' , 'JavaScript', 'Typescript', 'Dart', 'SQL']
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
        category: '├── Concepts',
        skills: [ 'Monoliths','Microservices', "Event-Driven System", "System Design"]
    }, 
    {
        category: '├── Beckend',
        skills: [ "REST API", "GraphQL", "gRPC", "WebSocket"],
    }, 
    {
        category: '├── Frameworks',
        skills: [ "Spring", "Gin/Echo/Fiber", "Express", "Nest.JS", "FastAPI"],
    }, 
    {
        category: '├── Databases',
        skills: ['Postgres', "MongoDB"]
    }, 
    {
        category: '├── Message Broker',
        skills: ["RabbitMQ", "Kafka", "Redis"]
    }, 
    {
        category: '└── Frontend',
        skills: ['React', 'Next.js']
    },
    {
        category: 'Blockchain',
        skills: ['Solidity', 'Hardhat', 'Wagmi']
    }, 
    {
        category: 'Other',
        skills: ['Git/GitHub', 'Ngnix', 'Linux',"AWS", "Docker", "CI/CD"]
    }, 
]

const education: EducationHistory[] = [
    {
        name: 'Haldia Institute of Technology',
        location: 'Haldia, WB',
        degree: 'BTech in Electronics and Communication Enginering',
        duration: 'August, 2019 - July, 2023',
        grade: '8.9 GPA'
    },
    {
        name: 'De Nobili School - CMRI',
        location: 'Dhanbad, JH',
        degree: '12th ISC - PCM with Computer Science',
        duration: 'April, 2016 - March, 2018',
        grade: '88%'
    },
]

const about = [
    "Hi, I'm Subroto Kumar 👾",
    "As a Software Engineer, I'm deeply obsessed about achieving perfect balance between functionality and design.\nMy journey has been about taking complex problems—whether it's building resilient backend systems, optimizing microservices, or designing sleek front-end interfaces—and turning them into solutions that feel effortless for users. From scaling distributed architectures on cloud to integrating blockchain solutions and crafting mobile apps with Flutter, I’ve always found my flow where creativity intersects with clean, efficient code.",
    "My goal? To build experiences that not only work flawlessly but also leave a lasting impression.",


    "Stuck on a tricky bug? Let’s tackle it together! Every technical challenge is like a puzzle—whether it’s debugging tricky performance bottlenecks, optimizing APIs, or handling real-time data. My approach is rooted in problem-solving, breaking down complex issues and turning them into streamlined, maintainable solutions. I enjoy diving into the code, understanding the underlying architecture, and crafting something that not only function seamlessly but also resonate with users and inspire fellow developers."
]

export {
    help,
    social, skills, education,
    about
};
export type { SkillSet, EducationHistory };
