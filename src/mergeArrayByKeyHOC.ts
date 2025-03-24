import { mergeArrayByKeyHOC } from "merge-data-js";

const arr1 = [{
    id: 1,
    a: 1
}, {
    id: 2,
    a: 2
}, {
    id: 3,
    a: 3
}]

const arr2 = [{
    id: 1,
    b: 1
}]

const arr3 = [{
    c: 2,
    id: 2,
}, {
    c: 3,
    id: 3,
}]

const result = mergeArrayByKeyHOC(arr1)
    .push(arr2)
    .push(arr3)
    .merge();

console.log("result:", result);