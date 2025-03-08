import React from "react";
import "./Projects.scss";
import Button from "../../components/button/Button.tsx";
import Badge from "../../components/badge/Badge.tsx";

// Project data type
interface Project {
    id: number;
    name: string;
    description: string;
    liveUrl: string;
    githubUrl: string;
    technologies: string[];
}

// Sample project data
const projects: Project[] = [
    // {
    //     id: 1,
    //     name: "Minilink",
    //     description: "I developed a Chrome plugin that automatically shortens URLs detected on an active page. This project was built using React and deployed through the Chrome Web Store for seamless distribution.",
    //     liveUrl: "",
    //     githubUrl: "",
    //     technologies: ["React", "Typescript", "React Query", "RTL", "Chrome Store"],
    // },
    {
        id: 2,
        name: "ReadMe Generator",
        description: "I developed an NPM plugin to generate well-structured README documentation for my projects based on a prompt. This project involved working with TypeScript, NPM CLI development, and Google’s Gemini AI to automate and streamline documentation creation.",
        liveUrl: "https://www.npmjs.com/package/@freddycodes/readme_generator",
        githubUrl: "https://github.com/frederickamoakoatta/readme-generator",
        technologies: ["Typescript", "Node", "npm", "Google Gemini"],
    },
    {
        id: 3,
        name: "React Playground",
        description: "Playground is a collection of UI concepts I built to showcase my React development skills, focusing on accessible and responsive design. I also explored global state management and used Storybook to test components at an atomic level for consistency and reusability.",
        liveUrl: "https://playground-nu-brown.vercel.app/",
        githubUrl: "https://github.com/frederickamoakoatta/playground",
        technologies: ["React", "Storybook", "SCSS", 'React Testing Library', 'Jest'],
    },
    {
        id: 4,
        name: "Todo Portal",
        description: "I developed a portal for users to register and obtain access tokens to test my open-source To-Do API service. This project was built using React and integrated with AWS Cognito for authentication and user management.",
        liveUrl: "https://todo-portal.vercel.app/",
        githubUrl: "https://github.com/frederickamoakoatta/todo_portal",
        technologies: ["React", "AWS Cognito", "React Query", "Tailwind CSS"],
    },
    {
        id: 5,
        name: "Todo API Service",
        description: "I developed an open-source API service designed for frontend developers who are new to API integration. This project was built using Express.js and integrated with AWS services like Parameter Store for configuration management, DynamoDB for data storage, and CloudWatch for monitoring.",
        liveUrl: "https://documenter.getpostman.com/view/14396709/2sAYdcrXVG",
        githubUrl: "https://github.com/frederickamoakoatta/todo_service",
        technologies: ["Express JS", "Cloudwatch", "Dynamo DB", "Parameter Store"],
    },
];

const Projects: React.FC = () => {
    return (
        <section className="project-container main-spacing" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.name}</h3>
                        <p className="description">{project.description}</p>
                        <div className="links">
                            <Button link={project.liveUrl} type={'primary'} label={'Live Demo'}/>
                            <Button link={project.githubUrl} type={'primary'} label={'GitHub Repo'}/>
                        </div>
                        <div className="technologies">
                            {project.technologies.map((tech) => (
                                <Badge key={`${project.id}-${tech}`} hasIcon={false} name={tech}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
