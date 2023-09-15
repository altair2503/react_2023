var expect = function(val){
    return{
        toBe: (valX) => {
            if(val === valX){
                return true
            } else{
                throw "Not Equal"
            }
        },
        notToBe: (valX) => {
            if(val !== valX){
                return true
            } else{
                throw "Equal"
            }
        }
    }
}

console.log(expect(5).toBe(5))
console.log(expect(5).toBe(1))

consolge.log("below is not to Be")
console.log(expect(5).notToBe(1))
console.log(expect(5).notToBe(5))