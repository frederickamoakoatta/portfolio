import "./Contact.scss";
import Button from "../../components/button/Button.tsx";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact">
            <div className="overlay"></div>
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p className="contact-note">Let's connect! Feel free to reach out via email or follow me on GitHub and
                    LinkedIn.</p>

                <div className="contact-links">
                    <Button link={'mailto:your.email@example.com'} type={'secondary'}
                            label={<span className="contact-item"><FaEnvelope
                                className="icon"/> amoakofredatta@gmail.com</span>}/>
                    <Button link={'https://github.com/frederickamoakoatta'} type={'secondary'}
                            label={<span className="contact-item"><FaGithub
                                className="icon"/> github.com/frederickamoakoatta</span>}/>
                    <Button link={'https://www.linkedin.com/in/frederick-amoako-atta-8097a0158/'} type={'secondary'}
                            label={<span className="contact-item"><FaLinkedin className="icon"/> linkedin.com/in/frederick-amoako-atta</span>}/>
                </div>
            </div>
        </section>
    );
};

export default Contact;
