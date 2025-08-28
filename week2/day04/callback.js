

let arr1=[1,2,3,4,5,6,7]

let browser=()=>(console.log('Browser'))
 setTimeout(browser,2000)

 console.log(browser)


//callback

// function placeOrder(item,callback){
//     callback(item,callback)
//     console.log("Order placed for item" + item)
// }

// function selectItem(item,callback){
//     console.log("Item selected: " + item)
//     callback();
// }

// function makePayment(){
//      console.log("Payment done")
// }

// console.log(placeOrder("Laptop",selectItem('Laptop',makePayment())))



//class assignemnt
function orderFood(callback){
    console.log("Menu selected")
    setTimeout(() => {
        callback()
    }, 3000);
    
}


function prepareFood(preparation){
    console.log("Chef prepares")
    setTimeout(() => {
        preparation()
    }, 2000);
    
}


function deliverdFood(){
    console.log("Delivered to table")
}


//chain of callback -->trying to bring sync exe of async behaviour
orderFood(()=>prepareFood(()=>deliverdFood()))
// callback hell (doom of pyramid)
prepareFood()
deliverdFood()