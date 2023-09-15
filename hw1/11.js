var addTwoPromises = async function(promise1, promise2){
    return promise1.then((data1) => {
        return promise2.then((data2) => {
            return data1 + data2
        })
    })
}

addTwoPromises(Promise.resolve(2), Promise.resolve(5))
.then( (ans) => {
    console.log(ans)
})