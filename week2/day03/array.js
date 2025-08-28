// let arr =['a','b','c','d']
// new_arr = arr.splice(2,1,'e','f')
// console.log(arr)
// console.log(new_arr)


//finding duplicates in the same array
let array = [7,2,3,4,5,6,3,4,7,8]

for(let i=0; i<=array.length-1; i++){
  for(let j=i+1;j<=array.length-1;j++){
    if(array[i] == array[j]){
      console.log("Number " + array[i] + "is repeated")
    }   
  }
}


