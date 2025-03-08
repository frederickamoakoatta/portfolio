import "./Header.scss";
import { Link } from "react-scroll";

const Header = () => {

    return (
        <>
            <header>
                <ul id="menu">
                    <li>
                        <Link className="link" to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link className="link" to="experience" smooth={true} duration={500}>Experience</Link>
                    </li>
                    <li>
                        <Link className="link" to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>

                    <li>
                        <Link className="link" to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header;