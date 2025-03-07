import "./VideoBanner.scss";
import {ReactNode, useEffect, useState} from "react";

interface VideoBannerProps {
    children: ReactNode;
}

const VideoBanner = ({children}: VideoBannerProps) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVideoLoaded(true);
        }, 5000)
    },[])

    return (
        <div className="video-banner">
            {!isVideoLoaded && <div className="placeholder"/>}
            <iframe src={`https://player.vimeo.com/video/1062356706?autoplay=1&loop=1&muted=1&background=1`}
                title="Vimeo Background Video" frameBorder="0" allow="autoplay;" allowFullScreen>
            </iframe>
            <div className="overlay"></div>
            <div className="banner-content">
                {children}
            </div>
        </div>
    );
};

export default VideoBanner;