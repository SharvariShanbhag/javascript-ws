//node is asynchroneous
console.log('start')

function taskExecute(){
    console.log('Task end asynchroneously')
}

console.log(taskExecute,5000)


console.log('end')//this line will not wait for any code to get executed

// so now here the task is not completed but the end is came before the completion 
//now here comes the promises


console.log('start')

function taskExecute(){
    console.log('Task end asynchroneously')
}

// console.log(taskExecute,5000)
taskEx = new Promise((resolve, reject) => {
    setTimeout(()=>{
    },5000)
})


taskEx.then((data)=>{
    console.log(data)
})
console.log('end')

//Await Async







