function doAdd(){
    let sum=0;
    for(let i=0;i<arguments.length-1;i++){
        sum += arguments[i]
    }
    return sum
}

console.log(doAdd(1,2,3,4,5,6,7,8,9,10))