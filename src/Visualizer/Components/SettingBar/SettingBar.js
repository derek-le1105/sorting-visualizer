import { useState } from 'react';
import './SettingBar.css';

const SettingBar = ({
  isRunning,
  randomizeClicked,
  startBubbleSort,
  changeArraySize,
}) => {
  const changeSize = (e) => {
    changeArraySize(parseInt(e.target.value));
  };

  return (
    <>
      <div className="setting-bar">
        <button onClick={randomizeClicked}>Randomize Array</button>
        <input
          disabled={isRunning}
          type="range"
          id="sizeSlider"
          onChange={changeSize}
          min={5}
          max={200}
        ></input>

        <button onClick={startBubbleSort}>Bubble Sort</button>
      </div>
    </>
  );
};

export default SettingBar;
