import { useNavigate } from "@remix-run/react";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    className: string;
    icon?: boolean;
    label: string;
    disabled?: boolean;
    onClick?: () => void;
    url?: string;
}

export default function ButtonPage({ type, className, icon, label, disabled, onClick, url }: ButtonProps) {
    const combinedClassName = `${className} common-cta`;
    const navigate = useNavigate();

    const handleClick = async () => {
        if (onClick) {
            await onClick();
        }

        if (url) {
            navigate(`${url}`);
        }
    };

    return (
        <button type={type} className={combinedClassName} disabled={disabled} onClick={handleClick}>
            {label} {icon && <span className='icon-arrow-right'></span>}
        </button>
    );
}

