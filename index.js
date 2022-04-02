const chooseOptimalDistance = (t, k, ls) => {
    const distances = ls.sort((a, b) => b - a);

    if (k > distances.length) return null;
    if (distances.slice(-k).reduce((acc, item) => acc + item) > t) return null

    let optimal = 0;

    for (let i = 0; i < distances.length; i++) {
        let res = distances[i];
        if (distances[i] > t) continue;

        if (k === 1) return distances[i];

        res += chooseOptimalDistance(
            t - distances[i],
            k - 1,
            distances.slice(i + 1)
        );

        optimal = Math.max(res, optimal);
    }

    return optimal;
};

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null