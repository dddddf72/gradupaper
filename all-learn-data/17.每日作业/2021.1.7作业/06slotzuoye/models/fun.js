function handleNum(num) {
    if (num >= 100000000) {
        return Math.floor(num / 100000000) + "亿"
    } else if (num > 10000) {
        return Math.floor(num / 10000) + "万"
    }
    return num;
}

function handleTime(value) {
    if (value < 10) {
        return "0" + value;
    }
    return "" + value;
}
function handleDtime(value) {
    var second = Math.floor(value / 1000);
    var minute = handleTime(Math.floor(second / 60));
    second = handleTime(second % 60);
    var sum = minute + ":" + second;
    return sum;
}
function changeNum(num) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        if (num > 2) {
            arr.push(2);
        }
        else if (num > 0) {
            arr.push(Number(num.toFixed(1)));
        }
        else {
            arr.push(0);
        }
        num = num - 2;
    }
    return arr;
}
module.exports = { handleDtime, handleNum, changeNum }