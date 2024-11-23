import React from "react";

interface EnergyDisplayProps {
    energy: number;
}

const EnergyDisplay: React.FC<EnergyDisplayProps> = ({energy}) => {
    return(
        <div>
            Энергия: {energy}
        </div>
    );
};

export default EnergyDisplay;