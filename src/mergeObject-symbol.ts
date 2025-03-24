import { mergeObject } from "merge-data-js"

const symbolName = Symbol.for("name");

const object1: any = {
    p1: "p1",
    id: 1,

}
const object2 = {
    p2: "p2",
    id: 2,
    product: {
        [symbolName]: "productName"
    }
}

mergeObject(object1, object2, [
   [ "id", "id2"],
   [["product", symbolName], "productName"]    
])

console.log("object1:", object1)

