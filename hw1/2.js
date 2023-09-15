var createCounter = function(n) {
    return function(){
        return n++
    }
}

const f = createCounter(10)
console.log(f())
console.log(f())
console.log(f())