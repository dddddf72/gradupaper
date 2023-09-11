var x = "-91283472332";
var reg1 = /^[a-zA-Z]/;

if (reg1.test(x[0])) {
    console.log(0)
} else {
    var y = x.trim();
    var reg = /\d+/;
    var z = y.match(reg)
    if (y[0] == "-") {
        if (Math.pow(2, 31) >= Number(z[0])) {
            console.log(-Number(z[0]))
        } else {
            console.log(-Math.pow(2, 31))
        }

    } else {
        if (Math.pow(2, 31) >= Number(z[0])) {
            console.log(Number(z[0]))
        } else {
            console.log(Math.pow(2, 31))
        }
    }

}
