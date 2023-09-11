var x = 0;
if (x < 0) {
    x = -x;
    var y = String(x);
    var z = y.split("")
    var a = z.reverse();
    var result = a.join("")
    console.log(Number(-result))
} else if (x > 0) {
    var y = String(x);
    var z = y.split("")
    var a = z.reverse();
    if (a[0] == 0) {
        a.splice(0, 1)
        var result = a.join("")
    } else {
        var result = a.join("")
    }
    console.log(Number(result))
} else {
    console.log(0)
}

