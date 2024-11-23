import React from "react";

interface ClickerButtonProps {
    onClick : () => void;
};

const ClickerButton: React.FC<ClickerButtonProps> = ({onClick}) => {
    return(
        <button onClick={onClick}>
            Нажимай
        </button>
    );
};

export default ClickerButton;
