import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './SettingBar.css';
import AlgorithmDropDown from '../AlgorithmDropDown/AlgorithmDropDown';
import Slider from './Slider';

const SettingBar = ({
  isRunning,
  randomizeClicked,
  algorithm,
  setAlgorithm,
  startSort,
  changeArraySize,
  changeSortSpeed,
}) => {
  return (
    <>
      <div className="setting-bar">
        <button onClick={randomizeClicked}>Randomize Array</button>
        <Slider
          isRunning={isRunning}
          text={'Array Size'}
          id={'sizeSlider'}
          onSlide={changeArraySize}
          min={5}
          max={200}
          defaultValue={100}
        ></Slider>
        <AlgorithmDropDown
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
        ></AlgorithmDropDown>
        <Slider
          isRunning={isRunning}
          text={'Sort Speed'}
          id={'speedSlider'}
          onSlide={changeSortSpeed}
          min={0}
          max={100}
          defaultValue={50}
        ></Slider>

        <button onClick={startSort}>Start</button>
      </div>
    </>
  );
};

export default SettingBar;
