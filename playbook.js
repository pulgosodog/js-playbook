/* Hello! This is going to be my javascript playbook, it will serve as a history of things I've learned of javascript and just wanted tested out*/

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i = 0; i < arr.length;i++) {
    for(let j = 0;j < arr[i].length;j++) {
      if(arr[i][j] !== elem) {
        newArr.push(arr[i][j]);
      }
    }

  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 'saxophones'));
