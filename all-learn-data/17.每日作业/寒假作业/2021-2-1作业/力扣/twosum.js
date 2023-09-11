var nums = [2, 7, 11, 15];
target = 9;
var arr = [];
var res = [];
for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
            arr.push(i, j)
            arr.forEach(item => {
                if (!res.includes(item)) {
                    res.push(item)
                }
            })
        }
    }
}
if (res != "") {
    console.log(res)
} else {
    console.log("no two sum solution")
}

