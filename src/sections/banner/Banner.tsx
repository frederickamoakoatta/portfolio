import "./Banner.scss";
import img from "../../assets/fred.jpeg"
import Button from "../../components/button/Button.tsx";

const Banner = () => {
    return (
        <>
            <div id="lead-content">
                <div className="avatar">
                    <img src={img} alt={'Frederick Amoako-Atta profile image'}/>
                </div>
                <h1>Frederick Amoako-Atta</h1>
                <p className="hero-subtitle">Frontend Javascript Engineer</p>
                <Button link={'#'} type={'secondary'} label={'Download Resume'}/>
            </div>
        </>
    )
}

export default Banner;