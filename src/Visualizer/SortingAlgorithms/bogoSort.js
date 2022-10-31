import asyncTimeout from '../HelperFunctions/asyncTimeout';
import checkArray from '../HelperFunctions/checkArray';

let comparisons = 0;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const bogoSort = async ({
  randomArray,
  setRandomArray,
  sortSpeed,
  setArrayComparisons,
}) => {
  let arr = randomArray.concat();
  while (!(await checkArray(arr))) {
    setArrayComparisons(++comparisons);
    shuffleArray(arr);
    setRandomArray(arr.concat());
    await asyncTimeout({ timeout: sortSpeed });
  }
};

export default bogoSort;
