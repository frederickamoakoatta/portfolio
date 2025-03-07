import "./About.scss";
import jsLogo from "../../assets/javascript.svg";
import reactLogo from "../../assets/react.svg";
import tsLogo from "../../assets/typescript.svg";
import expressLogo from "../../assets/express.svg";
import npmLogo from "../../assets/npm.svg";
import awsLogo from "../../assets/aws.svg";
import figmaLogo from "../../assets/figma.svg";
import Badge from "../../components/badge/Badge.tsx";


const skills = [
    {id: 1, name: "JavaScript", logo: jsLogo},
    {id: 2, name: "React", logo: reactLogo},
    {id: 3, name: "TypeScript", logo: tsLogo},
    {id: 4, name: "Express JS", logo: expressLogo},
    {id: 5, name: "npm", logo: npmLogo},
    {id: 6, name: "AWS", logo: awsLogo},
    {id: 7, name: "Figma", logo: figmaLogo},
];

const AboutMe = () => {
    return (
        <section className="about-me main-spacing">
            <h2>About Me</h2>
            <p>
                I'm a design-driven Front-End Developer with AWS Cloud Certification and a UI Design Certification from
                Lasting Dynamics. With over four years of experience in software development, I specialize in building
                responsive designs, enhancing accessibility, and creating visually appealing user experiences.
            </p>
            <div className="skills">
                {skills.map((skill) => (
                    <Badge key={skill.id} hasIcon={true} logo={skill.logo} name={skill.name}/>
                ))}
            </div>
        </section>
    );
};

export default AboutMe;