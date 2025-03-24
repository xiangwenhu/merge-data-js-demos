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

mergeObject(object1, object2, {
    "arr1[0].name": "arr1[0].arr1Name",
    "arr1[0].age": "arr1[0].age",
    "arr1[1].name": "arr1[1].arr1Name",
})

console.log("object1:", object1)
