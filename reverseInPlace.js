function reverseString(str){
    let splitedString =str.split(" ");
    let reversedSentence = [];
    for(let i=0; i<splitedString.length;i++)
   reversedSentence.push(splitedString[i].split("").reverse().join(""))
    
    return reversedSentence;
    
}
console.log(reverseString("I am the good boy"));
