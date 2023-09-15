var once = function(fn) {
    var isUsed
    return function(...args){
        if(isUsed === undefined){
            let ans = fn(...args)
            isUsed = true
            return ans
        } else{
            return undefined
        }
    }
}

var onceFn = once((a, b, c) => {return a + b + c})
console.log(onceFn(2, 4, 5))
console.log(onceFn(1, 2, 3))
console.log(onceFn(4, 5, 6))


var onceFn2 = once((a, b, c) => {return a * b * c})
console.log(onceFn2(2, 4, 5))
console.log(onceFn2(1, 2, 3))
console.log(onceFn2(4, 5, 6))