const printSortedArray = require('./printSortedArray')

function sort(arr){
    let swapped 
    for(let j = 0; j < arr.length; j ++){
        mod = false
        for(let i = 0; i < arr.length; i ++){
            if(arr[i] > arr[i+1]){
                swapped = true
                let maior = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = maior
            }
        }
        if(swapped = false) break
    }        
    return printSortedArray.printArr(arr)
}

console.log(sort([5,4,8,8,3,1,0]))