import './App.scss'
import Header from "./components/header/Header.tsx";
import Banner from "./sections/banner/Banner.tsx";
import VideoBanner from "./sections/video-banner/VideoBanner.tsx";
import AboutMe from "./sections/about/About.tsx";
import Experience from "./sections/experience/Experience.tsx";
import Projects from "./sections/projects/Projects.tsx";
import Contact from "./sections/contact/Contact.tsx";

function App() {

    return (
        <>
            <Header/>
            <VideoBanner>
                <Banner/>
            </VideoBanner>
            <AboutMe/>

            <Experience/>

            <Projects/>
            <Contact/>
        </>
    )
}

export default App
