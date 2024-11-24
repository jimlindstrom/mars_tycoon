function weightedRandom(items, weights) {
    var i;
    for (i = 1; i < weights.length; i++) {
        weights[i] += weights[i - 1];
    }
    var random = Math.random() * weights[weights.length - 1];
    for (i = 0; i < weights.length; i++) {
        if (weights[i] > random) {
            break;
        }
    }
    if (i >= weights.length) { i = 0; } // patches over a weird, infrequent bug that otherwise returns undefined
    return items[i];
}

function weightedSeededRandom(rng, items, weights) {
    var i;
    for (i = 1; i < weights.length; i++) {
        weights[i] += weights[i - 1];
    }
    var random = rng() * weights[weights.length - 1];
    for (i = 0; i < weights.length; i++) {
        if (weights[i] > random) {
            break;
        }
    }
    if (i >= weights.length) { i = 0; } // patches over a weird, infrequent bug that otherwise returns undefined
    return items[i];
}

export { weightedRandom, weightedSeededRandom };
