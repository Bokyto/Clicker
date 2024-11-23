import React from "react";

interface UpgradeProps {
  score: number;
  onBuyAutoClicker: () => void;
  onBuyPointsPerClick: () => void;
}

const Upgrade: React.FC<UpgradeProps> = ({
  score,
  onBuyAutoClicker,
  onBuyPointsPerClick,
}) => {
  return (
    <div>
      <button onClick={onBuyAutoClicker} disabled={score < 10}>
        Купить автокликер (10 очков)
      </button>
      <button onClick={onBuyPointsPerClick} disabled={score < 5}>
        Увеличить очки за клик (5 очков)
      </button>
    </div>
  );
};

export default Upgrade;
