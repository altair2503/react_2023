async function sleep(millis){
    await new Promise(resolve => setTimeout(resolve, millis))
}

var t = Date.now()
sleep(5000).then( () => {
    console.log(Date.now() - t)
})