import './Visualizer.css';
import SettingBar from './Components/SettingBar/SettingBar.js';

import bubbleSort from './SortingAlgorithms/bubbleSort.js';

import randomizeArray from './HelperFiles/randomizeArray';
import React, { useState } from 'react';

const Visualizer = () => {
  const defaultArraySize = 100;

  const [randomArray, setRandomArray] = useState(
    randomizeArray(defaultArraySize)
  );

  const [isRunning, setRunning] = useState(false);

  const generateArray = () => {
    const array = randomizeArray(randomArray.length);
    setRandomArray(array);
  };

  const changeArraySize = (value) => {
    if (!isRunning) {
      const arrayChange = randomizeArray(value);
      setRandomArray(arrayChange);
    }
  };

  const startSort = async () => {
    setRunning(true);
    await bubbleSort({ randomArray, setRandomArray });
    setRunning(false);
  };

  return (
    <>
      <SettingBar
        isRunning={isRunning}
        randomizeClicked={generateArray}
        startBubbleSort={startSort}
        changeArraySize={changeArraySize}
      ></SettingBar>
      <div className="bar-container">
        {randomArray.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Visualizer;
