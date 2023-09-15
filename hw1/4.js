var createCounter = function(init) {
    var val = init
    return {
        increment: () => {
            return ++val
        },
        decrement: () => {
            return --val
        },
        reset: () => {
            val = init
            return val
        }
    }
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4