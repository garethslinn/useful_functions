// getOdd(people,'age');
// get odd numbers only

function getOdd(arr, key) {
    const result = arr.map(function (item) {
        if (parseInt(item[key]) % 2 == 1) {
            return item
        }
    });
    return result.filter(x => x !== undefined);
};

getOdd(people, 'age');

