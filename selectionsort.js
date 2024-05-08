const printSortedArray = require('./printSortedArray')

function selectioSort(arr){
    for(let i = 0; i < arr.length; i++){
        let temp
        let min = arr[i]
        for(let j = i; j < arr.length; j++){            
            if(arr[j] < min){
                min = arr[j]  
                temp = arr[i]
                arr[i] = min
                arr[j] = temp
            } 
        }
        
    }
    return printSortedArray.printArr(arr)
}

console.log(selectioSort([5,4,8,8,3,1,0]))