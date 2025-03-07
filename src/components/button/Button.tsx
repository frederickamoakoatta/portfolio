import {Link} from "react-router-dom";
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
            <Link to={link} className={type === 'primary'? `btn-rounded-primary` : `btn-rounded-white`}>{label}</Link>
        </>
    )
}
export default Button;