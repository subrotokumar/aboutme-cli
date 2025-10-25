type SkillSet = {
    category: string;
    skills: string[];
};

type EducationHistory = {
    name: string;
    location: string;
    degree: string;
    duration: string;
    grade: string;
};

type Experience = {
    company: string;
    role: string;
    location: string;
    duration: string;
    responsibilities: string[];
};

type Project = {
    name: string;
    description: string;
    techStack: string[];
    links?: string[];
};

const help: string[][] = [
    ['about', 'About Subroto?'],
    ['resume', "Download Subroto's resume"],
    ['experience', 'View background experience'],
    ['skill', 'Display my current skillset'],
    ['education', 'View educational background'],
    ['email', 'Do not email me'],
    ['social', 'Display social networks'],
    ['history', 'View command history'],
    ['help', 'You obviously already know what this does'],
    ['clear', 'Clear terminal'],
    ['banner', 'Display the header'],
];

const social: string[][] = [
    ['Website', 'https://subrotokumar.dev'],
    ['Github', 'https://github.com/subrotokumar'],
    ['Linkedin', 'https://linkedin.com/in/kumarsubroto'],
    ['X (Twitter)', 'https://x.com/isubrotokumar'],
    ['Blog', 'https://blog.subrotokumar.dev']
];

const skills: SkillSet[] = [
    { category: 'Languages', skills: ['Go', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Dart', 'SQL'] },
    { category: 'Web Dev', skills: [] },
    { category: '├── Concepts', skills: ['Monoliths', 'Microservices', 'Event-Driven System', 'System Design'] },
    { category: '├── Backend', skills: ['REST API', 'GraphQL', 'gRPC', 'WebSocket'] },
    { category: '├── Frameworks', skills: ['Spring Boot', 'FastAPI', 'Gin/Echo/Fiber', 'Express', 'NestJS'] },
    { category: '├── Databases', skills: ['Postgres', 'MongoDB', 'TimescaleDB'] },
    { category: '├── Message Broker', skills: ['RabbitMQ', 'Kafka', 'Redis'] },
    { category: '└── Frontend', skills: ['React', 'Next.js'] },
    { category: 'Cloud / DevOps', skills: ['AWS', 'Azure', 'Kubernetes (AKS, EKS, GKE)', 'Docker', 'Nginx', 'Jenkins', 'GitLab CI/CD', 'Linux'] },
    { category: 'Mobile', skills: [] },
    { category: '├── Flutter', skills: ['Dart', 'Flutter', 'Riverpod', 'Provider'] },
    { category: '├── Tools', skills: ['Appwrite', 'Firebase', 'Android Studio'] },
    { category: 'GenAI', skills: ['LangChain', 'LangGraph', 'RAG', 'AI Agents', 'Google ADK', 'Ollama', 'Bedrock', 'Azure OpenAI'] },
    { category: 'Other', skills: ['Git/GitHub', 'CI/CD'] }
];

const education: EducationHistory[] = [
    { name: 'Haldia Institute of Technology', location: 'Haldia, WB', degree: 'B.Tech in Electronics and Communication Engineering', duration: 'August 2019 - July 2023', grade: '8.98 CGPA' },
    { name: 'De Nobili School - CMRI', location: 'Dhanbad, JH', degree: '12th ISC - PCM with Computer Science', duration: 'April 2016 - March 2018', grade: '88%' }
];

const about = [
    "I build systems that just work — even when no one’s watching.",
    "As a Software Engineer with a focus on Backend, Cloud / DevOps, and AI-powered systems, I specialize in designing distributed architectures, automating infrastructure, and making complex systems resilient, scalable, and maintainable. My work spans from high-throughput event-driven microservices to LLM-powered business intelligence, always with an eye on efficiency, reliability, and elegance.",
    "Over the years, I’ve delivered production-grade solutions that scale to thousands of users daily, keeping CI/CD pipelines smooth, Kubernetes clusters stable, and production incidents minimal. I thrive on debugging the hard problems that others avoid and turning them into clean, reliable systems.",
    "My toolkit is diverse and adaptive, with a focus on Go, Java, Python, TypeScript, and frameworks like Spring Boot, FastAPI, alongside Postgres, TimescaleDB, Docker, Kubernetes, Kafka, Redis. On the AI frontier, I’ve integrated RAG systems, LangChain, LangGraph, and generative AI agents into production, making data-driven workflows faster, smarter, and safer.",
    "Beyond tech, I enjoy solving problems that combine systems thinking with hands-on engineering — whether optimizing memory usage in containers, scaling vector search backends, or streamlining complex workflows."
];

const experience: Experience[] = [
    {
        company: 'Capgemini',
        role: 'Senior Software Engineer',
        location: 'Mumbai',
        duration: 'March 2024 – Present',
        responsibilities: [
            'Engineered Spring Boot–Kafka event-driven microservices for 3000+ service desk agents',
            'Reduced manual workload by 60% and improving task allocation by 40%.',
            'Delivered enterprise-grade Kubernetes deployment using Helm & ArgoCD, with GitLab pipelines for automated builds, security and quality checks.',
            'Developed Agentic AI Business Analyst leveraging LangChain & LangGraph, enabling autonomous decision-making workflows with 3× faster insights.',
            'Built high-performance RAG backend with PGVector, improving vector search latency by 40% and supporting 10k+ daily users.'
        ]
    },
    {
        company: 'LTI Mindtree',
        role: 'Graduate Engineer Trainee Intern',
        location: 'Remote',
        duration: 'August 2023 – October 2023',
        responsibilities: [
            'Gained expertise in Java, AWS (S3, RDS, EC2, IAM, Billing), Terraform, DBMS, and Linux.',
            'Completed Ignite Cloud Technology track with 86% score, gaining practical cloud infrastructure experience.'
        ]
    },
    {
        company: 'Ridobiko',
        role: 'Flutter Developer Intern',
        location: 'Gurugram',
        duration: 'November 2022 – April 2023',
        responsibilities: [
            'Integrated DigiLocker for e-KYC with Flutter, OAuth 2.0, REST API.',
            'Refactored app codebase, improving performance by 20% and reducing size by 15%.'
        ]
    }
];

const projects: Project[] = [
    {
        name: 'Rover: In-Memory Store',
        description: 'High-performance RESP-compatible key-value store using Go concurrency.',
        techStack: ['Go', 'Redis', 'Concurrency', 'Data Structures'],
        links: ['https://github.com/subrotokumar/rover', 'https://hub.docker.com/r/subrotokumar/rover']
    },
    {
        name: 'Kurumi: Anilist Client',
        description: 'Flutter anime & manga tracker app with GraphQL API, caching, and synchronization.',
        techStack: ['Dart', 'Flutter', 'GraphQL', 'Riverpod', 'Ferry'],
        links: ['https://github.com/subrotokumar/kurumi', 'https://play.google.com/store/apps/details?id=com.kurumi']
    },
    {
        name: 'Comet: Cryptocurrency Wallet',
        description: 'Flutter-based wallet for Ethereum-compatible chains with ERC20/ERC721 support.',
        techStack: ['Flutter', 'Solidity', 'Web3Dart', 'Hardhat', 'ERC20', 'ERC721'],
        links: ['https://github.com/subrotokumar/comet']
    }
];

export {
    help,
    social,
    skills,
    education,
    about,
    experience,
    projects
};
export type { SkillSet, EducationHistory, Experience, Project };
