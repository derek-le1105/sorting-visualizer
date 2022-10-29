import asyncTimeout from '../HelperFiles/asyncTimeout';

const prevColor = '#C9B79C';
const compareColor = '#574638';
const wrongColor = '#B42D43';
const correctColor = `#899886`;

let arrayCopy = [];

//TODO: Set up color coding

const mergeSort = async ({ randomArray, setRandomArray, sortSpeed }) => {
  let leftIdx = 0,
    rightIdx = randomArray.length;
  arrayCopy = randomArray.slice();
  await splitArray(leftIdx, rightIdx, setRandomArray, sortSpeed);
};

const splitArray = async (leftIdx, rightIdx, setRandomArray, sortSpeed) => {
  if (rightIdx - leftIdx <= 1) return;

  let middle = Math.floor((leftIdx + rightIdx) / 2);
  console.log(leftIdx, middle);
  await splitArray(leftIdx, middle, setRandomArray, sortSpeed);
  console.log(middle, rightIdx);
  await splitArray(middle, rightIdx, setRandomArray, sortSpeed);

  await mergeArray(leftIdx, middle, rightIdx, setRandomArray, sortSpeed);
};

const changeColor = (...args) => {
  let color = args[args.length - 1];
  for (let i = 0; i < args.length - 1; i++) {
    args[i].style.backgroundColor = color;
  }
};

const mergeArray = async (
  leftIdx,
  middle,
  rightIdx,
  setRandomArray,
  sortSpeed
) => {
  let i = 0,
    j = 0;
  let leftArr = arrayCopy.slice(leftIdx, middle);
  let rightArr = arrayCopy.slice(middle, rightIdx);
  let tempArray = [];
  let bar1, bar2;

  while (i < leftArr.length && j < rightArr.length) {
    /*bar1 = document.getElementById(`bar-${leftIdx + i}`);
    bar2 = document.getElementById(`bar-${middle + j}`);

    changeColor(bar1, bar2, compareColor);*/

    await asyncTimeout({ timeout: sortSpeed / 4 });

    if (leftArr[i] <= rightArr[j]) {
      tempArray.push(leftArr[i]);
      i++;
    } else {
      tempArray.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    /*bar1 = document.getElementById(`bar-${leftIdx + i}`);
     bar2 = document.getElementById(`bar-${middle + j}`);
     console.log(bar1, bar2, middle, j);
     changeColor(bar1, bar2, compareColor);*/
    await asyncTimeout({ timeout: sortSpeed / 4 });
    tempArray.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    /* bar1 = document.getElementById(`bar-${leftIdx + i}`);
       bar2 = document.getElementById(`bar-${middle + j}`);
      changeColor(bar1, bar2, compareColor);*/
    await asyncTimeout({ timeout: sortSpeed / 4 });
    tempArray.push(rightArr[j]);
    j++;
  }
  let newBar;
  for (let iter = leftIdx, k = 0; iter < rightIdx; iter++, k++) {
    /*bar1 = document.getElementById(`bar-${leftIdx + i - 1}`);
    bar2 = document.getElementById(`bar-${middle + j - 1}`);
    newBar = document.getElementById(`bar-${iter}`);
    newBar.style.background = prevColor;
    changeColor(bar1, bar2, compareColor);*/
    await asyncTimeout({ timeout: sortSpeed / 4 });
    arrayCopy[iter] = tempArray[k];
    setRandomArray(arrayCopy.concat());
  }
};

export default mergeSort;
