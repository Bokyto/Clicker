import React from 'react';

interface ProgressBarProps {
  progress: number;
  maxProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, maxProgress }) => {
  const width = (progress / maxProgress) * 100;

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', margin: '10px 0' }}>
      <div style={{ width: `${width}%`, height: '20px', backgroundColor: '#4caf50', borderRadius: '5px' }}></div>
    </div>
  );
};

export default ProgressBar;