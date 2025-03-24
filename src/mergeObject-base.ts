import { mergeObject } from "merge-data-js"

const object1: any = {
    p1: "p1",
    id: 1
}
const object2 = {
    p2: "p2",
    id: 2,
}

mergeObject(object1, object2, {
    "id": "id2"
})

console.log("object1:", object1)
