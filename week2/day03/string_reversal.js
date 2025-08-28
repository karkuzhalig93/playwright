//reverse without using reverse
function reverseString1(string){
    let rev = ""
    for(let i=string.length-1;i>=0;i--){
        rev += string.charAt(i)
    }
    console.log(rev)
}

reverseString1('laptop')

//reverse  using reverse
function reverseString2(string){
    let rev = string.split('').reverse().join('')
    console.log(rev)
}

reverseString2('laptop')



let nam2 = "hot water"
console.log(nam2.slice(5,-
    1))