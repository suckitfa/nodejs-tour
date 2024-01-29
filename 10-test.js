
/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
    // your code here
    let left = 0, right = 0
    while(right < list.length) {
      if (list[right] !== 0) {
        list[left++] = list[right++]
      } else {
        right ++
      }
    }
  }
  
const list = [1,0,0,2,3]
moveZeros(list) 
console.log(list) // [1,2,3,0,0]