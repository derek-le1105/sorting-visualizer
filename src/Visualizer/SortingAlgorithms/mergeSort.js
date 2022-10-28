import asyncTimeout from '../HelperFiles/asyncTimeout';
var arrCpy = [];

const mergeSort = async ({ randomArray, setRandomArray, sortSpeed }) => {
  arrCpy = randomArray.concat();
  let leftIndex = 0,
    rightIndex = arrCpy.length;
  await mergeSortHelper(leftIndex, rightIndex, setRandomArray, sortSpeed);
};

const mergeSortHelper = async ({
  randomArray,
  setRandomArray,
  sortSpeed,
}) => {};

export default mergeSort;
