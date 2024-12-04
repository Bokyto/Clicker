import React from 'react';

interface UpgradeProps {
  score: number;
  onBuyAutoClicker: () => void;
  onBuyPointsPerClick: () => void;
  onBuyEnergyUpgrade: () => void;
  onBuyLevel: () => void;
  levelCost: number;
}

const Upgrades: React.FC<UpgradeProps> = ({ score, onBuyAutoClicker, onBuyPointsPerClick, onBuyEnergyUpgrade, onBuyLevel, levelCost }) => {
  return (
    <div>
      <h2>Магазин улучшений</h2>
      <button onClick={onBuyAutoClicker} disabled={score < 10}>
        Купить автокликер (10 очков)
      </button>
      <button onClick={onBuyPointsPerClick} disabled={score < 5}>
        Увеличить очки за клик (5 очков)
      </button>
      <button onClick={onBuyEnergyUpgrade} disabled={score < 50}>
        Увеличить максимальную энергию (50 очков)
      </button>
      <button onClick={onBuyLevel} disabled={score < levelCost}>
        Купить уровень ({levelCost} очков)
      </button>
    </div>
  );
};

export default Upgrades;