import "./Header.scss";

const Header = () => {

    return (
        <>
            <header>
                <ul id="menu">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
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