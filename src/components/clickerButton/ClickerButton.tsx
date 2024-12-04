import React from "react";
import './ClickerButton.css';
interface ClickerButtonProps {
    onClick : () => void; 
    className?: string; 
};

const ClickerButton: React.FC<ClickerButtonProps> = ({onClick}) => {
    return(
        <button onClick={onClick}>
            Нажимай
        </button>
    );
};

export default ClickerButton;
