import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.svg";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import locoLogo from "../assets/loco-logo.png"
import acquiaLogo from "../assets/acquia-logo.png";
import accuknoxLogo from "../assets/accuknox-logo.png";
import nottinghamUniversityLogo from "../assets/nottingham-university-logo.png"

export const HERO_CONTENT = `I'm a self-taught programmer who discovered a passion for coding during the pandemic. What started as a way to pass time in quarantine quickly turned into a journey into backend engineering. I've had the privilege of working with several well-funded startups, where I gained hands-on experience in designing, building, and deploying cloud-based microservices from the ground up. Recently, I've ventured into frontend technologies and I'm enjoying the learning process. Currently, I'm pursuing a Master of Software Engineering at Western University, Ontario.`;

// export const EXPERIENCES = [
//     {
//         year: "2023 - 2024",
//         role: "Software Engineer - Observability",
//         company: "Acquia - PaaS Optimized for Drupal Applications",
//         description: `Collaborated with the Observability Team to automate log and metric collection in Kubernetes clusters and EC2 instances using open-source tools. Supported over 100,000 pods across 6,000+ customers in the Acquia cloud environment.
//                         Configured Prometheus scraping rules and developed custom processors for OpenTelemetry Collector to filter, mask, and process log messages and metrics. Proposed and implemented a high-availability design using new opentelemetry stack for metrics scraping, deployed across all clusters within two quarters.
//                         Led multiple quarterly epics for new features and upgrades, while recommending and executing software process improvements to enhance sprint productivity and meet OKR targets. Owned primary on-call responsibility for all observability components and maintained audit controls for compliance and security.`,
//         technologies: [ "AWS", "Golang", "Python", "OpenTelemtry", "Prometheus", "Docker", "Kubernetes", "Terraform", "ArgoCD", "SumoLogic", "NewRelic"],
//         logoURL: acquiaLogo,
//         companyURL: "https://acquia.com"
//     },
//     {
//         year: "2021 - 2023",
//         role: "Software Engineer - Backend",
//         company: "Loco.gg - Video Streaming Platform for Gamers",
//         description: `Loco, similar to Twitch, raised $50M in funding from seed and Series A rounds, backed by Hashed.
//                     Collaborated with the Backend Team, analyzing product requirements from Product Managers and developing key backend services. Led multiple 	services while working closely with the Data, Frontend, and Mobile Development teams. Reported directly to the CTO.
//                     Upgraded live-stream chat service by integrating Kubernetes jobs and implementing personalized chat configurations for streams. Migrated chat 	functionality from MQTT to API-based architecture, reducing downtime on the VerneMQ broker to near-zero.
//                     Developed and integrated features including replay chat, moderator configurations, real-time live view counts, and analytics pipelines.
//                     Designed and built backend systems for performance monitoring and automated payment cycles for streamers.
//                     Introduced leaderboard services to gamify user and streamer performance and arena game participation.
//                     Developed a near real-time personalized notification service via API, enabling dynamic notifications targeting users across the platform.
//                     Enhanced trending and search functionality using Algolia, improving search performance across the platform.
//                     Led the development of Loco's Web 3.0 project, building Web2 services for an NFT-based esports tournament platform. Managed onboarding, 	marketplace, tournament, rewards, and wallet features, with KYC automation and Bank/UPI payment integration. Integrated Algolia for 	marketplace search.`,
//         technologies: ["AWS", "K8s", "Docker", "Golang", "Typescript", "Python", "Lua", "Ansible", "DynamoDb", "PostgreSQL", "Redis", "Firestore", "Mqtt", "SQS", "S3"],
//         companyURL: "https://loco.gg/about",
//         logoURL: locoLogo

//     },
//     {
//         year: "2020 - 2021",
//         role: "Software Engineer",
//         company: "Accuknox - Zero Trust Cloud Security",
//         description: `AccuKnox collaborates with scientists from Stanford Research Institute International Incubator. Collaborated with the Core Backend Team, contributing to the development and enhancement of key platform features, including ML-based 	Anomaly Detection using Variational Autoencoder (VAE) and Container Security solutions. Developed and deployed API Manager microservice using Golang within a microservices architecture, deployed on Google Kubernetes Engine (GKE) to support platform features. Worked cross-functionally with other teams to define requirements, improve code quality, and streamline integrations for seamless functionality and product scalability. Conducted extensive testing and iterative improvements on core features, ensuring performance and reliability for enterprise-grade security solutions.`,
//         technologies: ["GCP", "Golang", "Python", "Docker", "Kubernetes", "Cilium", "Sysdig(ebpf)", "kafka", "Terraform", "GCS", "GRPC"],
//         companyURL: "https://accuknox.com",
//         logoURL: accuknoxLogo

//     },
//     {
//         year: "2019 - 2019",
//         role: "Research Intern",
//         company: "The University of Nottinghan - Ningbo Campus",
//         description: `Development of AI accelerated FPGA for Computer Vision Algorithm for Autonomous Vehicles. Successfully demonstrated YOLO object detection, Semantic Segmentation and Road lane detection onto CPU. Developed and Trained the Algorithm on cloud and Xilinx ZCU102 FPGA (Worked in Python).`,
//         technologies: ["Python", "CNN", "Computer Vison Algorithms", "Nimbix ", "FPGA"],
//         companyURL: "https://www.nottingham.edu.cn/en/science-engineering/departments-schools/eee/home.aspx",
//         logoURL: nottinghamUniversityLogo
//     },
// ];

export const EXPERIENCES = [
    {
        year: "2023 - 2024",
        role: "Software Engineer - Observability",
        company: "Acquia",
        description: `Collaborated with the Observability Team to automate log and metric collection across Kubernetes clusters and EC2 instances. Managed a large-scale observability environment with over 100,000 pods for 6,000+ customers. Designed and deployed a high-availability architecture for Prometheus and OpenTelemetry, ensuring reliable metrics scraping. Led multiple quarterly epics, improving system performance and sprint productivity, while maintaining audit controls for security compliance.`,
        technologies: ["AWS", "Golang", "Python", "OpenTelemetry", "Prometheus", "Docker", "Kubernetes", "Terraform", "ArgoCD", "SumoLogic", "NewRelic"],
        logoURL: acquiaLogo,
        companyURL: "https://acquia.com"
    },
    {
        year: "2021 - 2023",
        role: "Software Development Engineer - 1 - Backend",
        company: "Loco.gg",
        description: `Led backend services for Loco, a video streaming platform. Developed and integrated features such as personalized chat, real-time live view counts, and analytics pipelines to improve user experience. Migrated chat functionality from MQTT to an API-based architecture, reducing downtime and improving system reliability. Designed a personalized notification service and contributed to a Web 3.0 NFT-based project with nft marketplace, live points and tournaments updates, wallet integration and KYC automation.`,
        technologies: ["AWS", "Kubernetes", "Docker", "Golang", "Typescript", "Python", "Lua", "Ansible", "DynamoDb", "PostgreSQL", "Redis", "Firestore", "Mqtt", "SQS", "SNS", "Cloudwatch", "S3"],
        logoURL: locoLogo,
        companyURL: "https://loco.gg/about"
    },
    {
        year: "2020 - 2021",
        role: "Software Engineer",
        company: "AccuKnox",
        description: `Worked on core features for AccuKnox's zero-trust cloud security platform. Developed the API Manager microservice using Golang, deployed on Google Kubernetes Engine (GKE), improving platform performance. Contributed to machine learning-based anomaly detection using Variational Autoencoders (VAE) for container security. Ensured seamless integration across teams and conducted rigorous testing for reliability and scalability.`,
        technologies: ["GCP", "Golang", "Python", "Docker", "Kubernetes", "Cilium", "Sysdig", "Kafka", "Terraform", "GCS"],
        logoURL: accuknoxLogo,
        companyURL: "https://accuknox.com"
    },
    {
        year: "2019",
        role: "Research Intern",
        company: "University of Nottingham",
        description: `Developed AI-accelerated FPGA implementations for computer vision algorithms in autonomous vehicles. Successfully demonstrated YOLO object detection, semantic segmentation, and road lane detection on an FPGA. Trained and optimized the models in Python on cloud infrastructure and deployed them onto a Xilinx ZCU102 FPGA, enhancing computational efficiency for real-time object detection.`,
        technologies: ["Python", "CNN", "FPGA", "Nimbix"],
        logoURL: nottinghamUniversityLogo,
        companyURL: "https://www.nottingham.edu.cn/en/science-engineering/departments-schools/eee/home.aspx"
    }
];

export const PROJECTS = [
    {
        title: "Pulse Service",
        image: project1,
        description:
            "An easy to plug into your production service log aggregator. It aggregates user login/logout events via api and puts them to postgres for later analyses.",
        technologies: ["Golang", "Python", "Fluent-bit", "Redis Streams", "Postgresql"],
        projectLink: "https://github.com/vignesh-codes/project-pulse"
    },
    {
        title: "AIOps for Kubernetes - Won the Hackethon @ Acquia",
        image: project2,
        description:
            "Leveraged K8sGPT (CNCF open-source project) to provide useful insights from container logs and k8s events using OPENAI LLM. Created a k8s watcher script using golang to trigger vulnerability reports periodically and whenever new version application pods are deployed.",
        technologies: ["Kubernetes", "Docker", "AWS", "Trivy"],
        projectLink: "https://github.com/k8sgpt-ai/k8sgpt"
    },
    {
        title: "DevOps Pipeline Automation Service - In progress",
        image: project3,
        description:
            "A reliable 24/7 service that automates the deployment of applications to Kubernetes clusters. Allows users to track and manage microservices from the frontend. It uses ArgoCD for continuous deployment on IBM Cloud. It also includes a CI/CD pipeline using GitHub Actions and a monitoring dashboard using Grafana and Prometheus.",
        technologies: ["Golang", "Python", "Kubernetes", "Docker", "Github", "React", "ArgoCD", "IBM Cloud"],
        projectLink: "https://github.com/vignesh-codes"
    },
    {
        title: "Basic Ecommerce Site - In progress",
        image: project4,
        description:
            "As a part of grad course project, I aim to focus on my frontend skills by developing a fully functional ecommerce site selling laptops and accessories and get hands on with HTML and vanilla CSS. The site has user signup/login, product listing, cart, checkout, and order management features. It uses a microservices architecture and is built using React, Node.js, and MongoDB and deployed on AWS.",
        technologies: ["HTML", "CSS", "React", "MongoDB",  "Node.js", "AWS"],

        projectLink: "https://github.com/vignesh-codes"
    },
    // {
    //     title: "Blogging Platform",
    //     image: project4,
    //     description:
    //         "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    //     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    // },
];

export const CONTACT = {
    address: "Western University - Residence, 1151 Richmond Street, London, ON, N6A 3K7",
    email: "me@example.com",
};