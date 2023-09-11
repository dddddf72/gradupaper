var l1 = [9, 9, 9, 9, 9, 9, 9];
var l2 = [9, 9, 9, 9];
var l3 = [];
for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
        if (l1.length == l2.length) {
            if (i == j) {
                let result = l1[i] + l2[j]
                l3.push(result)
            }

        }
        else if (l1.length > l2.length) {
            if (i == j) {
                let result = l1[i] + l2[j]
                l3.push(result);
            }
        }
        else {
            if (i == j) {
                let result = l1[i] + l2[j]
                l3.push(result);
            }
        }
    }
}
if (l1.length > l2.length) {
    l3.push(...l1.slice(l1.length - 1 - (l1.length - l2.length), l1.length - 1))

    for (let i = 0; i < l3.length; i++) {
        if (l3[i] >= 10 && i != l3.length - 1) {
            l3[i] %= 10;
            l3[i + 1] += 1;
        } else if (l3[i] >= 10 && i == l3.length - 1) {
            l3[i] %= 10;
            l3.push(1)
        }
    }
    console.log(l3)
}
else if (l1.length == l2.length) {

    for (let i = 0; i < l3.length; i++) {
        if (l3[i] >= 10 && i != l3.length - 1) {
            l3[i] %= 10;
            l3[i + 1] += 1;
        } else if (l3[i] >= 10 && i == l3.length - 1) {
            l3[i] %= 10;
            l3.push(1)
        }
    }
    console.log(l3)
}
else {
    l3.push(...l2.slice(l2.length - 1 - (l2.length - l1.length), l2.length - 1))
    for (let i = 0; i < l3.length; i++) {
        if (l3[i] >= 10 && i != l3.length - 1) {
            l3[i] %= 10;
            l3[i + 1] += 1;
        } else if (l3[i] >= 10 && i == l3.length - 1) {
            l3[i] %= 10;
            l3.push(1)
        }
    }
    console.log(l3)
}