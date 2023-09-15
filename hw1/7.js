var reduce = function(nums, fn, init) {
    var ans = init;
    for(let i=0; i<nums.length; i++){
        ans = fn(ans, nums[i])
    }
    return ans
};