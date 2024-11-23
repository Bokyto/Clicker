import React from "react";

interface ScoreDisplayProps {
    score: number;
}

const ScoreDisplay:  React.FC<ScoreDisplayProps> = ({ score }) => {
    return(
        <div>
            Очки: {score}
        </div>
    );
};

export default ScoreDisplay;