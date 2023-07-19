function removeDuplicate(array){
    let arr=[];
    for(let i=0; i<array.length;i++)
    if(arr.indexOf(array[i]) === -1)
    arr.push(array[i]);
    return arr;
    }
    console.log(removeDuplicate(array=[1,2,1,3,2,4,4,5,2]));