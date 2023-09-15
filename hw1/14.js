var cancellable = function(fn, args, t) {
    fn(...args)

    let interval = setInterval(() => {
        fn(...args)
    }, t)

    let cancelFn = () => {
        clearInterval(interval)
    }
    
    return cancelFn
};
