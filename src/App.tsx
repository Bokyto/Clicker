import React, { useState, useEffect } from 'react';
import ClickerButton from "./components/clickerButton/ClickerButton";
import ScoreDisplay from "./components/scoreDisplay/ScoreDisplay";
import EnergyDisplay from "./components/energyDisplay/EnergyDisplay";
import Upgrades from "./components/upgrades/Upgrades";
import EnergyRestore from "./components/energyRestore/EnergyRestore";
import ProgressBar from './components/progressBar/ProgressBar';
import './/App.css';
const App: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(100);
  const [autoClickerCount, setAutoClickerCount] = useState<number>(0);
  const [pointsPerClick, setPointsPerClick] = useState<number>(1);
  const [level, setLevel] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [maxProgress, setMaxProgress] = useState<number>(100);
  const [energyRestoreCost, setEnergyRestoreCost] = useState<number>(20);

  useEffect(() => {
    const interval = setInterval(() => {
      if (energy > 0) {
        setScore(prevScore => prevScore + autoClickerCount * pointsPerClick);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickerCount, pointsPerClick, energy]);

  const handleClick = () => {
    if (energy > 0) {
      setScore(prevScore => prevScore + pointsPerClick);
      setEnergy(prevEnergy => prevEnergy - 1);
      setProgress(prevProgress => prevProgress + pointsPerClick);
      checkLevelUp();
    }
  };

  const checkLevelUp = () => {
    if (progress >= maxProgress) {
      setLevel(prevLevel => prevLevel + 1);
      setProgress(0);
      setMaxProgress(prevMaxProgress => prevMaxProgress + 50);
      setPointsPerClick(prevPoints => prevPoints + 1);
      setEnergyRestoreCost(prevCost => prevCost + 10);
    }
  };

  const handleBuyAutoClicker = () => {
    if (score >= 10) {
      setScore(prevScore => prevScore - 10);
      setAutoClickerCount(prevCount => prevCount + 1);
    }
  };

  const handleBuyPointsPerClick = () => {
    if (score >= 5) {
      setScore(prevScore => prevScore - 5);
      setPointsPerClick(prevPoints => prevPoints + 1);
    }
  };

  const handleRestoreEnergy = () => {
    if (score >= energyRestoreCost) {
      setScore(prevScore => prevScore - energyRestoreCost);
      setEnergy(100);
    }
  };

  return (
    <div className='App'>
      <h1>Простой кликер</h1>
      <ScoreDisplay score={score} />
      <EnergyDisplay energy={energy} />
      <ProgressBar progress={progress} maxProgress={maxProgress} />
      <ClickerButton onClick={handleClick} />
      <Upgrades
        score={score}
        onBuyAutoClicker={handleBuyAutoClicker}
        onBuyPointsPerClick={handleBuyPointsPerClick}
      />
      <EnergyRestore score={score} onRestoreEnergy={handleRestoreEnergy} />
      <div>Уровень: {level}</div>
    </div>
  );
};

export default App;