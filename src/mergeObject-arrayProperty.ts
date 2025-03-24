import { mergeObject } from "merge-data-js"

const object1: any = {
    arr1: [{
        name: "name"
    }],
}
const object2 = {
    arr1: [{
        name: "arr1-0-name",
        age: 18
    }, {
        name: "arr1-1-name"
    }]
}

mergeObject(object1, object2)

console.log("object1:", object1)
