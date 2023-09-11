var arr1 = [1, 2, 3]
var arr2 = [2, 3, 4]
var result = []
var all = arr1.concat(...arr2)
all.forEach(item => {
    if (!result.includes(item)) {
        result.push(item)
    }
})
console.log(result)