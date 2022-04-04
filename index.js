function combine(k, ls, start, itemArray, sumArr) {
    if (k === 0) {
        sumArr.push(itemArray.reduce( (a, b) => a + b));
        return;
    }

    for (let i = start; i <= ls.length - k; i++) {
        itemArray[itemArray.length - k] = ls[i];
        combine(k - 1, ls, i + 1, itemArray, sumArr);
    }
}

function chooseOptimalDistance(t, k, ls) {
    const sumArr = [];
    const itemArray = [];
    itemArray.length = k;

    combine(k, ls, 0, itemArray, sumArr);

    let res = sumArr.sort((a, b) => b - a).filter(item => item <= t).shift();

    return res ? res : null
}


console.log(chooseOptimalDistance(173, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null
console.log(chooseOptimalDistance(2430, 15, [2333, 144, 132, 123, 123, 100, 89, 89, 76, 73, 68, 64, 56, 56, 50, 44, 34])); //1287