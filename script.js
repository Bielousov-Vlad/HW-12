function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        array.splice(i, 1);
        i--;
      }
    }
    return array;
  }
  
  let array = [1, 2, 3, 4, 5];
  let item = 5;
  
  console.log(removeElement(array, item)); 