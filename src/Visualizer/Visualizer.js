import './Visualizer.css';
import SettingBar from './Components/SettingBar/SettingBar.js';

import bubbleSort from './SortingAlgorithms/bubbleSort.js';
import mergeSort from './SortingAlgorithms/mergeSort';
import selectionSort from './SortingAlgorithms/selectionSort';
import quickSort from './SortingAlgorithms/quickSort';

import randomizeArray from './HelperFiles/randomizeArray';
import React, { useState } from 'react';

const Visualizer = () => {
  const defaultArraySize = 100;

  const [randomArray, setRandomArray] = useState(
    randomizeArray(defaultArraySize)
  );

  const [sortSpeed, setSortSpeed] = useState(50);
  const [algorithm, setAlgorithm] = useState('Algorithm');
  const [arrayComparisons, setArrayComparisons] = useState(0);
  const [isRunning, setRunning] = useState(false);

  const generateArray = () => {
    const array = randomizeArray(randomArray.length);
    for (let i = 0; i < array.length; i++) {
      let bar = document.getElementById(`bar-${i}`);
      bar.style.backgroundColor = '#C9B79C';
    }

    setRandomArray(array);
  };

  const changeArraySize = (value) => {
    if (!isRunning) {
      const arrayChange = randomizeArray(value);
      setRandomArray(arrayChange);
    }
  };

  const changeSortSpeed = (value) => {
    setSortSpeed(value);
  };

  const startSort = async () => {
    if (isRunning) return;
    setRunning(true);
    switch (algorithm) {
      case 'Algorithm':
        alert('Please select a sorting algorithm in the dropdown below');
        break;
      case 'Bubble Sort':
        await bubbleSort({
          randomArray,
          setRandomArray,
          sortSpeed,
          setArrayComparisons,
        });
        break;

      case 'Merge Sort':
        await mergeSort({
          randomArray,
          setRandomArray,
          sortSpeed,
          setArrayComparisons,
        });
        break;

      case 'Selection Sort':
        await selectionSort({
          randomArray,
          setRandomArray,
          sortSpeed,
          setArrayComparisons,
        });
        break;
      case 'Quick Sort':
        await quickSort({
          randomArray,
          setRandomArray,
          sortSpeed,
          setArrayComparisons,
        });
        break;
      default:
        break;
    }

    setRunning(false);
  };

  return (
    <>
      <div className="sorting-information">
        <span>Array Comparisons: {arrayComparisons}</span>
      </div>
      <SettingBar
        isRunning={isRunning}
        randomizeClicked={generateArray}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        startSort={startSort}
        changeArraySize={changeArraySize}
        changeSortSpeed={changeSortSpeed}
        setArrayComparisons={setArrayComparisons}
      ></SettingBar>
      <div className="bar-container">
        {randomArray.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            id={`bar-${idx}`}
            style={{
              height: `${value}px`,
              width: `${100 / randomArray.length}%`,
              backgroundColor: '#C9B79C',
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Visualizer;
