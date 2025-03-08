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
            <a href={link} className={type === 'primary'? `btn-rounded-primary` : `btn-rounded-white`}>{label}</a>
        </>
    )
}
export default Button;