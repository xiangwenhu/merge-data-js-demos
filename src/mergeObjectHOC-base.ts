import { mergeObjectHOC } from "merge-data-js";
// import mergeObjectHOC from "merge-data-js/mergeObjectHOC"

const object1: any = {
    a: 'a'
}
const object2 = {
    a: 'object2-a'
}
const object3 = {
    a: 'object3-a'
}

const result = mergeObjectHOC(object1)
    .push(object2, {
        "a": "a2"
    })
    .push(object3, {
        a: "a3"
    })
    .merge();

console.log(result);

