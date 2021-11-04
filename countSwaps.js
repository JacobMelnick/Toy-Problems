const countSwaps = (a) => {
    let count = 0;

    [a, count] = sortArray(a);

    let first = a[0];
    let last = a[a.length - 1];

    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${first}`);
    console.log(`Last Element: ${last}`);
};

const sortArray = (a) => {
    let count = 0;
    let value = true;
    let index = 0;

    while (value && index < a.length) {
        value === false;

        if (a[index] > a[index + 1]) {
            let temp = a[index];
            a[index] = a[index + 1];
            a[index + 1] = temp;
            value === true;
            count++;
            index = -1;
        }
        index++
    }
    return [a, count]
}

console.log(countSwaps([3, 2, 1]));