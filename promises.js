const pizzaOperation = new Promise((resolve, reject))=>{
    console.log('ordered a pizza')
    success=true;
    setTimeout(()=>{
        if(success){
            resolve('pizza delivered')
        }else{
            reject('pizza not delivered')
        }
    }, 5000)
}

