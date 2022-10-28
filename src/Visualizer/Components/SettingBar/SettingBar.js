import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './SettingBar.css';
import AlgorithmDropDown from '../AlgorithmDropDown/AlgorithmDropDown';

const SettingBar = ({
  isRunning,
  randomizeClicked,
  setAlgorithm,
  startSort,
  changeArraySize,
  changeSortSpeed,
  pauseSort,
}) => {
  const [playPressed, setPlayPressed] = useState(false);

  const changeSize = (e) => {
    changeArraySize(parseInt(e.target.value));
  };

  const changeSpeed = (e) => {
    changeSortSpeed(parseInt(e.target.value));
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
        <AlgorithmDropDown setAlgorithm={setAlgorithm}></AlgorithmDropDown>
        <input
          disabled={isRunning}
          type="range"
          id="speedSlider"
          onChange={changeSpeed}
          min={5}
          max={5000}
        ></input>

        <button onClick={startSort}>Start</button>
        <button onClick={pauseSort}>Pause</button>
      </div>
    </>
  );
};

export default SettingBar;
