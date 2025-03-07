import "./Badge.scss";

interface BadgeProps {
    logo? : string,
    name? : string,
    hasIcon : boolean,
}

const Badge = ({logo, name, hasIcon} : BadgeProps) => {
    return (
        <>
             <span className={hasIcon ? `badge` : `badge-text-only`}>
            { hasIcon && <img src={logo} alt={name}/> }
                 {name}
          </span>
        </>
    )
}
export default Badge;