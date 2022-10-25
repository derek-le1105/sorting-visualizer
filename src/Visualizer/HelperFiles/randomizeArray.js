const randomizeArray = (arraySize) => {
  let array = []

  for (let i = 0; i < arraySize; ++i)
    array.push(Math.floor(Math.random() * 500))
  return array
}

export default randomizeArray
