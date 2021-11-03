const queries = (queries) => {
const frequent = [];
const result = [];
const hash = {};

    for (let i = 0; i < queries.length; i++) {
        const [action, value] = queries[i];
        let init = hash[value] || 0;

        if (action === 1) {
            hash[value] = init + 1;

            frequent[init] = (frequent[init] || 0) - 1;
            frequent[init + 1] = (frequent[init + 1] || 0) + 1;
        };

        if (action === 2 && init > 0) {
            hash[value] = init - 1

            frequent[init - 1] += 1;
            frequent[init] -= 1
        }

        if (action === 3) {
            result.push(frequent[value] > 0 ? 1 : 0)
        }
    }

return result
}

console.log(queries([[1,1],[2,2],[3,2],[1,1],[1,1],[2,1],[3,2]]))