import asyncTimeout from '../HelperFiles/asyncTimeout';

const bubbleSort = async ({ randomArray, setRandomArray }) => {
  for (let i = 0; i < randomArray.length; i++) {
    for (let j = 0; j < randomArray.length - i - 1; j++) {
      await asyncTimeout({ timeout: 3 });

      if (randomArray[j + 1] < randomArray[j]) {
        let temp = randomArray[j];
        randomArray[j] = randomArray[j + 1];
        randomArray[j + 1] = temp;
        randomArray = randomArray.concat();
        setRandomArray(randomArray);
      }
    }
  }
};

export default bubbleSort;
