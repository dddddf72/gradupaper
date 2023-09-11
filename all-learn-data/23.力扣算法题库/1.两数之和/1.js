function handle(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let m = i + 1; m < nums.length; m++) {
            if (nums[i] + nums[m] == target) {
                return [i, m]
            }
        }
    }
}
console.log(handle([2, 7, 11, 15], 9));