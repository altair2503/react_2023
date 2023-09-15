var createHelloWorld = function(){
    return function(...args){
        return "Hello World" + args
    }
}

const f = createHelloWorld()
console.log(f())