import React from "react";
import "./Experience.scss";
import npontu from "../../assets/npontu-logo.png";
import itc from "../../assets/it_consortium-logo.jpeg";
import ld from "../../assets/lasting_dynamics-logo.jpeg";
import Badge from "../../components/badge/Badge.tsx";


interface ExperienceItem {
    id: number;
    title: string;
    company: string;
    employmentType: string;
    duration: string;
    location: string;
    description: string;
    skills: string[];
    logo: string;
}


const experiences: Array<ExperienceItem> = [
    {
        id: 1,
        title: "UI Designer",
        company: "Lasting Dynamics",
        employmentType: "Full-time",
        duration: "Sep 2023 - Dec 2024",
        location: "Canary Islands, Spain · Remote",
        description: "I worked as a UI Designer on a cloud-focused platform, creating user flows and high-fidelity mockups. I collaborated with stakeholders to ensure intuitive and visually appealing designs meet customer expectations. Additionally, I contributed to developing new pages for the company's existing website. I worked extensively with Figma and personally explored plugin development in Figma as well.",
        skills: ["Figma", "JavaScript"],
        logo: ld,
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "IT Consortium",
        employmentType: "Full-time",
        duration: "Sep 2021 - Feb 2023",
        location: "East Legon, Accra",
        description: "I built and maintained a centralized portal for around 250 merchants to generate reports and track invoices. I worked extensively with React.js for the frontend and Lumen for the backend. Additionally, I integrated AWS services such as CloudWatch for monitoring and Simple Email Service (SES) for notifications. This experience enhanced my skills in building scalable and efficient web applications.",
        skills: ["React.js", "TypeScript", "AWS" ,"API Integration"],
        logo: itc,
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "Npontu Technologies Limited",
        employmentType: "Full-time",
        duration: "Jun 2018 - Jul 2020",
        location: "La, Accra",
        description: "I developed web templates for an enterprise Bulk SMS application within Laravel. This role provided hands-on experience in Laravel web development. I also worked extensively with pure JavaScript and jQuery to enhance frontend functionality. This experience strengthened my proficiency in HTML, SCSS as well.",
        skills: ["HTML5" , "jQuery", "SCSS"],
        logo: npontu,
    },
];

const Experience: React.FC = () => {
    return (
        <section className="experience main-spacing" id="experience">
            <h2 className="section-title">Work Experience</h2>
            {experiences.map((exp) => (
                <div className="experience-card" key={exp.id}>
                    <img src={exp.logo} alt={exp.company} className="company-logo"/>
                    <div className="experience-details">
                        <h3>{exp.title}</h3>
                        <p className="company">
                            {exp.company}
                        </p>
                        <p className="duration">{exp.duration}</p>
                        <p className="location">{exp.location}</p>
                        <p className="description">{exp.description}</p>
                        <div className="skills">
                            {exp.skills.map((skill) => (
                                <Badge key={`${exp.id}-${skill}`} hasIcon={false} name={skill}/>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
