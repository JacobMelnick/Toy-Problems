function minimumBribes(q) {
    var inverse = [];
    var count = 0;
    var chaos = false;
    for (var i = 0; i < n; i++) {
        inverse[q[i]] = i;
        if (q[i] - i > 2) {
            chaos = true;
            break;
        }
    }
    if (chaos) {
        console.log("Too chaotic");
    } else {
        for (var i = 0; i < n; i++) {
            var index = inverse[i];
            if (index > i) {
                count += index - i;
                for (var j = index; j > i; j--) {
                    q[j] = q[j - 1];
                    inverse[q[j]] = j;
                }
                q[i] = i;
                inverse[i] = i;
            }
        }
        console.log(count);
    }
}

