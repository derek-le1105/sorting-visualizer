import asyncTimeout from '../HelperFiles/asyncTimeout';

const prevColor = '#C9B79C';
const compareColor = '#574638';
const compareColor2 = '#B42D43';
const correctColor = `#899886`;

const bubbleSort = async ({
  randomArray,
  setRandomArray,
  sortSpeed,
  setArrayComparisons,
}) => {
  let prevBar = document.getElementById(`bar-${0}`);
  let comparisons = 0;
  for (let i = 0; i < randomArray.length; i++) {
    for (let j = 0; j < randomArray.length - i - 1; j++) {
      let bar1 = document.getElementById(`bar-${j}`);
      let bar2 = document.getElementById(`bar-${j + 1}`);

      await asyncTimeout({ timeout: sortSpeed });

      prevBar.style.background = prevColor;
      bar1.style.backgroundColor = compareColor;
      bar2.style.backgroundColor = compareColor2;

      await asyncTimeout({ timeout: sortSpeed });
      setArrayComparisons(++comparisons);
      if (randomArray[j + 1] < randomArray[j]) {
        //leftBar > rightBar
        let temp = randomArray[j];
        randomArray[j] = randomArray[j + 1];
        randomArray[j + 1] = temp;
        randomArray = randomArray.concat();
        setRandomArray(randomArray);
      }
      prevBar = bar1;
    }
    let correctBar = document.getElementById(
      `bar-${randomArray.length - i - 1}`
    );
    correctBar.style.backgroundColor = correctColor;
  }
};

export default bubbleSort;
