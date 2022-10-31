import asyncTimeout from '../HelperFiles/asyncTimeout';

const prevColor = '#C9B79C';
const compareColor = '#574638';
const iteratingColor = '#B42D43';
const correctColor = `#899886`;
const swappingColor = `#CF963A`;

let sortSpd;
let comparisons = 0;

const quickSort = async ({
  randomArray,
  setRandomArray,
  sortSpeed,
  setArrayComparisons,
}) => {
  sortSpd = sortSpeed;
  let leftIdx = 0,
    rightIdx = randomArray.length - 1;
  await quickSortHelper(
    randomArray,
    leftIdx,
    rightIdx,
    setRandomArray,
    setArrayComparisons
  );
};

const quickSortHelper = async (
  randomArray,
  leftIdx,
  rightIdx,
  setRandomArray,
  setArrayComparisons
) => {
  if (leftIdx < rightIdx) {
    let partitionIdx = await partition(
      randomArray,
      leftIdx,
      rightIdx,
      setRandomArray,
      setArrayComparisons
    );
    console.log(partitionIdx);
    await quickSortHelper(
      randomArray,
      leftIdx,
      partitionIdx - 1,
      setRandomArray,
      setArrayComparisons
    );
    await quickSortHelper(
      randomArray,
      partitionIdx + 1,
      rightIdx,
      setRandomArray,
      setArrayComparisons
    );
  }
};

const partition = async (
  randomArray,
  leftIdx,
  rightIdx,
  setRandomArray,
  setArrayComparisons
) => {
  let pivot = randomArray[rightIdx];
  let i = leftIdx - 1; //becomes second pivot

  let pivotBar = document.getElementById(`bar-${rightIdx}`);
  let ithBar;
  pivotBar.style.backgroundColor = compareColor;

  await asyncTimeout({ timeout: sortSpd / 3 });

  for (let j = leftIdx; j < rightIdx; j++) {
    let iteratorBar = document.getElementById(`bar-${j}`);
    ithBar =
      i >= 0
        ? document.getElementById(`bar-${i + 1}`)
        : document.getElementById(`bar-${0}`);
    if (j !== leftIdx) iteratorBar.style.backgroundColor = iteratingColor;
    ithBar.style.backgroundColor = swappingColor;

    await asyncTimeout({ timeout: sortSpd / 3 });

    setArrayComparisons(comparisons++);
    if (randomArray[j] <= pivot) {
      i++;
      let temp = randomArray[j];
      randomArray[j] = randomArray[i];
      randomArray[i] = temp;
      setRandomArray(randomArray.concat());
      await asyncTimeout({ timeout: sortSpd / 3 });
      ithBar.style.backgroundColor = prevColor;
    }
    iteratorBar.style.backgroundColor = prevColor;
  }

  let temp = randomArray[i + 1];
  randomArray[i + 1] = randomArray[rightIdx];
  randomArray[rightIdx] = temp;
  setRandomArray(randomArray.concat());

  if (ithBar) ithBar.style.backgroundColor = prevColor;
  pivotBar.style.backgroundColor = prevColor;
  return i + 1;
};

export default quickSort;
