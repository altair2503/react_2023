/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.arr = []
    for(let i in nums){
        this.arr.push(nums[i])
    }
};

ArrayWrapper.prototype.valueOf = function() {
    let val = 0
    for(let i in this.arr){
        val += this.arr[i]
    }
    return val
}

ArrayWrapper.prototype.toString = function() {
    let str = "["
    for(let i in this.arr){
        str += this.arr[i]
        if(i < this.arr.length - 1){
            str += ","
        }
    }
    str += "]"
    return str
}

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2)
console.log(obj1.toString())