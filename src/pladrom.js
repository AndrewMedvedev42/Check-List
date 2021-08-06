function largestPalindrome(){

    var arr = [];    
    for(var i =99999; i>10000; i--){
        for(var j = 99999; j>10000; j--){
            var mul = j*i;
            if(isPalin(mul)){
                arr.push(j * i);
            }
        }
    }

    return Math.max.apply(Math, arr);
}

function isPalin(i){
    return i.toString() == i.toString().split("").reverse().join("");
}

console.log(largestPalindrome());