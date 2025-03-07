import { useState } from "react";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div id="mobile-menu-open" className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
                <FaBars aria-hidden="true" />
            </div>
            <header className={isMenuOpen ? "open" : ""}>
                <div id="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
                    <span>Close</span> <FaTimes aria-hidden="true" />
                </div>
                <ul id="menu">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="#education">Education</a>*/}
                    {/*</li>*/}
                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header;