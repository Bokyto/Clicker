import React from "react";

interface EnergyRestoreProps {
  score: number;
  onRestoreEnergy: () => void;
}

const EnergyRestore: React.FC<EnergyRestoreProps> = ({
  score,
  onRestoreEnergy,
}) => {
  return (
    <div>
      <button onClick={onRestoreEnergy} disabled={score < 20}>
        Востановить Энергию (20 очков)
      </button>
    </div>
  );
};

export default EnergyRestore;
