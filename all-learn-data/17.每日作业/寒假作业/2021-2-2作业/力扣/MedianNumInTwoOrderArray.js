var arr = [1, 3]
var res = [2]
var nums = [];
var Allnums = [];
nums.push(...arr, ...res)
for (let i = 0; i <= nums.length; i++) {
    if (nums.length >= 1) {
        Allnums.push(Math.min(...nums))
        nums.splice(nums.indexOf(Math.min(...nums)), 1)
        if (nums.length == 1) {
            Allnums.push(...nums)
        }
    }
}
if (Allnums.length % 2 == 0) {
    let Median = Allnums.slice(Allnums.length / 2 - 1, Allnums.length / 2 + 1)
    console.log((Median.reduce((a, b) => { return a + b }) / Median.length).toFixed(5))
} else {
    let Median = Allnums[Math.floor(Allnums.length / 2)]
    console.log(Median.toFixed(5))
}
