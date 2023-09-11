var s = "ac"
var arr = []
var arr1 = []
var none = ""
if (s.length > 1) {
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) {
                let str = s.slice(i, j + 1)
                let long = str.length
                arr1.push(str.length)
                arr.push({ [long]: str })
            }
        }
    }
}
var max = Math.max(...arr1)
if (arr != "") {
    arr.forEach(value => {
        if (value[max] != undefined) {
            console.log(value[max])
        }
    })
} else {
    console.log(s[0])
}


