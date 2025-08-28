function countChar(name) {
  let count=0

  for(let i=0;i<=name.length-1;i++){
    if (name.charAt(i) == 'k') {
      count ++
    }
  }

  if (count==0) {
    console.log("no recurrence found")
  } else {
    console.log(count)
  } 
}
countChar('karkuzhali')