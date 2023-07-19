function reverseString(str){
    let splitedString = str.split("");
    let reversedString = splitedString.reverse();
    let joinedString = reversedString.join("");
    
    return joinedString;
   }
   console.log(reverseString("hello"));
