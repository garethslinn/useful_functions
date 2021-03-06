// mergeArrays(people,people2,key);

export function mergeArrays(arr1, arr2, key) {
   const arr = [...arr1, ...arr2]; // add both arrays
   return [...new Map(arr.map((item) => [item[key], item])).values()]; // remove duplicates
}

