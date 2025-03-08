import "./Button.scss"
import {ReactNode} from "react";

interface BtnProps {
    link: string;
    type: 'primary' | 'secondary';
    label: ReactNode;
}

const Button = ({link, type, label} : BtnProps) => {
    return(
        <>
            <a href={link} className={type === 'primary'? `btn-rounded-primary` : `btn-rounded-white`} target="_blank">{label}</a>
        </>
    )
}

// const DownloadButton = ({link, label} : BtnProps) => {
//     return(
//         <>
//             <a href={link} className="btn-rounded-white" target="_blank" download={'FrederickAmoakoAtta-CV.pdf'}>{label}</a>
//         </>
//     )
// }

export default Button;