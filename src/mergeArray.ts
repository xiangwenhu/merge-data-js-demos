import { mergeArray } from "merge-data-js";
// import  mergeArray  from "merge-data-js/mergeArray";

const arr1 = [{
    idx: 1,
    name: 'name'
}, {
    idx: 2,
    name: "nam2"
}]

const arr2 = [{
    idx: 1,
    name: 'arr2-name',
    age: 18
}]

const arr3 = [{
    idx: 2,
    name: "arr3-name",
    sex: "男"
}]


const result = mergeArray(arr1, arr2, arr3)

console.log(result);