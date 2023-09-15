var chunk = function(arr, size) {
    let ans = []
    let temp = []
    for(let i in arr){
        if(size > temp.length){
            temp.push(arr[i])
        }
        if(temp.length == size){
            ans.push(temp)
            temp = []
        }
    }
    if(temp.length > 0){
        ans.push(temp)
    }
    return ans
};
